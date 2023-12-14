# Performance impact of blockchain

## Add mode to public blockchain can improve the performance. But it also decrease the speed to do the consensus checking, so lead the performance lower. So actually when add more node, is increase or decrease for the blockchain?

In some cases, adding more nodes to a blockchain network, especially in public blockchains, can potentially lead to increased performance. This is because more nodes can contribute to a higher level of parallel processing, allowing the network to handle a greater number of transactions concurrently.

However, adding more nodes may introduce additional consensus overhead. Consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), involve nodes reaching an agreement on the validity of transactions. As the number of nodes increases, the consensus process may become more complex and time-consuming, potentially impacting performance.

Blockchain networks often implement optimization techniques and scalability solutions to address the challenges associated with increased node count. This includes the development of layer-2 solutions, sharding, and other mechanisms to enhance scalability without compromising security.

The impact also depends on the **underlying design and architecture** of the blockchain network. Some networks are inherently designed to scale more effectively with the addition of nodes, while others may face diminishing returns.

In summary, the impact of adding more nodes on blockchain performance is nuanced. While it can potentially lead to increased scalability, it's essential to consider the specific consensus mechanism, network design, and scalability solutions implemented in the blockchain system. The goal is to strike a balance between decentralization, security, and performance based on the requirements of the use case.


# Adding node impact

## If I'm trying to increase the performance of the blockchain , so I add some of my own nodes. Will this have any effect on the fairness of the blockchain? Or will there be other effects?

Adding more nodes may improve the overall performance of the blockchain network, but it's essential to consider the overall health of the network. If a majority of nodes are owned by the same entity or organization, it could lead to a centralization risk, diminishing the advantages of decentralization in a blockchain network.  

The following points should also be noted:  

Impact on Fairness:  
If your node possesses more computational power or resources, it may occupy a larger share in the consensus mechanism. This could lead to an unequal situation where nodes with more resources have a greater influence on block generation and the consensus process. This may be perceived as unfair, especially in decentralized blockchain networks.  

Security Concerns:  
If nodes are not rigorously vetted and owned by different entities, it could result in security issues. The addition of malicious nodes may impact the consensus mechanism and could potentially lead to attacks, such as double-spending attacks.  

Compliance and Protocol Adherence:  
When adding your own node, it is crucial to ensure compliance with the blockchain network's standards and protocols. Otherwise, there may be a risk of being excluded from the network, or other nodes might refuse to interact with it.   
 

# Node performance
## why node have higher performance is not fair in blockchain?
The statement about fairness is related to the potential imbalance in influence that nodes with significantly more computational power or resources may have in the consensus mechanism. In a blockchain network, fairness is often associated with ensuring an equal opportunity for nodes to participate in the consensus process and contribute to block generation.  

If certain nodes have substantially more resources, they may have a disproportionate impact on decision-making within the network. This concentration of influence can be perceived as unfair because it deviates from the principle of decentralization, where no single entity or group should have overwhelming control.  

In a decentralized blockchain, the goal is to distribute decision-making power and influence across a network of nodes to prevent centralization and promote a more democratic and equitable system. When nodes with significantly different performances exist, it raises concerns about the potential concentration of power, which can be seen as detrimental to the decentralized nature of the blockchain.  

Therefore, the emphasis on fairness is to encourage a level playing field among nodes, allowing a more inclusive and distributed participation in the consensus process. However, it's essential to strike a balance, as complete uniformity in node performance may not always be practical or necessary, depending on the specific design and goals of the blockchain network.  


# Oder of magnitude
## What is the Oder of magnitude meaning? transaction or other thing?
The term "order of magnitude" refers to the scale or size of a value, usually measured in powers of 10. In the context of blockchain, when someone mentions that the order of magnitude in public blockchain, they are likely referring to the scale or volume of transactions, computational power, or some other metric being magnitude compared to another blockchain or system.  

For example, if one blockchain has transaction processing capabilities or computational power that are several orders of magnitude less than another, it means there is a substantial difference in scale between the two systems. This comparison helps convey the magnitude of the difference, with each order of magnitude representing a factor of 10.  


# Serching data in blockchain
## How the blockchain store the data? The information on the internet we see that all are read from the blockchain?
The information on the internet that you access is not directly read from the blockchain in real-time for every request. Blockchain data is stored on the nodes that participate in the network. When users or applications want to access information from the blockchain.    

Blockchain Nodes: Nodes in the blockchain network store a copy of the entire blockchain, including all transactions and blocks. These nodes validate and maintain the integrity of the blockchain.  

Accessing Information: When a user or application wants to access specific information from the blockchain (e.g., transaction details, account balances), they can send a request to a node.  

Node Processing: The node processes the request and retrieves the relevant information from its local copy of the blockchain. It does not need to query the entire network for every request.  

Response to User/Application: The node sends the requested information back to the user or application, and it is presented through the blockchain explorer or the user interface of the application.  

Caching and Optimization: To optimize performance, nodes and blockchain explorers often use caching mechanisms. Frequently accessed data may be cached to reduce the load on the node and improve response times.  

So, while the blockchain stores a complete and immutable history of transactions, the way users interact with this data is typically through specific requests to nodes or blockchain explorers. This approach ensures that the burden on individual nodes is manageable, and users can access the information they need efficiently  


# Different Node Type
## Full Node:  
A full node is a participant in the blockchain network that maintains a complete copy of the entire blockchain ledger.   
It stores all historical transaction data from the genesis block to the latest block.   
Full nodes validate transactions, enforce consensus rules, and relay information to other nodes in the network.   
They ensure that the blockchain remains secure, transparent, and resistant to attacks.  

## Archive Node:  
An archive node is a specialized type of full node that not only stores the entire blockchain but also maintains historical data and states at every point in the blockchain's history.   
It suitable for complex queries and analytics.   
This includes the state of smart contracts and account balances at different blocks.  

## Lite Node:  
A lite node is a node that does not store the complete blockchain.   
Also known as a "pruned" or "light" node. It consume less storage and bandwidth compared to full nodes, making them suitable for resource-constrained devices or environments.   
Instead, it relies on full nodes to provide specific information on demand.   
Lite nodes typically store a recent state subset of blockchain data, such as block headers or a simplified payment verification (SPV) proof, to verify transactions without the need for a full copy of the blockchain.  




# Update in blockchain
## what if the blockchain have some bug and need to fix, is the developer can do something in blockchain? 
The process of developers making changes to a blockchain involves several steps and considerations. The specific steps can vary depending on the blockchain platform, its governance model, and the nature of the changes being proposed.

**Identify the Issue or Improvement:** Developers identify a bug, security vulnerability, or propose an improvement or new feature for the blockchain.

**Proposal:** Developers create a formal proposal outlining the changes, including the rationale, technical details, and potential impact. This proposal may be submitted to a community, a governance body, or relevant stakeholders, depending on the blockchain's structure.

**Community or Stakeholder Review:** The proposal undergoes a review process where the community or relevant stakeholders evaluate its merits. This may involve discussions, debates, and technical assessments.

**Consensus Building:** In decentralized blockchains, achieving consensus among network participants is crucial. This may involve signaling mechanisms, voting, or other consensus-building processes. For permissioned blockchains, consensus may be reached through established governance structures.

**Testnet Deployment:** Before implementing changes on the mainnet (live blockchain), developers often deploy the proposed changes to a testnet. This allows for thorough testing in a controlled environment to identify and address any unforeseen issues.

**Iterative Testing:** Developers and the community continue to test the changes iteratively, addressing any bugs or issues that arise during the testing phase.

**Mainnet Deployment:** Once satisfied with the testing results and consensus is reached, the changes are deployed to the mainnet. This is the live blockchain where real transactions occur.

**Monitoring and Maintenance:** After deployment, developers monitor the blockchain for any unexpected issues and provide ongoing maintenance as needed. Continuous monitoring ensures the stability and security of the network.

**Communication:** Throughout the process, clear communication with the community and stakeholders is essential. Regular updates, documentation, and notifications help maintain transparency and trust.




# PoS networks may have varying degrees of finality, which refers to the irreversibility of confirmed transactions.(why?)
Finality in the context of blockchain networks refers to the degree of confidence or irreversibility that can be associated with confirmed transactions. The concept of finality is particularly important in understanding how transactions are considered settled and irreversible within a blockchain network. Proof-of-Stake (PoS) networks, like other consensus mechanisms, may exhibit varying degrees of finality, and this is influenced by several factors:

### 1. **Consensus Mechanism Design:**
   - The consensus mechanism used in a PoS network significantly influences the finality of transactions. Different PoS protocols may have varying levels of finality due to the mechanisms they employ to reach consensus.

### 2. **Block Finality vs. Transaction Finality:**
   - Finality can be discussed in the context of both blocks and transactions. Block finality means that once a block is added to the blockchain, it is considered irreversible. However, this doesn't necessarily imply transaction finality, as transactions within a block may still be subject to changes until additional blocks are added.

### 3. **Probabilistic Finality:**
   - Some PoS networks achieve finality probabilistically. This means that as more blocks are added to the blockchain, the probability of a transaction being reversed or changed decreases. The higher the number of confirmations a transaction has, the more likely it is considered final.

### 4. **Long-Range Attacks:**
   - PoS networks, especially those using pure PoS without additional security measures, may be susceptible to long-range attacks. In such attacks, an attacker attempts to create an alternate blockchain starting from an older block. This could potentially lead to a situation where even relatively old transactions become reversible.

### 5. **Security Parameters:**
   - The security parameters set by the protocol designers play a crucial role. Parameters such as the number of confirmations required for finality and the depth of the blockchain considered secure can vary between PoS networks.

### 6. **Network Synchronization:**
   - In some PoS networks, the level of network synchronization and the speed at which blocks are propagated across the network can impact finality. Networks with quicker block propagation times may achieve finality faster.

### 7. **Fork Resolution Mechanisms:**
   - Forks can occur in blockchain networks, and how these forks are resolved affects finality. Some PoS networks have mechanisms in place to quickly resolve forks and converge on a single chain, minimizing the window during which transactions may be reversible.

### 8. **Incentives for Validators:**
   - The economic incentives provided to validators in PoS networks can influence finality. Validators have a stake in maintaining the security and integrity of the network, and their economic interests align with achieving a consensus on the state of the blockchain.

### 9. **Hybrid Approaches:**
   - Some PoS networks may use hybrid approaches, combining elements of PoS with other consensus mechanisms like Practical Byzantine Fault Tolerance (PBFT) or Delegated Proof-of-Stake (DPoS). These combinations can impact finality characteristics.

### 10. **Network Upgrades and Governance:**
    - The governance mechanisms and ability to upgrade the network may affect finality. Changes in the protocol, such as adjustments to consensus parameters, can influence how finality is achieved.

In summary, the varying degrees of finality in PoS networks are influenced by the design choices made in the consensus mechanism, the security parameters set by the protocol, the network's ability to synchronize, and the economic incentives provided to validators. Achieving a balance between security and efficiency is an ongoing challenge in the development and optimization of PoS-based blockchain networks.  




## Two Different Encryption Scheme (confuse)
There are two type of encryption scheme: sign-then-encrypt and encrypt-then-sign.  
Sign-then-encrypt can be exploited by receiver to spoof identity of sender and sent that data to third party.
> (How and Why i cannot understand)   

Encrypt-then-sign is more reliable and widely adopted.  

![image](https://www.tutorialspoint.com/cryptography/images/encryption_with_digital_signature.jpg)   

If using shared symmetric encryption key, both method transfer data may are modified by hacker.  
So use Public key cryptography to avoid this situation.  

















