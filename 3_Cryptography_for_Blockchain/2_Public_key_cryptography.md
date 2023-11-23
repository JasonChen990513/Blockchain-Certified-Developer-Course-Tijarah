# What is Public Key Cryptography?
Public key cryptography, also known as asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys and private keys.   

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
Assume the Alice want to send message to BOb.
Alice use her private key to generate the hash of digital signature.
Alice use Bob public key to encrypt the message content.
Alicr send above two to Bob.
Bob receive the message and use his private key to decrypt message content.
Bob use Alice public key to decrypt the hsah.
Bob compute the hash of receive content with same hash function.
If the hash is same with Alice send, that mean the content is correct.






























