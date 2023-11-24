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


continue tmr





# Digital Signatures:
Public key cryptography is also used for digital signatures, a way for someone to sign a document or message electronically to prove its authenticity and integrity.  

## How it work?
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
















