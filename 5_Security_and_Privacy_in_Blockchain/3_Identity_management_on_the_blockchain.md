# Why Need Blockchain Identity Menagement
Blockchain-based identity management involves the use of decentralized and cryptographic techniques to secure and manage digital identities. Traditional identity management systems often rely on central authorities to validate and control user identities. In contrast, blockchain-based identity management empowers individuals with greater control over their personal information and enhances security.

## Decentralized Identifier (DID) Creation:  
Each user is assigned a unique Decentralized Identifier (DID) on the blockchain. DIDs serve as the foundation for self-sovereign identity.   

### Benefits of Decentralized Identifiers
Organizations and individuals have full control and ownership over their DIDs and no party can take them away  
Enable the owner to prove cryptographic control of them   
Don’t contain personal data or wallet information  
Enables private and secure connections between two parties and can be verified anywhere at any time  

Someone can create as many DIDs as they want for different relationships and interactions.  
![DID-example-image](https://assets-global.website-files.com/6311eb97e2519f5dbb9ea0cb/63952529e2db508fae7e9240_0-blockchain%20identity%20management%20DID%20profiles.jpeg)  

## Verifiable Credentials Issuance:
Trusted entities, such as governments, educational institutions, or employers, issue verifiable credentials to users. These credentials are cryptographic proofs of specific attributes or qualifications.  

Verifiable Credentials are a digital, cryptographically secured version of both paper and digital credentials that people can present to organizations that need them for verification. Identity documents like passports, IDs issued by the government, and driver’s licenses can be issued as Verifiable Credentials.   

Each DID can have multiple Verifiable Credentials associated with them that are digitally (cryptographically) signed by their issuers like a government driver’s licensing department. DID owners store the credentials themselves on their phones.  

![VCimage](https://assets-global.website-files.com/6311eb97e2519f5dbb9ea0cb/6361b77dd32f3047f87ead9e_8-blockchain%20identity%20management%20how%20it%20works.png)  



# How it work
1. Uploading the documents
After the user gets ID number, user need to upload the government-issued IDs to app then that will be save in IPFS with hashed addresses stored in the blockchain.   

Smart contracts generating trust score of the person

2. Suppose there is a score that determines the trustworthiness of a person.  

Smart contracts containing the business logic can generate a trust score for a user from the information provided by them while creating a self-sovereign identity.  

3. Third-party companies requesting access 

When third party want to access the specific details of a person for authentication purposes, the notification will be send to that user.  

When user allow the third party to access the information, they can use the identifiable information for authenticating a person.   

There do not store any user data or information on blockchain. That only store the identity holders and companies transaction record.  
















