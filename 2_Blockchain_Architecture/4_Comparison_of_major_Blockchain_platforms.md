# Comparison of Major Blockchain Platforms
## 
|Platform|Consensus Mechanism|Scalability|Programming Language|Use Cases|
|:-|:-|:-|:-|:-|
|Ethereum|PoW (Transitioning to PoS)|Working on Ethereum 2.0 for improved scalability|Solidity|General-purpose blockchain, decentralized applications|
|Quorum (ConsenSys)|Raft or Istanbul BFT|Focus on privacy and performance|Solidity|Enterprise solutions, finance|
|Hyperledger Fabric|Pluggable, supports various mechanisms|Modular architecture for scalability|Go, Java, Node.js|Supply chain, finance, enterprise solutions|
|Corda|Notary-based consensus|Designed for privacy and scalability|Kotlin, Java|Financial services, legal, supply chain|
|IBM Blockchain|Supports multiple mechanisms|Modular for different business needs|Go, Java|Supply chain, finance, healthcare|
|Bitcoin|PoW|Limited scalability, slower transaction processing|Bitcoin Script|Peer-to-peer digital currency|
|Hyperledger Sawtooth|PoET (Pluggable)|Modular design for flexibility|Python, Go|Supply chain, finance|
|Stellar|Federated Byzantine Agreement (FBA)|High throughput and fast settlement|Stellar (custom language)|Cross-border payments, remittances|
|Ripple|Ripple Protocol Consensus Algorithm (RPCA)|Fast and low-cost transactions|Ripple Transaction Protocol (custom)|Cross-border payments, remittances|
|EOSIO|Delegated Proof of Stake (DPoS)|High throughput and low latency|C++|Decentralized applications, social media|


## Detail of each platforms

### Ethereum:  
Consensus Mechanism: PoW (Transitioning to PoS)  
Scalability: Ongoing improvements; Ethereum 2.0 for enhanced scalability. Through [layer 2](https://ethereum.org/en/developers/docs/scaling/#layer-2-scaling) scaling.  
Programming Language: Solidity  
Use Cases: General-purpose blockchain, decentralized applications  
Privacy and Security Features: Working on privacy solutions. Zero-knowledge proofs. Private Transactions.Immutable and Tamper-Proof Ledger. Immutable and Tamper-Proof Ledger.  
>zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge) and zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge)  
 
Token Standards: [ERC-20, ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/)  
Interoperability: Standardized interfaces for token exchanges  
Community and Development Support: Large and active community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Tends towards decentralization  
Adoption and Partnerships: Widely adopted; various partnerships  

reference:  
https://medium.com/coinmonks/ethereum-privacy-and-security-features-exploring-for-enhanced-blockchain-protection-73f66d01b34a  
 

### Quorum (ConsenSys):  
Consensus Mechanism: [Raft or Istanbul BFT](https://docs.goquorum.consensys.net/concepts/consensus)  
Scalability: [Focus on privacy and performance](https://consensys.io/blog/consensys-launches-consensys-rollups-with-the-support-of-mastercard-fostering-innovation-and-scalability-on-the-ethereum-mainnet-for-private-and-permissioned-blockchains)    
Programming Language: Solidity  
Use Cases: Enterprise solutions, finance, real estate, syndicated loans, digital currencies, business automation, and [more](https://consensys.net/quorum/enterprise/)      
Privacy and Security Features: Privacy-focused; supports private transactions  
Token Standards: Compatible with Ethereum tokens  
Interoperability: Compatibility with Ethereum  
Community and Development Support: Developed by ConsenSys  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Focus on enterprise use; centralized governance  
Adoption and Partnerships: Enterprise-focused partnerships  

### Hyperledger Fabric:  
Consensus Mechanism: [Pluggable](https://hyperledger-fabric.readthedocs.io/en/release-2.2/whatis.html#pluggable-consensus), [supports various mechanisms](https://www.spydra.app/blog/hyperledger-fabric-consensus-mechanisms-exploring-the-options)    
Scalability: [Modular architecture for scalability](https://www.linkedin.com/pulse/scaling-hyperledger-fabric-transactions-strategies-enhancing-throughput)  
Programming Language: Go, Java, Node.js  
Use Cases: Supply chain, finance, enterprise solutions, and [more](https://www.kaleido.io/blockchain-blog/10-use-cases-for-hyperledger-fabric)  
Privacy and Security Features: Granular control over data visibility  
Token Standards: Modular; can define custom tokens  
Interoperability: Can interoperate with other Hyperledger projects  
Community and Development Support: Active Hyperledger community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Focus on enterprise use; modular and flexible  
Adoption and Partnerships: Adopted by various industries; multiple collaborations  

### Corda:  
Consensus Mechanism: [Notary-based](https://docs.r3.com/en/platform/corda/4.9/community/key-concepts-consensus.html) consensus  
Scalability: [Designed for privacy and scalability](https://docs.r3.com/en/platform/corda/5.0/key-concepts.html)  
Programming Language: Kotlin, Java  
Use Cases: Financial services, legal, supply chain, and [more](https://docs.r3.com/en/platform/corda/5.0/key-concepts.html#use-case-examples)    
Privacy and Security Features: Focus on data privacy; selective data sharing  
https://docs.r3.com/en/tools/cdl/privacy-overlay/privacy-hazard.html 
Token Standards: [Corda does not have a built-in token standard](https://www.linkedin.com/pulse/corda-crossover-private-dlt-public-blockchain-token-icer)  
Interoperability: Designed for interoperability between Corda networks  
Community and Development Support: R3-led development and support  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Emphasis on enterprise use; modular design  
Adoption and Partnerships: Adoption in financial services; partnerships with various industries  

### IBM Blockchain:  
Consensus Mechanism: [Supports multiple mechanisms](https://www.ibm.com/downloads/cas/Q9DGBLV7), depend on the scenario.  
Scalability: Modular for different business needs  
Programming Language: Go, Java  
Use Cases: Supply chain, finance, healthcare, and [more](https://www.ibm.com/blockchain/use-cases/)    
Privacy and Security Features: Granular control over data visibility  
Token Standards: Can use Hyperledger token standards  
Interoperability: Interoperable within Hyperledger projects  
Community and Development Support: Active IBM Blockchain community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Focus on enterprise use; part of the Hyperledger consortium  
Adoption and Partnerships: Adoption in various industries; collaborations with enterprises  

### Bitcoin:  
Consensus Mechanism: [PoW](https://www.santander.com/en/stories/blockchain-consensus)  
Scalability: Limited scalability, slower transaction processing  
Programming Language: Bitcoin Script  
Use Cases: Peer-to-peer digital currency [more](https://www.securities.io/5-best-use-cases-for-bitcoin-btc/)  
Privacy and Security Features: Transparent and pseudonymous transactions   
Token Standards: Native currency (BTC)  
Interoperability: Independent; not designed for complex smart contracts  
Community and Development Support: Large and decentralized community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Decentralized; no single controlling entity  
Adoption and Partnerships: Widely adopted; accepted by various merchants  

### Hyperledger Sawtooth:  
Consensus Mechanism: PoET, PBFT, and Raft. (Pluggable) [look more](https://sawtooth.hyperledger.org/docs/1.2/#dynamic-consensus-label)   
Scalability: [Modular design for flexibility](https://medium.com/@thakrandisharth/scaling-hyperledger-sawtooth-network-283f4b8024ce) 
Programming Language: [Python, JavaScript, Go, C++, Java, and Rust.](https://sawtooth.hyperledger.org/docs/1.2/)  
Use Cases: Supply chain, finance, and [more](https://medium.com/@thakrandisharth/hyperledger-sawtooth-use-cases-and-industry-applications-869535d17968)    
Privacy and Security Features: Focus on modularity and scalability   
Token Standards: Can define custom token standards  
Interoperability: Can interoperate with other Hyperledger projects  
Community and Development Support: Active Hyperledger community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Focus on enterprise use; modular design  
Adoption and Partnerships: Adopted by various industries; multiple collaborations  

### Stellar:  
Consensus Mechanism: [Federated Byzantine Agreement (FBA)](https://www.leewayhertz.com/what-is-stellar-blockchain/)  
Scalability: [High throughput and fast settlement](https://medium.com/cryptocurrency-scripts/stellar-blockchain-an-essential-solution-for-scalable-cryptocurrency-development-5c62a18bb1f2)   
Programming Language: [Stellar](https://www.quora.com/In-what-programming-language-is-Stellar-written-in) (custom language)  
Use Cases: Cross-border payments, , and [more](https://rejolut.com/blog/top-10-use-cases-of-stellar-blockchain/)  
Privacy and Security Features: Focus on fast and inexpensive transactions    
Token Standards: Stellar Consensus Protocol (SCP)  
Interoperability: Designed for cross-border payments; can issue assets  
Community and Development Support: Stellar community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Emphasis on inclusivity; decentralized network  
Adoption and Partnerships: Adoption by financial institutions; partnerships for remittances  

### Ripple:
Consensus Mechanism: Ripple Protocol Consensus Algorithm ([RPCA](https://reasonabledeviations.com/notes/papers/ripple_consensus_protocol/))  
Scalability: [Fast and low-cost transactions](https://cointelegraph.com/learn/what-is-ripple-a-beginners-guide-for-understanding-ripple)  
Programming Language: Ripple Transaction Protocol (custom)  
Use Cases: Cross-border payments, remittances, and [more](https://aws.amazon.com/partners/success/ripple/)  
Privacy and Security Features: Emphasis on fast and cost-efficient transactions  
https://support.ripplescience.com/hc/en-us/articles/360023117192-Ripple-Science-s-Security-Features#infrastructure-and-data-0-0   
Token Standards: Ripple (XRP)  
Interoperability: Focus on interoperability with traditional financial systems  
Community and Development Support: Ripple community  
Licensing and Openness: Open-source components  
Consolidation vs. Decentralization: Centralized governance; decentralized network  
Adoption and Partnerships: Adoption by banks; various financial partnerships  

### EOSIO:
Consensus Mechanism: Delegated Proof of Stake ([DPoS](https://developers.eos.io/welcome/v2.2/protocol-guides/consensus_protocol/#3-eosio-consensus-dpos--abft))  
Scalability: [High throughput and low latency](https://medium.com/@moonxfamily/scaling-the-eosio-platform-a86f8708bb3)  
Programming Language: [C++](https://developers.eos.io/welcome/v2.2/introduction-to-eosio/technical_features)  
Use Cases: Decentralized applications, social media, and [more](https://medium.com/@sheos.org/how-eosio-use-cases-are-impacting-global-communities-75cc7a206b9)    
Privacy and Security Features: [Emphasis on scalability and usability](https://eosio.lacchain.net/en/docs/privacidad/)   
Token Standards: EOSIO Token Standard (EOS)  
Interoperability: Designed for inter-blockchain communication  
Community and Development Support: Active EOSIO community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Emphasis on usability; DPoS system  
Adoption and Partnerships: Various decentralized applications (DApps) built on EOSIO  





















