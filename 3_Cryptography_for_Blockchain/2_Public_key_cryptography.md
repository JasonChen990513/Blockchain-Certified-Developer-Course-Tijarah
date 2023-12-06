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

-----------------------------------------------------------------

## Public Key:
The public key is shared openly and is used for encryption. Anyone can use this key to encrypt a message or data.  
## Private Key:
The private key is kept secret and is used for decryption. Only the owner of the private key can decrypt messages that were encrypted with their corresponding public key.  

## Generating public and private keys
Encrypted by the public key can only be decrypted by the related private key.  
A person cannot guess the private key based on knowing the public key. So public key can be freely shared. The private key belongs to only one person.  

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

### Why need the wallet address, the public key seen can done same work?
**Ease of Use:**  
Wallet address are shorter and more friendly.
Wallet addresses are designed to be easily readable and shareable, facilitating a more user-friendly experience.  
**Privacy and Security:**  
Wallet addresses help enhance privacy and security.  
Public key is part of the cryptographic key, if can reduce the exposing that can enhance the security implications.  
So that is the way to protect the user identities and prevant portential attacks.

**Derivation and Compatibility:**
Wallet address is derived from public key, so it can standardize the representation of address across different network.  
Making it easier for users to interact with different cryptocurrencies.  

**Checksums:**
Many wallet addresses incorporate checksums to detect errors in manually entered addresses. 
This helps users avoid mistakes when transcribing or sharing addresses, reducing the risk of sending funds to the wrong destination
Preventing loss of funds that could occur if transactions were sent to mistyped or invalid addresses.

**Hierarchical Deterministic (HD) Wallets:**
HD wallet will generate the sequence of key pairs from a single seed and use addresses to manage the funds. This hierarchical structure enables the creation of new addresses for each transaction without compromising the security of the wallet.  

**Compatibility with Smart Contracts:**
Smart contracts often work with wallet addresses rather than raw public keys.  
The address provides a standardized, user-friendly identifier that can be easily processed by smart contracts on the blockchain.  


# Elliptic Curve Cryptography(ECC)
 
![Alt text](https://github.com/JasonChen990513/Blockchain-Certified-Developer-Course-Tijarah/blob/main/Image/image-3.png)    
The line connecting points P and Q, intersecting the elliptical curve at a third point -R, and its symmetric point with respect to the x-axis is denoted as R.  
P dot Q -> R  
If the two points are identical, a tangent is taken.  
then continue do P dot R to get the next point.  
In final get the result is public key.  
private key will decide how many time need to dot.   

G is the generator point    
(Publick key)PK = (Private key)n * G  

So it is very easy to compute the PK using the private key and G.  
But very difficult to using PK and G to compute the private key.  
Only know the starting point and end point. It's challenging to deduce the calculation process.  



To encrypt a message using ECC, the sender takes the recipient's public key and performs a series of mathematical operations on it and the message to produce a ciphertext. The recipient can then use their private key (which only they have) to decrypt the ciphertext and recover the original message.  

## Diffie–Hellman key exchange
![image](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Public_key_shared_secret.svg/1200px-Public_key_shared_secret.svg.png)  
Though the fomula PK = n * G, we can know the public key is generate from private key and G.
Assuem the user A and B change their public key.  
User A can compute the A's PV(private key) * B's PV * G.    
User B can compute the B's PV * A's PV * G.     
In final they can get the encryption key and this key only know for them.  

Example of ECC using the Diffie Hellman key exchange:  
Curve: y2 = x3 + 7 (mod 17)  

p: 17 (notice this is a prime number, so this is considered a “prime” curve)

a: 0

b: 7

G: (15,13)

n: 18  
To find n, you Point Double/Point Add starting from G until you reach a point at infinity.  That is, the operations continue until the resultant line is vertical.  In this case, n = 18.  

h = 1 (which is the ideal value for h)  
![Alt text](https://github.com/JasonChen990513/Blockchain-Certified-Developer-Course-Tijarah/blob/main/Image/image-4.png)  
A is Alice public key   

B is Bob public key   

⍺: randomly chosen number between 1 and n-1.  This is the private key for Alice   

β: randomly chosen number between 1 and n-1.  This is the private key for Bob   

Bob computes:  P = β * A   or, substituting ⍺ (G) for A, you get  P = β * ⍺ * G   

Alice computes:  P = ⍺ * B  or, substituting β (G) for B, you get  P = ⍺ * β * G   

Assume ⍺ = 5  
Alice public key = A = ⍺ * G = 5G    
3G = (6,6) according to the image above.  

Assume  = 7  
Bob public key = B = β * G = 7G  
B = (10,15)  

Bob computes s = β * A  = β * ⍺ * G  = 5(10, 15) = 5*7G = 35G mod 17 = G  
Alice computes s = ⍺ * B = ⍺ * β * G  = 7(6, 6) = 7*5G = 35G mod 17 = G  
G = (15,13)  
It will be a secure key that only Bob and Alice know.  

# Question of application in blockchain
Everyone have their own private key, that is very important for the user. Because that is the only way you can access and do something with wallet.  
Public key is driven by private key.
Wallet address is driven by public key.
The digital signature is using private key and sending message to generate.



















[Public key cryptography and digital signature](https://www.shiksha.com/online-courses/articles/digital-signing-in-blockchain/)  
https://www.coinbase.com/cloud/discover/dev-foundations/digital-signatures  





need to encrypt the message with receiver public key  
hash the message and encrypt wirh sender private key  
In step 3, how the blockchain network know the encrypt message and generate hash? They should not have the receiver private key to decrypt.  


## 1??????????????????????????????
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
  
  
   
     
## 2??????????????????????????????
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

**3. Transaction Broadcasting:**
The signed transaction is broadcast to the network. This means the transaction details and the digital signature are sent to all the nodes (participants) in the blockchain network.


> ### How it work?
> **A. Transaction Broadcasting:**  
When a user initiates a transaction, they broadcast it to the entire network. The transaction details, including the sender's address, recipient's address, amount, and the digital signature, are sent to all nodes in the network.  
> B. **Initial Checks:**  
Nodes first perform some basic checks to ensure the transaction is well-formed and adheres to the protocol rules. This includes verifying that the transaction has a valid structure and is not malformed.   
> C. **Verification of Digital Signature:**  
The most critical aspect of the validation process is verifying the digital signature using the sender's public key.  
Nodes use the sender's public key to decrypt and verify the digital signature generated by the sender's private key. If the signature is valid, it confirms that the transaction was indeed initiated by the owner of the private key associated with the provided public key.  
> D. **Balance and UTXO (Unspent Transaction Outputs) Checks:**  
Nodes check whether the sender has sufficient funds to execute the transaction. This involves looking at the sender's previous transactions and ensuring that the sum of the inputs (previous unspent transaction outputs) is greater than or equal to the amount being sent.  
UTXO model is commonly used in blockchain systems like Bitcoin, where each transaction consumes certain unspent outputs and creates new ones.  
> D. **Double-Spending Prevention:**  
Nodes check whether the same funds are not being spent in multiple transactions (double-spending). This is critical to maintaining the integrity of the ledger.  
>> ### what is UTXO model and how it work?
>>Each transaction in the UTXO model consumes one or more UTXOs as inputs. These UTXOs represent the funds being spent in the transaction.　　
>>The transaction then creates new UTXOs as outputs, which are assigned to the addresses of the recipients.　　
>> Example:  
>> A have UTXO1 (1 BTC) and UTXO2 (2 BTC).
>> now want to send 2.5 BTC to B
>> Consume UTXO1 (1 BTC) and UTXO2 (2 BTC) as inputs.
>> Output will be UTXO3(2.5 BTC) and UTXO4(0.5 BTC) 
>> UTXO3(2.5 BTC) will be given to Bob
>> UTXO4(0.5 BTC) will reserved for A


**4. Verification by Miners/Nodes:**
Miners or validating nodes on the network receive the transaction and verify the digital signature using the sender's public key.  
If the verification is successful, it means the sender is the rightful owner of the private key associated with the public key used in the transaction.  


**5. Inclusion in a Block:**
Once verified, the transaction is added to a block by the miners. 


**6. Consensus Mechanism:**
Depending on the blockchain's consensus mechanism (e.g., proof-of-work or proof-of-stake), and ensure agreement across the network on the order and validity of transactions.  

**7. Broadcasting the Updated Ledger:**
Once a block is added to the blockchain, the updated ledger (containing all transactions up to that point) is broadcast to all nodes in the network.  



--------------------------------
1. Initiation by Sender (A):
A decides to send Ether (ETH) to B.
A initiates a transaction from their Ethereum wallet.
2. Transaction Details:
A specifies the transaction details, including:
Recipient's address (B's Ethereum address).
Amount of Ether to be sent.
Gas price (fee paid to miners for processing the transaction).
Optionally, data (used for smart contract interactions).
3. Nonce:
A transaction in Ethereum includes a nonce, a unique number associated with the sender's account. It ensures the transaction is processed in the correct order and prevents replay attacks.
4. Digital Signature:
A signs the transaction with their private key to create a digital signature.
The digital signature provides proof that A, the owner of the private key, initiated the transaction.
5. Transaction Hash:
The transaction details, including the digital signature, are hashed to create a unique transaction hash.
The transaction hash is a cryptographic representation of the transaction and serves as its identifier on the Ethereum network.
6. Broadcasting to the Network:
A broadcasts the signed transaction to the Ethereum network.
The transaction is sent to all nodes on the network.
7. Nodes Verification:
Ethereum nodes receive the transaction and perform initial verification, checking the digital signature's validity and the nonce.
8. Mempool Inclusion:
Valid transactions are added to the mempool, a temporary pool of unconfirmed transactions.
9. Miners Select Transactions:
Miners select transactions from the mempool to include in the next block based on factors like gas price.
Gas represents the computational effort required to execute the transaction.
10. Mining:
Miners compete to solve a proof-of-work puzzle to add the next block to the blockchain.
The block includes the selected transactions, including A's transaction to B.
11. Block Confirmation:
The new block is added to the Ethereum blockchain.
The transaction is now confirmed, and B's balance is updated.
12. Transaction Receipt:
A transaction receipt is generated, containing details such as the block number, gas used, and contract execution results (if applicable).
13. Event Notification (Optional):
If B's Ethereum address is associated with a smart contract, events or functions within the contract may be triggered, providing additional functionality.
14. Final Confirmation:
B's Ethereum client (wallet) acknowledges the receipt of funds, and the transaction is considered complete.
















New ChatGPT











