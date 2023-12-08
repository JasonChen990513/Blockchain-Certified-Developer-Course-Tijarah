# What is Mrekle Tree
## Leaf Nodes:  
The leaf nodes in mrekle tree repersent a data block and store the hash data.  

## Non-Leaf Nodes (Internal Nodes):
Non-leaf nodes, also known as internal nodes, it will store the cryptographic hash of their child nodes' hashes.  
There are combine two leaf node's hash to compute the perent hash.  
This process will continue until a remain last single hash, this hash call Merkle root.  
## Merkle Root:
The Merkle root is the hash at the top of the tree, representing the entire set of data blocks.  
The Merkle root is a fixed-size, unique identifier for the entire dataset.  

# Role in blockchain
## Data Integrity:
It can ensure the integrity of data in blockchain.   
Any change data in leaf node will result in hash in Merkle root change.  
So can through Merkle root to check the data integrity.  
## Efficient Verification:
Verification in Merkle trees is efficient and without having to download and process the entire dataset.  
User only need to request the necessary branches of the tree then can prove specific transaction or data block.  
## Consensus Mechanisms:
In PoW and PoS system, the Merkle root is often included in the block header.   
It simplifies the verification process, the validator node only need to hash the block header to participate. Entire set of transactions is not required to validate a block.  
## Efficient Block Synchronization:
Merkle trees facilitate efficient synchronization of blocks between nodes on the network.  
It only need the exchange parts of the Merkle tree necessary to validate the transactions. Not entire block.  
## Security Against Tampering:
Merkle trees provide security against tampering or data corruption.   
If want to change it, need to recalculating Merkle root and proof of work or stake.  

# How to use Merkle root to validate the transaction hash in the tree?
## To validate the transaction hash:
1. Start with the transaction hash.  
2. Combine it with the first hash in the Merkle path (either concatenate or hash them together, depending on the position of the transaction in the tree).  
3. Repeat the process for each hash in the Merkle path, moving towards the Merkle root.  
4. The final result should be the Merkle root.  

## Example:
If want to check the Transaction A is inside the block.  
Start with A.  
Combine with HashB to get HashAB.  
Combine with HashCD to get Root.  

below which one is correct?  

![image](https://editor.analyticsvidhya.com/uploads/86353A.png)





Reference:  
https://www.analyticsvidhya.com/blog/2022/10/a-quick-guide-to-blockchain-merkle-tree/  
https://www.javatpoint.com/blockchain-merkle-tree  
https://www.simplilearn.com/tutorials/blockchain-tutorial/merkle-tree-in-blockchain