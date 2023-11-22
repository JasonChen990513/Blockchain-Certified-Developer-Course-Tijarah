# What Are Cryptographic Hash Functions?
Cryptographic hash function is the mathematical function that use in cryptography.   
The hash function transform or "map" a given input data set into a bit string of fixed size, also known as the "hash value."  
A cryptographic hash function combines the message-passing capabilities of hash functions with security properties.  

[May refer here](https://www.youtube.com/watch?v=UswqcbncliE)  


Hash function are usually use to check the integrity of messages and authenticating information.  
While they are considered cryptographically "weak" because they can be solved in polynomial time, they are not easily decipherable.  

Cryptographic hash functions add security features to typical hash functions, making it more difficult to detect the contents of a message or information about recipients and senders.  

The two input hashes almost impossible generate same output hash. It call collision-free.   
The hash data can be hidden, it is hard use the output to deduce the input value.  
Always get the same output if you give the same input.   

## What Is the 256-Bit Cryptographic Hash Function?
A 256-bit hash function takes information and turns it into a 256-bit, 64-digit hexadecimal output that is nearly impossible to convert without a key.

## What's the Difference Between a Hash Function and a Cryptographic Hash Function?
Cryptographic hash functions are designed to be collision-proof, whereas hash functions are made to be faster to solve.

## What Is SHA-512 Cryptographic Hash Function?
SHA-512 does the same thing as other secure hashing algorithms. The difference is that in 256-bit, there are 2<sup>256</sup> possibilities for a given input, but in 512-bit, there are 2 <sup>512</sup> possibilities. 256-bit is virtually impossible to crack with modern computers, 512-bit is unnecessary. It also requires more storage and processing power and could slow down processes that use it.




# How Cryptographic Hash Functions Work
## Initialization (IV - Initialization Vector): 
The process begins with an initialization vector (IV), a constant value unique to each hash function instance. The IV is a predetermined value and is used to initialize the algorithm before processing the message.  
## Message Padding: 
The message is padded to ensure its length is a multiple of the block size. Padding is crucial to handle messages of varying lengths. Common padding schemes include appending a single '1' bit followed by '0' bits to the message.  
## Breaking into Blocks: 
The padded message is broken into fixed-size blocks. Each block contains a portion of the original message.  
## Processing Blocks: 
Each block is processed sequentially. The processing involves a series of mathematical operations (such as bitwise operations, modular arithmetic, and logical functions) applied to the block's bits.   
## Compression Function: 
A compression function combines the current block's processed data with the output from the previous block (or the IV in the first block). This step reduces the block's information to a fixed-size output, maintaining the hash function's fixed output size.    
## Finalization: 
Once all blocks are processed, the final output is derived. This output is the hash value of the entire message.  
## Output: 
The hash value is the final output of the cryptographic hash function. It should be a fixed size, regardless of the input message size.  


# Examples of Cryptographic Hash Functions

Cryptographic hash functions are widely used in cryptocurrencies to pass transaction information anonymously.  
Bitcoin uses the SHA-256 cryptographic hash function in its algorithm.  
Ethereum, the second most popular blockchain, uses Keccak-256 to hash information.  

## Password Verification
If directly store the password in text file is very dangerous. Usually store the password as hash. When user input the password, the password will be hashing and compare with the hashed password in the storage.    

## Signature Generation and Verification
Verifying signatures is a mathematical process used to verify the authenticity of digital documents or messages. A valid digital signature, where the prerequisites are satisfied, gives its receiver strong proof that a known sender created the message and that it was not altered in transit.  

A digital signature scheme typically consists of three algorithms: a key generation algorithm; a signing algorithm that, given a message and a private key, produces a signature; and a signature verifying algorithm.  

## Verifying File and Message Integrity
Hashes can ensure messages and files transmitted from sender to receiver are not tampered with during transit. Recipients can hash the receive file and compare with the receive hash. If the hash is different, that mean the file have be modify during transit.  


# Hash Function Weaknesses

In the past, there were incidences where popular algorithms like MD5 and SHA-1 were producing the same hash value for different data. Hence, the quality of collision-resistance was compromised.  
There is a technology named “rainbow tables” that hackers use to try to crack unsalted hash values. This is why salting before hashing is so crucial to secure password storage.   
There are some software services and hardware tools (called “hash cracking rigs”) that attackers, security researchers, or even government agencies use to crack the hashed passwords.  
Some types of brute force attacks can crack the hashed data.  




## What Is Salting 
Salting means adding randomly generated characters to the input values before hashing them. It’s a technique that’s used in password hashing. It makes the hashing values unique and more difficult to crack

## Why Do You Use It with Password Hash Functions?
If the hacker get user password and there are two user using the same password.They can bypass the authentication mechanism of all other accounts that have the same password. They just need to see the table of hash values and find the user IDs having the same hash value in their password column.  
Now we can use salting to avoid this situation, some random alphanumeric characters are added to the input values. Assume the password is 123456 for user1 and user2. After adding salt "ACB" to user1 and "XYZ" to user2. 
Now the user1 password is 123456ABC and user2 is 123456XYZ. Now the password store into storage is hash from 123456ABC and 123456XYZ. The final result would not be same. So if the hacker can access user1 account but cannot access user2 account with same hash.




## Difference between encryption and hashing
While encryption is also a process that converts plaintext data into incomprehensible format using a key, you can use the same or another key to decrypt it.   
With hashing, on the other hand, it uses a hash function to map your input data to a fixed-length output. This is something that you can’t restore because it essentially serves as a one-way process.  




More reference:  
https://sectigostore.com/blog/hash-function-in-cryptography-how-does-it-work/  

