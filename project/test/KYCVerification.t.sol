// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../contracts/KYCVerification.sol";

contract KYCVerificationTest is Test {
    KYCVerification public kyc;
    address public admin;
    address public verifier;
    address public user;
    
    function setUp() public {
        admin = address(this);
        verifier = address(0x1);
        user = address(0x2);
        
        kyc = new KYCVerification();
        kyc.grantRole(kyc.VERIFIER_ROLE(), verifier);
        
        vm.label(admin, "Admin");
        vm.label(verifier, "Verifier");
        vm.label(user, "User");
    }
    
    function testSubmitKYC() public {
        vm.startPrank(user);
        bytes32 documentHash = keccak256("test_document");
        string memory metadataURI = "ipfs://test";
        
        kyc.submitKYC(documentHash, metadataURI);
        
        (address userAddress, bytes32 storedHash, KYCVerification.VerificationStatus status, , ) = kyc.userKYC(user);
        assertEq(userAddress, user);
        assertEq(storedHash, documentHash);
        assertEq(uint(status), uint(KYCVerification.VerificationStatus.Pending));
        vm.stopPrank();
    }
    
    function testVerifyKYC() public {
        // Submit KYC first
        vm.startPrank(user);
        bytes32 documentHash = keccak256("test_document");
        kyc.submitKYC(documentHash, "ipfs://test");
        vm.stopPrank();
        
        // Verify KYC
        vm.startPrank(verifier);
        kyc.verifyKYC(user, KYCVerification.VerificationStatus.Verified);
        vm.stopPrank();
        
        assertEq(uint(kyc.getUserKYCStatus(user)), uint(KYCVerification.VerificationStatus.Verified));
    }
    
    function testFailVerifyWithoutRole() public {
        vm.startPrank(user);
        vm.expectRevert();
        kyc.verifyKYC(user, KYCVerification.VerificationStatus.Verified);
        vm.stopPrank();
    }
}