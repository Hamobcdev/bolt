// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../contracts/AMLRegistry.sol";

contract AMLRegistryTest is Test {
    AMLRegistry public aml;
    address public admin;
    address public monitor;
    address public subject;
    
    function setUp() public {
        admin = address(this);
        monitor = address(0x1);
        subject = address(0x2);
        
        aml = new AMLRegistry();
        aml.grantRole(aml.MONITOR_ROLE(), monitor);
        
        vm.label(admin, "Admin");
        vm.label(monitor, "Monitor");
        vm.label(subject, "Subject");
    }
    
    function testCreateAlert() public {
        vm.startPrank(monitor);
        uint256 alertId = aml.createAlert(subject, "suspicious_transaction", 75);
        
        uint256[] memory alerts = aml.getAlertsByAddress(subject);
        assertEq(alerts.length, 1);
        assertEq(alerts[0], alertId);
        vm.stopPrank();
    }
    
    function testResolveAlert() public {
        vm.startPrank(monitor);
        uint256 alertId = aml.createAlert(subject, "suspicious_transaction", 75);
        aml.resolveAlert(alertId);
        
        (,,,,bool resolved) = aml.alerts(alertId);
        assertTrue(resolved);
        vm.stopPrank();
    }
    
    function testFailCreateAlertWithoutRole() public {
        vm.startPrank(subject);
        vm.expectRevert();
        aml.createAlert(subject, "suspicious_transaction", 75);
        vm.stopPrank();
    }
}