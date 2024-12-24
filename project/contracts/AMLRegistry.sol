// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract AMLRegistry is AccessControl, Pausable {
    bytes32 public constant MONITOR_ROLE = keccak256("MONITOR_ROLE");
    
    struct AMLAlert {
        address subject;
        string alertType;
        uint256 riskScore;
        uint256 timestamp;
        bool resolved;
    }
    
    AMLAlert[] public alerts;
    mapping(address => uint256[]) public addressToAlerts;
    
    event AlertCreated(uint256 indexed alertId, address indexed subject, string alertType);
    event AlertResolved(uint256 indexed alertId);
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MONITOR_ROLE, msg.sender);
    }
    
    function createAlert(
        address _subject,
        string calldata _alertType,
        uint256 _riskScore
    ) external onlyRole(MONITOR_ROLE) whenNotPaused returns (uint256) {
        uint256 alertId = alerts.length;
        
        alerts.push(AMLAlert({
            subject: _subject,
            alertType: _alertType,
            riskScore: _riskScore,
            timestamp: block.timestamp,
            resolved: false
        }));
        
        addressToAlerts[_subject].push(alertId);
        emit AlertCreated(alertId, _subject, _alertType);
        
        return alertId;
    }
    
    function resolveAlert(uint256 _alertId) 
        external 
        onlyRole(MONITOR_ROLE) 
        whenNotPaused 
    {
        require(_alertId < alerts.length, "Invalid alert ID");
        require(!alerts[_alertId].resolved, "Alert already resolved");
        
        alerts[_alertId].resolved = true;
        emit AlertResolved(_alertId);
    }
    
    function getAlertsByAddress(address _subject) 
        external 
        view 
        returns (uint256[] memory) 
    {
        return addressToAlerts[_subject];
    }
    
    function pause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }
    
    function unpause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }
}