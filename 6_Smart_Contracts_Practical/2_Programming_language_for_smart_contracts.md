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

``` solidity
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
```


**Tag Used for:**
|Tag|Used for|
|:-|:-|
|@title|Title for the smart contract|
|@author|Author of the smart contract|
|@notice|Explanation of the function
|@dev|Explanation of the developer|
|@param|Explanation of the parameter|
|@return|Explanation of the return type|

    

# Structure of a contract
## State 

State variables can have different visibility levels, including public, internal, private, and external.   
public: Readable from outside the contract, and an automatic getter function is generated.  
internal: Readable only within the current contract and derived contracts.  
private: Readable only within the current contract.  
external: Similar to public, but the automatic getter function is not generated.  

## Functions
Functions can be called internally or externally.

Such as:  
``` solidity
function getGameHistory () external view returns(GameInfo[] memory){  
    //do some condition check then return the data  
    return (gameHistory);  
}  
```

## Function modifiers

Function modifiers in Solidity are a powerful feature that allows you to encapsulate reusable logic and apply it to multiple functions within a contract.  
A modifier is a piece of code that can be reused across different functions to enforce common checks, conditions, or pre/post-processing steps.  
Modifiers can be especially useful for access control, input validation, or ensuring certain conditions are met before executing a function.  

Example:  
``` solidity 
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
```

Pure functions can’t read or write from the storage.  
Constant modifier function cannot write in the storage in any way.  
View acts just like constant in that its function cannot change storage in any way.  
Payable allows a function to receive ether while being called.  

# Events
Events allow convenient usage of the EVM, via the frontend of the DApp. Events can be heard and maintained.
An event in Solidity is a way to emit and log information from a smart contract. It allows a contract to notify the outside world or other parts of the contract when specific actions or state changes occur.  
Events are often used to provide a transparent and decentralized way to track and listen for important occurrences within the contract.  


Example:  
``` solidity 
event MyEvent(address indexed sender, uint256 amount);

function someFunction(uint256 amount) public {
    // ... contract logic ...
    emit MyEvent(msg.sender, amount);
}
```

# Value types
Boolean  
``` solidity
bool b = false;
```


# Integers
There are two sub-types of integers, that is int and uint, which are signed integer and unsigned integer types respectively.   
Memory size is allocated at compile time; it is to be specified using int8 or int256, where the number represents the size allocated in the memory.  
```solidity
int public signedNumber;
uint public unsignedNumber;

signedNumber = -5;
unsignedNumber = 10;

```
uint8 is uses 8 bits, allowing values in the range of 0 to 255 (2^8 - 1).

# Address
```solidity
address a = 0xe2793a1b9a149253341cA268057a9EFA42965F83
```


This type has several members that can be used to interact with the contract.  
balance returns the balance of the address in units of wei.
```solidity
address a = 0xe2793a1b9a149253341cA268057a9EFA42965F83;
uint bal = a.balance;
```

transfer is used to transfer from one address to another address.  
```solidity
address public recipient;

function sendEther() public payable {
    // Transfer Ether to the recipient address
    recipient.transfer(msg.value);
}
```

Noting that the transfer function is a basic way to handle Ether transfers, but it has limitations.  
For more complex scenarios or other contracts that have a large codebase, consider using more advanced patterns, such as send function. Which provide more flexibility and control over the transfer process.  
```solidity 
bool success = recipient.send(msg.value);
require(success, "Ether transfer failed");
```


# Call Callcode Delegatecall
Call function is a low-level function that allows a contract to invoke another contract's function.  
Callcode is similar to call but replaces the calling contract's code with the code of the called contract for the duration of the call.
Delegatecall allows a contract to execute code from another contract while maintaining the calling contract's storage context.  



# Array value type
Fixed-size array is initialized as test[10]  
Dynamic-size array is initialized as test2[]  


# Literal
1. Integer literals
```solidity
int a = 11;
```

2. String literals
```solidity
Test = ‘Batman’;
Test2 = “Batman”;
```

3. Hexadecimal literals
Hexadecimal literals are prefixed with the keyword hex and are enclosed with double (hex”69ed75") or single (hex’69ed75') quotes.  

4. Address literals
```solidity
address userAddress = 0xe2793a1b9a149253341cA268057a9EFA42965F83;
```


# Enums
Enums allow the creation of user-defined type in Solidity. Enums are convertible to and from all integer types.   
```solodity
enum Action {jump, fly, ride, fight};
```


# Function
There are two types of functions: internal and external.   
Internal functions can be called from inside the current contract only.   
External functions can be called via external function calls.  




# Reference types
These are passed on by reference; these are very memory heavy, due to the allocation of memory they constitute.  

# Structs
A struct is a composite data type that is declared under a logical group. 
Structs are used to define new types. 

```solidity
//Use to store the user information
struct UserInfo{
    address userAddress;  //store particular user address
    uint userOption; // store user's option
}

//Use to store the game information
struct GameInfo{
    UserInfo user1;  //store user1 information
    UserInfo user2;  //store user2 information
    string finalResult;  //store game result
}
```

# Data location
Parameters of functions are stored in memory.    
Other local variables make use of storage.  
Parameters of external functions use calldata memory.  

# Mapping
Mapping is used for key-to-value mapping.  
Mappings can be seen as hash tables that are virtually initialized such that every possible key exists and is mapped to a default value.  
Ethereum addresses with their corresponding value.

```solidity
mapping(address => uint256) public balances;

function updateBalance(uint256 newBalance) public {
    balances[msg.sender] = newBalance;
}
```
The function takes a uint256 parameter newBalance, and it updates the balance associated with the caller's address in the balances mapping to the new value.  