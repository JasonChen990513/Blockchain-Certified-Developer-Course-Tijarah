## Video name: Types of Blockchain Explained | Blockchain Types
1.Public Blockchain
>Public accessible, permissionless.  
>No restriction on the participant and validator.  
>Uncontrollability: single entuty can complete control over this network.  
>Data is secure and help in immutability.  
>Everyone have equal, so it is fully distributed.  
>>EX: Bitcoin and ethereum.   

Question: The developer can do some change for the blockchain? if can, what is the meaning of the complete control?  
>Can modify the smart contract

2.Private Blockchain  
>Invitation is required. Resrict the people who can participate.  
>Only the user who in this system can see the transcation.  
>Centralized and much better control.   
>Governed and regulated by someone.   
>Can have token or not, it is based on the owner.  
>>EX: Hyperledger Fabric  



3.consortium /Hybird  
>Some nodes private.  
>Other are public.  
>Some node use to participate the transcation, and other node use to control consensus process.  
>All node can access by blockchain, and what information can be accessed is based on particular data in that blockchain.  
>There are two type of the users, one is only can access the blockchain as their function, another can control over the blockchain and decides the level of security.  

## Difference between Blockchain and cryptocurrency  
The relationship between Blockchain and cryptocurrency like the mobile app and mobile OS, like the bitcoin is the first cryptocurrency on the blockchain platform.  



## Video Name: Public vs Private Blockchain | Difference Between Public and Private Blockchain

Similarity:  
<table>
    <tr>
        <th>Private Blockchain</th>
        <th>Public Blockchain</th>
    </tr>
    <tr>
        <td colspan="2">Both function as an append-only ledger.</td>
    </tr>
    <tr>
        <td colspan="2">Each network node in both these blockchains has a complete replica of the ledger.</td>
    </tr>
    <tr>
        <td colspan="2">In both, the validity of a record is verified.</td>
    </tr>
    <tr>
        <td colspan="2">Both blockchain rely on numerous to authenticate edits.</td>
    </tr>
    <tr>
        <td colspan="2">Both blockchain using consensus algorithm to ensuring data consistency.</td>
    </tr>
</table>​

Differences:
| Public Blockchain | Private Blockchain |
|:-------------------|:------------------|
|Oder of magnitude is less in public blockchain|Oder of magnitude is more in private blockchain|
|Anyone can take part by verifiing and adding data in public blockchain|Private blockchain olny allow authoried entities can praticipate and control network|
|Decentralized|Centralized|
|Public blockchain more scalable|Private blockchain less scalable|
|Public blockchain is trustless network|Participants must not trust one another|
|More secure|Less secure|
|Consumes more energy|Consumes less energy|    
|Public bloclchain have riskier it terms of collision or 51% attack| Private blockchain no chance of minor collisions|
|Private TPS(Transaction per second) are more| Public blockchain TPS are less.|

Info of public vs private blockchain and scalability of blockchain  

https://www.analyticsvidhya.com/blog/2022/09/blockchain-technology-and-its-types/  
https://chain.link/education-hub/blockchain-scalability  





Public blockchain don't use consensus algorithm, private blockchain can use consensus algorithm such as Poorf of Elapsed Time(PoET), Raft and Istanbul BFT. (Question : Why don't use in public blockchain?) It is wrong. Both can use the consensus algorithm.  
IBFT  

## Transactions per second (or TPS) are lesser in a public blockchain when compared to private blockchains.    
Quesiton:   
As the number of authorized participants is less in a private blockchain, it can process hundreds or even thousands of transactions per second. why?  
Because the public blockchain need to wait more node to do the validation for each transaction. [look more](https://github.com/JasonChen990513/Blockchain-Certified-Developer-Course-Tijarah/blob/main/1_Introduction_to_Blockchain_Technology/5_Blockchain_vs_traditional_databases.md#for-the-reading-speed-of-the-data-why-traditional-is-faster)    

## Why public blockchain less scalable. Private blockchain more scalable.  
Question:   
public blockchain cannot compete with a private blockchain in terms of scalability issues as it is slow and hence can process transactions only at a slow pace.   

In a private blockchain, as only a few nodes need to manage data, transactions can be supported and processed at a much higher pace.  

What is the meaning of scalability at here?  

Scalability: The ability to effectively cope with the growing volume of transactions and number of users without degrading performance or increasing latency.     
So for the node increasing the public blockchain will be slower than private blockchain.  


## Public blockchain is trustless network. In private blockchain, participants must not trust one another.  
Question: why can not trust other perticipants in private blockchain?   
Answer:Because in a private blockchain, the validity of records cannot be independently verified as the integrity of a private network relies on the credibility of the authorized nodes.  

## Public Blockchain is more secure and private blockchain is less secure.   
>Because the node of the blockchain in public blockchain is higher than private blockchain, so the hacker hard to modify the data in blockchain. And hacker can hack whole network through accessing central node.  

Public bloclchain have riskier it terms of collision or 51% attack. Private blockchain no chance of minor collisions.  
>In the private blockchain, there is no chance of minor collision, because the validator in the network is know and they have suitable credentials.    
>In public blockchain, the validator don't know each other, so it increase the risk of the potential collision (Current cryptographic hash function used in blockchain. Although incredibly unlikely, the possibility still exists potential threat to the data integrity).    

>And it also have change to be 51% attack (where a group of miners who control more than 50% of the  network’s computing power can influence it).  






Question of block:  
![Alt text](https://github.com/JasonChen990513/Blockchain-Certified-Developer-Course-Tijarah/blob/main/Image/image-1.png?raw=true)  
![Alt text](https://github.com/JasonChen990513/Blockchain-Certified-Developer-Course-Tijarah/blob/main/Image/image.png?raw=true)  
For the percentage, it is show about the size of block.  
The block target size of 15 million gas. But the size will accroding to the demand of the network.  
If the block size greater than target size, the protocol will increase the base fee for the following block.   
Similarly, the protocol will decrease the base fee if the block size is less than the target block size.   
The amount by which the base fee is adjusted is proportional to how far the current block size is from the target.   

The adjust fee is for same node or it is for next block?   
[Source](https://ethereum.org/en/developers/docs/gas/#block-size)

what if the blockchain have some bug and need to fix, is the developer can do something in blockchain? 
