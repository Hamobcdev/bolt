// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract KYCVerification is AccessControl, Pausable {
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    
    enum VerificationStatus { Unverified, Pending, Verified, Rejected }
    
    struct UserKYC {
        address userAddress;
        bytes32 documentHash;
        VerificationStatus status;
        uint256 timestamp;
        string metadataURI;
    }
    
    mapping(address => UserKYC) public userKYC;
    
    event KYCSubmitted(address indexed user, bytes32 documentHash, uint256 timestamp);
    event KYCVerified(address indexed user, VerificationStatus status);
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(VERIFIER_ROLE, msg.sender);
    }
    
    function submitKYC(bytes32 _documentHash, string calldata _metadataURI) external whenNotPaused {
        require(userKYC[msg.sender].status != VerificationStatus.Verified, "KYC already verified");
        
        userKYC[msg.sender] = UserKYC({
            userAddress: msg.sender,
            documentHash: _documentHash,
            status: VerificationStatus.Pending,
            timestamp: block.timestamp,
            metadataURI: _metadataURI
        });
        
        emit KYCSubmitted(msg.sender, _documentHash, block.timestamp);
    }
    
    function verifyKYC(address _user, VerificationStatus _status) 
        external 
        onlyRole(VERIFIER_ROLE) 
        whenNotPaused 
    {
        require(_status == VerificationStatus.Verified || _status == VerificationStatus.Rejected, "Invalid status");
        require(userKYC[_user].status == VerificationStatus.Pending, "Invalid user status");
        
        userKYC[_user].status = _status;
        emit KYCVerified(_user, _status);
    }
    
    function getUserKYCStatus(address _user) external view returns (VerificationStatus) {
        return userKYC[_user].status;
    }
    
    function pause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }
    
    function unpause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }
}