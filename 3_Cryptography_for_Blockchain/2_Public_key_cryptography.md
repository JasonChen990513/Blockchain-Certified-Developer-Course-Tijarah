# What is Public Key Cryptography?
Public key cryptography, also known as asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys and private keys.

# Benefits of Public Key Cryptography
## Secure Communication:
Public key cryptography enables secure communication over insecure channels.  
## Authentication:
Public key infrastructure allows for user authentication. The private key is kept secret, and the public key is freely distributed, allowing others to verify the identity of the key owner.  
## Key Exchange:
Public key cryptography solves the key exchange problem. Instead of needing a secure channel to exchange secret keys, parties can freely exchange public keys, and the security relies on the difficulty of certain mathematical problems.  
## Non-repudiation:
Digital signatures provide non-repudiation, meaning that a party cannot deny sending a message that has been digitally signed with their private key.  
## Scalability:
In systems with many users, public key cryptography is more scalable than symmetric key cryptography.
## Decentralization:
Public key cryptography supports decentralized systems by allowing participants to independently generate and manage their key pairs.

# Disadventage of Public Key Cryptography
## Computational Cost:
Public key algorithms are generally more computationally intensive than symmetric key algorithms. This can impact performance, especially in resource-constrained environments.
## Length of Keys:
As security requirements increase, longer key lengths are needed. Longer keys result in slower cryptographic operations.
## Single Point of Failure (Private Key):
The compromise of a private key can have severe consequences. Protecting private keys is crucial, and their loss or exposure requires a careful response.
## Key Management Complexity:
Managing key pairs, especially in large systems, can be complex. This includes key generation, distribution, storage, and revocation. A robust key management system is essential.  



## Public Key:
The public key is shared openly and is used for encryption. Anyone can use this key to encrypt a message or data.  
## Private Key:
The private key is kept secret and is used for decryption. Only the owner of the private key can decrypt messages that were encrypted with their corresponding public key.  

## Generating public and private keys
Encrypted by the public key can only be decrypted by the related private key.  
A person cannot guess the private key based on knowing the public key. So public key can be freely shared. The private key however belongs to only one person.  

There are several well-known mathematical algorithms that are used to produce the public and private key.   

**Rivest-Shamir-Adelman (RSA)** – Oldest of the public-private key cryptography systems. Frequently used to transmit shared keys for symmetric key cryptography.  
**Digital Signature Standard (DSS)** – a Federal Information Processing Standard specifying the algorithms that can be used to generate digital signatures used by NIST.  
**Elliptic curve cryptography (ECC)**– As its name implies, ECC relies on elliptic curves to generate keys. Often used for key agreement and digital signatures. At PreVeil, we use elliptic-curve cryptography’s Curve-25519 and NIST P-256.  


# Explanation of how it works:
## Sender's Side:
If Alice wants to send a secure message to Bob, she requests Bob's public key.  
Bob provides Alice with his public key.  
Alice uses Bob's public key to encrypt the message.  
She sends the encrypted message to Bob.  

## Receiver's Side:
Bob, the recipient, uses his private key to decrypt the message.  
Since only Bob has the private key corresponding to the public key used for encryption, he is the only one who can decrypt and read the original message.  


# How it work in blockchain?  
A want to transfer 1 bitcoin to B  
A use B's public key to encrypt transcation detail and use A's private key to create the  digital signature.   
Blockchain network will validate the transaction. the node in the network will use the A's public key to validate the transaction detail  



# Digital Signatures:
Public key cryptography is also used for digital signatures, a way for someone to sign a document or message electronically to prove its authenticity and integrity.  
Digital signature is the technique that binds a person/entity to the digital data.   
This binding can be independently verified by receiver as well as any third party.   
It is the cryptographic value that compute by message content and sender private key.   
And it can make the receiver to check the message is belong to the sender original message.   
This requirement is very crucial in business applications, since likelihood of a dispute over exchanged data is very high.  


## model of digital signature
![image](https://www.tutorialspoint.com/cryptography/images/model_digital_signature.jpg)  
Since digital signature is created by ‘private’ key of signer and no one else can have this key; the signer cannot repudiate signing the data in future.  

## Importance of Digital Signature
Apart from ability to provide non-repudiation of message, the digital signature also provides message authentication and data integrity.

Message authentication − when receiver validated the message using sender public key. That mean the message is send from sender.  

Data Integrity − If someone modify the message, the hash compute by the receiver will not match with the receive hash. Hence, the receiver can reject this message.  

Non-repudiation − Excluding specific cases, only the sender know the private key and can generate the unique signature on a given data. So if future dispute arises, it can be a proof as evidence.  

## How digital signatures work?
For digital signatures, the sender (Alice) uses her private key to create the signature, which is then verified by the recipient (Bob) using Alice's public key.  

If want to send the message that include the digital signature and encrypt content.  
It will using two pair key to encrypt the message.  
Assume the Alice want to send message to Bob.  
Alice use her private key to generate the hash of digital signature.  
Alice use Bob public key to encrypt the message content.  
Alicr send above two to Bob.  
Bob receive the message and use his private key to decrypt message content.  
Bob use Alice public key to decrypt the hsah.  
Bob compute the hash of receive content with same hash function.  
If the hash is same with Alice send, that mean the content is correct.  


## Two Different Encryption Scheme
There are two type of encryption scheme: sign-then-encrypt and encrypt-then-sign.  
Sign-then-encrypt can be exploited by receiver to spoof identity of sender and sent that data to third party.
> (How and Why i cannot understand)   

Encrypt-then-sign is more reliable and widely adopted.  

![image](https://www.tutorialspoint.com/cryptography/images/encryption_with_digital_signature.jpg)   

If using shared symmetric encryption key, both method transfer data may are modified by hacker.  
So use Public key cryptography to avoid this situation.  



reference:  
https://www.preveil.com/blog/public-and-private-key/  
https://www.tutorialspoint.com/cryptography/cryptography_digital_signatures.htm  






# Question of application in blockchain

need to encrypt the message with receiver public key  
hash the message and encrypt wirh sender private key  
In step 3, how the blockchain network know the encrypt message and generate hash? They should not have the receiver private key to decrypt.  


## ??????????????????????????????
Step 1: Raj will take the message that he wants to share and encrypt it using Aditi’s public key or public address. This will convert the message into an unreadable format.

Step 2: Raj will now take the hashed message and sign this message using his private key. This is known as digitally signing the transaction (digital signature).

Step 3: Now, Raj is ready to send this message to Aditi via the blockchain network. But before this, Raj needs to get this transaction verified by the entire blockchain network. Using Raj’s public key, every node on the network will verify the digital signature of Raj and pass the transaction. 

Step 4: After successful verification, Aditi will receive the message but in an encrypted form known as ciphertext. First off, Aditi will also verify the digital signature of Raj using his public key or public address. 

Step 5: Then, Aditi will decrypt the ciphertext using her private key. This will convert the message into a readable format. 

Step 6: The transaction is successfully carried out. Also, it is recorded on a new block in the blockchain permanently. No one can deny that this transaction between Raj and Aditi did not take place.   
[from](https://data-flair.training/blogs/public-key-cryptography/)


no need to encrypt the message    
only encrypt the hash  
so in step 3 no need to decrypt message     
what can do if want to improve the security of this transaction?   


## ??????????????????????????????
Digital Signature Verification:

The user signs the transaction with their private key, creating a digital signature.
The digital signature is included in the transaction details.
Transaction Propagation:

The signed transaction is broadcasted to the network.
Public Key Extraction:

Each node, upon receiving the transaction, extracts the public key of the sender from the transaction details.
Hashing and Comparison:

The node doesn't decrypt the transaction or the digital signature. Instead, it hashes the transaction content.
The node uses the extracted public key to decrypt the digital signature, obtaining a hash of the original transaction.
Verification:

The node compares the hash obtained from the transaction content with the hash obtained from the decrypted digital signature.
If the two hashes match, it indicates that the transaction has not been tampered with, and it was indeed signed by the private key associated with the public key.

from ChatGPT




## ??????????????????????????????
### How the public key cryptography work in blockchain.
**1. Transaction Initiation:**
User creating a digital message that include necessary information.    
>Recipient's Address: The public key (or address) of the recipient, identifying the destination for the funds. This is where the cryptocurrency will be sent.    
Sender's Address: The public key (or address) of the sender, identifying the entity initiating the transaction. This is used for verification purposes.    
Amount: The quantity of cryptocurrency being transferred from the sender to the recipient.    
Digital Signature: The digital signature, created using the sender's private key, is a crucial component for transaction verification. It ensures that the sender has the authority to initiate the transaction.    
Timestamp: A timestamp indicating when the transaction was created. This helps in ordering transactions and preventing issues like double-spending.    

>Transaction Fee (Optional): Depending on the blockchain, a transaction fee may be required. It incentivizes miners to include the transaction in a block. The sender may choose to attach a fee to expedite transaction processing.    
Additional Data (Optional): Some blockchain platforms allow users to include additional data or metadata in their transactions. For example, a message or a reference to a smart contract.    


**2. Creation of Digital Signature:**
The sender uses their private key to create a digital signature for the transaction.       
The digital signature is a unique cryptographic code that is generated based on the transaction data.(Hashing)  

**Transaction Broadcasting:**
The signed transaction is broadcast to the network. This means the transaction details and the digital signature are sent to all the nodes (participants) in the blockchain network.

### How it work?
A. Transaction Broadcasting:  
When a user initiates a transaction, they broadcast it to the entire network. The transaction details, including the sender's address, recipient's address, amount, and the digital signature, are sent to all nodes in the network.  

B. Initial Checks:  
Nodes first perform some basic checks to ensure the transaction is well-formed and adheres to the protocol rules. This includes verifying that the transaction has a valid structure and is not malformed.   

C. Verification of Digital Signature:  
The most critical aspect of the validation process is verifying the digital signature using the sender's public key.  
Nodes use the sender's public key to decrypt and verify the digital signature generated by the sender's private key. If the signature is valid, it confirms that the transaction was indeed initiated by the owner of the private key associated with the provided public key.  

D. Balance and UTXO (Unspent Transaction Outputs) Checks:  
Nodes check whether the sender has sufficient funds to execute the transaction. This involves looking at the sender's previous transactions and ensuring that the sum of the inputs (previous unspent transaction outputs) is greater than or equal to the amount being sent.  
UTXO model is commonly used in blockchain systems like Bitcoin, where each transaction consumes certain unspent outputs and creates new ones.  

D. Double-Spending Prevention:  
Nodes check whether the same funds are not being spent in multiple transactions (double-spending). This is critical to maintaining the integrity of the ledger.  

what is UTXO model is commonly used in blockchain systems like Bitcoin, where each transaction consumes certain unspent outputs and creates new ones?




**3. Verification by Miners/Nodes:**
Miners or validating nodes on the network receive the transaction and verify the digital signature using the sender's public key.  
If the verification is successful, it means the sender is the rightful owner of the private key associated with the public key used in the transaction.  


**4. Inclusion in a Block:**
Once verified, the transaction is added to a block by the miners. 


**5. Consensus Mechanism:**
Depending on the blockchain's consensus mechanism (e.g., proof-of-work or proof-of-stake), and ensure agreement across the network on the order and validity of transactions.  

**6. Broadcasting the Updated Ledger:**
Once a block is added to the blockchain, the updated ledger (containing all transactions up to that point) is broadcast to all nodes in the network.  










### What is the relationship between wallet address, public key and private key?
**Wallet Address:** 
The string of characters, that represent the destination on the blockchain network.  
It is a derived version of the public key.  
The wellat address is use to receive the funds.   
Hard to determine the public key from the address.  

**Public Key:**
The public key is derived from a private key using a mathematical algorithm.  
The public key is used to generate the wallet address and to verify digital signatures.  
It is a cryptographic key that is openly shared with others on the network.   


**Private Key:**
The private key is a secret piece of information that is kept secure by the owner.
It is used to create digital signatures for transactions and to access the funds associated with the corresponding wallet address.  
The private key is used in the process of signing transactions, and it should never be shared with anyone.  
Losing the private key can result in the loss of access to the associated funds.  


## The relationship can be summarized as follows:

Wallet Address is derived from the Public Key.  
Public Key is derived from the Private Key.  

Why need the wellat address, the public key seen can done same work?






New ChatGPT











