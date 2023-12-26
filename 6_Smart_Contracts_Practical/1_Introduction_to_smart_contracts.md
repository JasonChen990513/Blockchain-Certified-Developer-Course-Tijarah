# Introduction to smart constracts
They are collection of code (its functions) and data (its state)  stored on the blockchain that follow "if this then that" logic, and are guaranteed to execute according to the rules defined by its code.   
Smart contracts cannot be deleted by default, and interactions with them are irreversible.  
Smart cannot control by a user, it is deployed to the blockchain. User can interact with smart contract and execute the function in the smart contract.   
Smart contracts can define rules, like a regular contract, and automatically enforce them via the code.   

# Permissionless
Anyone can write smart contract and deploy it on the blockchain network. Deploying a smart contract is technically a transaction, so it need to pay the gas fee. However, gas costs for contract deployment are far higher than transfer.  

# Public record
Smart contracts are useful for audits and tracking. Since Ethereum smart contracts are on a public blockchain, anyone can instantly track asset transfers and other related information. For example, user can check to see that someone sent money to their address.  

# Privacy protection
Smart contracts also protect user privacy. Since Ethereum is a pseudonymous network (user transactions are tied publicly to a unique cryptographic address, not user identity), user can protect your privacy from observers.  

# Visible terms
Same as traditional contracts, user can check what's in a smart contract before they sign it or interact with it. A smart contract's transparency guarantees that anyone can scrutinize it.  


## Ethereum has developer-friendly languages for writing smart contracts:

1. Solidity
2. Vyper


# COMPOSABILITY
Smart contracts are public on Ethereum network. Also can thought of as open APIs. You can call other smart contract in your smart contract.      Contracts can even deploy other contracts. Greatly extend what's possible.  

# LIMITATIONS
Smart contract cannot get information about "real-world" events. Because smart contracts only allow retrieving data from the blockchain. Data from off-chain sources is not allowed. Relying on external information could jeopardies consensus, which is important for security and decentralization. This is by design.   

However, the off-chain data is important for blockchain application. The solution is oracles which are tools that ingest off-chain data and make it available to smart contracts.  

Another limitation of smart contracts is the maximum contract size. A smart contract can be a maximum of 24KB or it will run out of gas.  

# Multiple Signature (Multisig)
Multisig contracts are smart contract accounts that require multiple valid signatures to execute a transaction. This is very useful for avoiding single points of failure for contracts holding substantial amounts of ether or other tokens.   

Multisigs also divide responsibility for contract execution and key management between multiple parties and prevent the loss of a single private key leading to irreversible loss of funds.    

For these reasons, multisig contracts can be used for simple DAO governance. Multisigs require N signatures out of M possible acceptable signatures (where N ≤ M, and M > 1) in order to execute. N = 3, M = 5 and N = 4, M = 7 are commonly used. A 4/7 multisig requires four out of seven possible valid signatures.   

This means the funds are still retrievable even if three signatures are lost. In this case, it also means that the majority of key-holders must agree and sign in order for the contract to execute.   








