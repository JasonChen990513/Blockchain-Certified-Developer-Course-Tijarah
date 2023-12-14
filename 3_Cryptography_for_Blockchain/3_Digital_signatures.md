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


## Digital signatures depend on two functions:

Sign (Message, Private Key) -> Signature  
Given the message we want to sign and a private key, this function produces a     unique digital signature for the message.  

Verify (Message, Public Key, Signature) -> True/False  
Given the message we want to verify, the signature and the public key, this function gives a binary output depending on whether the signature is authentic.  

[refer](https://www.blockchain-council.org/blockchain/how-does-blockchain-use-public-key-cryptography/)


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







Reference:  
https://www.preveil.com/blog/public-and-private-key/  
https://www.tutorialspoint.com/cryptography/cryptography_digital_signatures.htm  
















https://rejolut.com/blog/how-blockchain-document-signing-works/  
https://www.linkedin.com/pulse/digital-signatures-blockchain-irvinetek  
https://www.shiksha.com/online-courses/articles/digital-signing-in-blockchain/  
