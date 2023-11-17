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
|Consensus Mechanism|: PoW (Transitioning to PoS)  
Scalability: Ongoing improvements; Ethereum 2.0 for enhanced scalability. Through [layer 2](https://ethereum.org/en/developers/docs/scaling/#layer-2-scaling) scaling.  
Programming Language: Solidity  
Use Cases: General-purpose blockchain, decentralized applications  
Privacy and Security Features: Working on privacy solutions. Zero-knowledge proofs. Private Transactions.Immutable and Tamper-Proof Ledger. Immutable and Tamper-Proof Ledger.  
>zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge) and zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge)  

Governance Model: [Ethereum Improvement Proposals (EIPs)](https://ethereum.org/en/governance/#what-is-an-eip)  
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
Governance Model: ConsenSys-led development  
Token Standards: Compatible with Ethereum tokens  
Interoperability: Compatibility with Ethereum  
Community and Development Support: Developed by ConsenSys  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Focus on enterprise use; centralized governance  
Adoption and Partnerships: Enterprise-focused partnerships  

### Hyperledger Fabric:  
Consensus Mechanism: Pluggable, supports various mechanisms  
Scalability: Modular architecture for scalability  
Programming Language: Go, Java  
Use Cases: Supply chain, finance, enterprise solutions  
Privacy and Security Features: Granular control over data visibility  
Governance Model: Linux Foundation-led; multiple contributors  
Token Standards: Modular; can define custom tokens  
Interoperability: Can interoperate with other Hyperledger projects  
Community and Development Support: Active Hyperledger community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Focus on enterprise use; modular and flexible  
Adoption and Partnerships: Adopted by various industries; multiple collaborations  

### Corda:  
Consensus Mechanism: Notary-based consensus  
Scalability: Designed for privacy and scalability  
Programming Language: Kotlin, Java  
Use Cases: Financial services, legal, supply chain  
Privacy and Security Features: Focus on data privacy; selective data sharing  
Governance Model: R3-led development  
Token Standards: Corda does not have a built-in token standard  
Interoperability: Designed for interoperability between Corda networks  
Community and Development Support: R3-led development and support  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Emphasis on enterprise use; modular design  
Adoption and Partnerships: Adoption in financial services; partnerships with various industries  

### IBM Blockchain:  
Consensus Mechanism: Supports multiple mechanisms  
Scalability: Modular for different business needs  
Programming Language: Go, Java  
Use Cases: Supply chain, finance, healthcare  
Privacy and Security Features: Granular control over data visibility  
Governance Model: IBM-led development; Hyperledger consortium  
Token Standards: Can use Hyperledger token standards  
Interoperability: Interoperable within Hyperledger projects  
Community and Development Support: Active IBM Blockchain community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Focus on enterprise use; part of the Hyperledger consortium  
Adoption and Partnerships: Adoption in various industries; collaborations with enterprises  

### Bitcoin:  
Consensus Mechanism: PoW  
Scalability: Limited scalability, slower transaction processing  
Programming Language: Bitcoin Script  
Use Cases: Peer-to-peer digital currency  
Privacy and Security Features: Transparent and pseudonymous transactions  
Governance Model: Decentralized; community-driven  
Token Standards: Native currency (BTC)  
Interoperability: Independent; not designed for complex smart contracts  
Community and Development Support: Large and decentralized community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Decentralized; no single controlling entity  
Adoption and Partnerships: Widely adopted; accepted by various merchants  

### Hyperledger Sawtooth:  
Consensus Mechanism: PoET (Pluggable)  
Scalability: Modular design for flexibility  
Programming Language: Python, Go  
Use Cases: Supply chain, finance  
Privacy and Security Features: Focus on modularity and scalability  
Governance Model: Linux Foundation-led; multiple contributors  
Token Standards: Can define custom token standards  
Interoperability: Can interoperate with other Hyperledger projects  
Community and Development Support: Active Hyperledger community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Focus on enterprise use; modular design  
Adoption and Partnerships: Adopted by various industries; multiple collaborations  

### Stellar:  
Consensus Mechanism: Federated Byzantine Agreement (FBA)  
Scalability: High throughput and fast settlement  
Programming Language: Stellar (custom language)  
Use Cases: Cross-border payments, remittances  
Privacy and Security Features: Focus on fast and inexpensive transactions  
Governance Model: Non-profit Stellar Development Foundation  
Token Standards: Stellar Consensus Protocol (SCP)  
Interoperability: Designed for cross-border payments; can issue assets  
Community and Development Support: Stellar community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Emphasis on inclusivity; decentralized network  
Adoption and Partnerships: Adoption by financial institutions; partnerships for remittances  

### Ripple:
Consensus Mechanism: Ripple Protocol Consensus Algorithm (RPCA)  
Scalability: Fast and low-cost transactions  
Programming Language: Ripple Transaction Protocol (custom)  
Use Cases: Cross-border payments, remittances  
Privacy and Security Features: Emphasis on fast and cost-efficient transactions  
Governance Model: Ripple Labs  
Token Standards: Ripple (XRP)  
Interoperability: Focus on interoperability with traditional financial systems  
Community and Development Support: Ripple community  
Licensing and Openness: Open-source components  
Consolidation vs. Decentralization: Centralized governance; decentralized network  
Adoption and Partnerships: Adoption by banks; various financial partnerships  

### EOSIO:
Consensus Mechanism: Delegated Proof of Stake (DPoS)  
Scalability: High throughput and low latency  
Programming Language: C++  
Use Cases: Decentralized applications, social media    
Privacy and Security Features: Emphasis on scalability and usability  
Governance Model: DPoS and EOSIO Core Arbitration Forum (ECAF)  
Token Standards: EOSIO Token Standard (EOS)  
Interoperability: Designed for inter-blockchain communication  
Community and Development Support: Active EOSIO community  
Licensing and Openness: Open-source  
Consolidation vs. Decentralization: Emphasis on usability; DPoS system  
Adoption and Partnerships: Various decentralized applications (DApps) built on EOSIO  





















