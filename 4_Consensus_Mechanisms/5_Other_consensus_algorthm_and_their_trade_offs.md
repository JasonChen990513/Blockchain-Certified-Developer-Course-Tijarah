# Proof of Weight  
It is the large upgradation of the Proof of Stake mechanism which aims to remove the biased nature of PoS.  
The Proof of Weight is not a single consensus algorithm.  
It is an umbrella term for an entire array of consensus algorithms largely based on the Algorand consensus model.
Artificial Intelligence Laboratory where Algorand is a protocol that confirms transactions very quickly.   
Ensures the network remains secure as long as the majority (more than two-thirds) of the weighted fraction are honest users.  



# How it work
Every nodes is assigned "Weight" and it is base on how much contribution to the network.   
The weighted factors not only measure the number of tokens owned, that may consider like spacetime, reputation, and any other measurable metric.  
> EX: For example, in a file Filecoin uses Proof-of-Spacetime as the weighted value based on how much IPFS data node are storing.  
> Chia uses Proof-of-space and proofs of time as the weighted value to achieve consensus.  
When transaction is made on blockchain. The system will create a committee of random network members.  
It is according to the node's weight using Proof-of-Weight consensus mechanism.  
Slightly centralizes the consensus process within the random committee.  
# Benefits of Proof of Weight (PoW)
Scalability: proof-of-weight consensus mechanism is that it is highly customizable and capable to scale it to a great number of users.   
Security: Proof of Weight (PoW) also provides some level of centralization and creating committees of network participants, ensuring that decisions are made collectively by a diverse group. Which improve security of the network.  
Risk of Fork: PoW is its ability to mitigate the risk of forks. PoW not only consider the token held by node. It also consider incorporating other weighted values.  
Less resource intensive and highly scalable: PoW does not require complex mechanisms or significant computational power, allowing the network to reach consensus quickly and process transactions faster.  
  
# Limitations of Proof of Weight (PoW)
Not economically friendly: Proof-of-weight is not designed to generate passive revenue streams as it is very challenging to attract users towards this model.  
Popularity: keeping the users incentivized to participate in such networks is very difficult, as they don’t earn rewards. Therefore, it is not that popular or preferred model by the blockchain community to achieve consensus.  

Reference:  
https://www.geeksforgeeks.org/proof-of-weight-pow-consensus-mechanism-in-blockchain/  
https://medium.com/@humeyrakoseogluu/proof-of-weight-pow-consensus-mechanism-in-blockchain-988479595b1c  
# Proof of Capacity
Proof of Capacity (PoC), also known as Proof of Space, is a consensus algorithm used in some blockchain networks as an alternative to Proof of Work (PoW) and Proof of Stake (PoS). PoC is designed to be more energy-efficient compared to PoW while still providing a decentralized and secure method for reaching consensus.  

# How it work
1. Plotting: 
Participants will allocate the space on their device and create plot file.  
The plot file is filled with pseudo-random data. Those data using a cryptographic hash function to ensure security.  
When Participants create plot files, you are producing nonces.  
Each of the nonces will contain 8,192 hashes and these are bundled together into a number of pairs that are termed "scoops".  

2. Mining or Sealing:  
participants perform random access reads on their plot files.   
The more plots a participant has (i.e., the more storage space they allocated), the higher the chance of successfully sealing a block.  
For example, if a miner starts mining and creates scoop number 40, the miner would then go to nonce 1’s scoop number 40 and utilize the data from that scoop to compute a deadline value.  
In final, who caculate shortest deadline will be the winer.  

# Advantages:
Up to 30-times more energy efficient than the ASIC-based mining of the bitcoin cryptocurrency.  
Any standard hard drive can be used. Even mine from the hard disk of the Android phone.  
Mining data can be easily wiped-off and the drive can be reused for any other data storage purpose.  
# Disadvantages:
This technology has been embraced by a small number of developers.  
Except for mining, the data plotted on the hard disk is useless.  
Widespread adoption of PoC could start an "arms race" to produce higher capacity hard drives.  



https://www.investopedia.com/terms/p/proof-capacity-cryptocurrency.asp  
https://www.geeksforgeeks.org/proof-of-capacity/  
https://www.coinbureau.com/education/proof-of-capacity-explained/  
# Proof of Authority  

# Proof of Inportance
Proof of Importance (PoI) is a consensus algorithm used by the NEM (New Economy Movement) blockchain platform. This concept is a further build-up on the Proof of Stake (PoS) algorithm. The PoI uses network theory to assign a score for each node’s importance in the network. But different with the PoS, PoI also consider total amount, activity clusters, reputation, and transactions made through any given address.

# How it work
Vesting: First, any node should have at least 10,000 XEM coins before they can start harvesting or vesting. The consensus mechanism counts the number of coins present in your account for a set number of days (mostly 30 days) for calculating the Proof of Importance score of the node. The higher the number of XEM coins higher will be the node’s score.  
Activity: The PoI algorithm takes into account the user's activity in the network, such as the number and frequency of transactions. Users who actively engage in transactions are rewarded with a higher Importance Score.  
Transaction Partners: The relationships between users and their transaction partners are considered. Transactions with accounts that have higher Importance Scores contribute more significantly to the Importance Score of both the sender and the receiver.  

# Advantages:
Compare to the Proof of Work, it can save a lot of energy.  
The importance score will be higher when nodes spread XEM coins and lower in case they hoard the coins. Avoid nodes to hoard the coins.  
Discourages Forks: In Proof of Importance, each node’s importance score is based on network activity and dynamic. So, this discourages the blockchain forks as the new user needs to expend resources on both forked networks to remain active to maintain their score.  
# Disadvantages:
Complexity: The algorithm involves various factors such as account balance, transaction history, and network activity to determine importance. This complexity might be challenging for some users to understand, and it may also make the system more difficult to implement and maintain.  

Transaction Volume Dependency: Some implementations of Proof of Importance factor in the user's transaction volume. Depending on transaction volume might create scenarios where users feel compelled to engage in unnecessary transactions solely to increase their importance score, which could impact the efficiency of the network.  

Algorithmic Manipulation: Users might attempt to manipulate the algorithm by engaging in specific activities or transactions to boost their importance artificially. This could potentially undermine the fairness of the consensus mechanism.  

https://www.geeksforgeeks.org/proof-of-capacity/