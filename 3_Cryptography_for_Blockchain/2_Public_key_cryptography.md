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






























