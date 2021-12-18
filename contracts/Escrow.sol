// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@acala-network/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

contract Escrow is ADDRESS {

	// works as expected
	function contractWorks()
		external
		returns (bool)
	{
		return true;
	}
    
    function test()
        public
        returns (uint)
    {
		IERC20 token = IERC20(ADDRESS.ACA);
		console.log("reached");
    	uint res = token.balanceOf(msg.sender); 
		console.log("never reached");
		return res;
    }
}