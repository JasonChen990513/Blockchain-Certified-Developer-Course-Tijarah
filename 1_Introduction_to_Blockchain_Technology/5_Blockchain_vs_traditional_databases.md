# Database 
Database is a data structure use to store the information.
It can store data and also can access a existing data.
The data store in database can organized using a database management system.
Using the client-server architecture.
The database administrator can modify the data in database.

# Blockchain
It is a growing list record, call block, that are linked using cryptography.
The block contain the cryptograthic hash of the pervious block, timestamp and transaction data.
Data in block is immutable.
It is decentralized architecture.


# Traditional Database vs BLockchain
|Traditional Database|Blockchain|
|:-------|:---------|
|Database uses centralized storage of data.|Blockchain uses decentralized storage of data.|
|Database needs a Database admin or Database administrator to manage the stored data.|There is no administrator in Blockchain.|
|The administrator has authority over it from a central location. Any change in the data can cause the information to change all over the place. Anyone with access to the centralized database can corrupt or destroy the data. It has resulted in hacking and forgery cases.|Modifying data does not require permission.  Users have a copy of data and by modifying the copies does not affect the master copy of the data as Blockchain is irresistible to modification of data.|
|Centralized databases keep information that is up-to-date at a particular moment.|Blockchain keeps the present information as well as the past information that has been stored before.|
|Centralized databases are used as databases for a really long time and have a good performance record, but are slow for certain functionalities.|Blockchain is ideal for transaction platform but it slows down when used as databases, specially with large collection of data.|
|Because permissions are centralized and the powers to alter data are in the hands of a few, traditional databases can handle enormous volumes of transactions per second. The client-server design lowers reliance on nodes, which are replaced with isolated server centers.|Blockchain technology faces scalability issues because of its dependency on all the decentralized nodes.|
|Traditional databases fail to provide the level of transparency offered by Blockchain.|Blockchain has the potential to boost data transparency and trust, resulting in increased creativity, productivity, and quality.|
|A traditional database offers numerous customization choices. Permissions, Privileges, and set-up requirements can all be optimized because traditional databases are managed centrally. Developers can update the front end and add plugins to the database to make it customer-centric.|As Blockchain is a public distributed ledger, it can not be customized by an individual’s choice.|
|The client performs four action in a typical database: Create, Read, Update, and Delete. These are the four steps in the CRUD process.| user only can contribute more data in the additional blocks in the Blockchain. The old data will not be destroyed; it will stay in the system and be accessible to the public.	|
|The information in a centralized or traditional database is current at any given time. If want to check old data need to found the history backup, and it also may incomplete.|The information that is current and the information that was previously available coexist. It generates a database with its histories in it. This property of Blockchain makes it handy for tracing records and determining a product’s validity.|

## Use Blockchain for  
Real-time data exchange    
Financial transfer   
Identifying and authenticating records   
dApps (Decentralized applications)    
Zero Knowledge(ZK)  
Data immutable

## Use traditional database for
Relational Data  
Confidential records  
Conventional storage systems  
Data that would be frequently modified  


Question:       
## For the reading speed of the data, why traditional is faster?    
>When a transaction is carried out in the blockchain, it does all the things that a traditional database will do. However, it is slowed down because of carrying more operations, including the following.    
>## Signature Verification:  
>Blockchain transactions, when carried out, are cryptographically signed using cryptographic algorithms. This step is needed to ensure that each transaction is valid and originated from a valid source. As it is a complex process, it takes time to carry out the process.   
>In comparison, a centralized database doesn’t have to go through the signature verification process, which makes them comparatively faster.  

>## Consensus Mechanisms:  
>As blockchain is decentralized, it relies heavily on a consensus mechanism to validate transactions on to the blockchain. Also, the speed of consensus depends on the type of consensus method used. Some consensus method is faster than others, but overall, it adds more time before a transaction can be processed.   
>Centralized databases don’t suffer from this kind of issue as they are centralized in nature. Each transaction is verified automatically by the database and can be executed way faster using a queue.  

>## Redundancy:  
>Blockchain is a complete network where each node plays a crucial role. To ensure that each node can participate, each transaction information needs to be stored and verified by each node.  


## Why the scalability of traditional database is better?  
>Scalability: The ability to effectively cope with the growing volume of transactions and number of users without degrading performance or increasing latency.      
>When both of them keep growing, the blockchain will slower than traditional database.  
>Because the blockchain need do addtional step, check signature verification, consensus mechanisms, and redundancy.   
>It will take some time for each transaction.  
>If entity or organization want to add more node to improve the performance for blockchain, it could lead to a centralization risk, diminishing the advantages of decentralization in a blockchain network.  





