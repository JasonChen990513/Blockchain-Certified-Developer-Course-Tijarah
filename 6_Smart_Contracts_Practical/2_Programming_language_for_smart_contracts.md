# Laying out a Solidity file
By specifying a version number that specific source file will compile with a version earlier or later than the specified version number.  

pragma solidity 0.8.19;  
specified version number 0.8.19

pragma solidity >=0.4.0 <0.6.0;  
specified version number earlier than 0.6.0 and later than 0.4.0

pragma solidity ^0.8.0;  
specified version number later 0.8.0


# Commenting
Single line (//) comments and multi-line(/* … */) comments are used.  

Natspec Comment, which is also possible; in this type of comment, we either use /// or /** … */, and they are to be used only earlier function declaration or statements.  
Natspec is short for natural specification; these comments as per the latest solidity version (0.4.24) do not apply to variables, even if the variables are public. Here is a small code snippet with an example of such these types of comments:

pragma solidity ^0.4.19;  
/// @title A simulator for Batman, Gotham’s Hero  
/// @author DC-man  
/// @notice You can use this contract for only the most basic simulation  
/// @dev All function calls are currently implement without side effects  
contract Batman {  
  /// @author Samanyu Chopra  
  /// @notice Determine if Bugs will accept `(_weapons)` to kill  
  /// @dev String comparison may be inefficient  
  /// @param _weapons The name weapons to save in the repo (English)  
  /// @return true if Batman will keep it, false otherwise  
  function doesKeep(string _weapons) external pure returns (bool) {  
  return keccak256(_weapons) == keccak256(“Shotgun”);  
  }  
}  


**Tag Used for:**
|Tag|Used for|
|@title|Title for the smart contract|
|@author|Author of the smart contract|
|@notice|Explanation of the function
|@dev|Explanation of the developer|
|@param|Explanation of the parameter|
|@return|Explanation of the return type|

    

# Structure of a contract
## State variables
State variables can have different visibility levels, including public, internal, private, and external.   
public: Readable from outside the contract, and an automatic getter function is generated.  
internal: Readable only within the current contract and derived contracts.  
private: Readable only within the current contract.  
external: Similar to public, but the automatic getter function is not generated.  

## Functions
Functions can be called internally or externally.

Such as:  
function getGameHistory () external view returns(GameInfo[] memory){  
    //do some condition check then return the data  
    return (gameHistory);  
}  

## Function modifiers

Function modifiers in Solidity are a powerful feature that allows you to encapsulate reusable logic and apply it to multiple functions within a contract.  
A modifier is a piece of code that can be reused across different functions to enforce common checks, conditions, or pre/post-processing steps.  
Modifiers can be especially useful for access control, input validation, or ensuring certain conditions are met before executing a function.  

Example:  
modifier onlyOwner() {
    require(msg.sender == owner, "Not the owner");
    _; //This is a placeholder that gets replaced by the modified function's code
}

modifier checkValue(uint256 amount) {
    require(msg.value >= amount, "Insufficient funds");
    _;
}

function purchase(uint256 amount) public payable onlyOwner checkValue(amount) {
    // Function logic for purchase
}






