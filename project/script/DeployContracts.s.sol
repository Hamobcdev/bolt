// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../contracts/KYCVerification.sol";
import "../contracts/AMLRegistry.sol";

contract DeployContracts is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);
        
        KYCVerification kyc = new KYCVerification();
        AMLRegistry aml = new AMLRegistry();
        
        console.log("KYC Verification deployed to:", address(kyc));
        console.log("AML Registry deployed to:", address(aml));
        
        vm.stopBroadcast();
    }
}