    # What is blockchain?

    Video name: What is Blockchain Technology and How Does it Work | Blockchain Explained in 6 minutes

    Blockchain
        Digital information (block) store in the public database(chain)
        Base on peer to peer topology
            2 PC communicate without the server, each user can be a server and node.

        Distributed ledger technology 
            That data can be store in globlely on thousands of server
            A platform that uses ledgers stored on separate, connected devices in a network to ensure data accuracy and security

        One user is hard to gain control the network
        More secure and transparent
        Unique id for each item
        It is immutable
            If want to change the data, a least need 2/3 nodes be modified. (for this chain)

        Good transparency of all transaction
        Everyone can get the real time data
        why blockchain speed faster than normal database? 
            For the blockchain stored the data in the node, when want to update the data in the node, only need to get the data which is inside your node. So the speed is depend on the size you need to download.


    Block have 3 part
        1.Information about the transaction (date, time, transfer amount)
        2.Information about participants
            not include any identifying, only digital signature
        3.Information about other block
            the unique code call "hash" 
                cryptographic codes created by special algorithms

        A single block can store 1 MB for data
        Blockchain is base on the transaction


        Question:
        2:39
            But in reality, a single block in blockchain can store 1MB of data and that's why, depending on the size of the transaction, a single block can store a few thousand transactions under one roof.

            Is the one block store one transaction detail or many?
                 one block include a lot of transaction and contract internal transaction.(ETH block)


    How the blockchain work
        For block to be added to Blockchain
            1.A transaction must occur
            2.That transaction must be verified
                miner will do the verify, check the transation, dollar amount and praticipant.
            3.The transaction must be stored in a block
                information include the praticipant digital signature transation dollar amount.
            4.That block must be given a hash
                hash is the unique code 
        After this 4 steps, the block can be add to the blockchain.


        Question: 
        4:54
            It is this hash ID which differentiates the processed transaction from the others and even a small space can make a huge difference in its identification. 

            what is the small space can make a huge difference in its identification?
                Because any change in the transaction data will be affect the hash generate.        

    Who & What is a Blockchain Miner
        Role of miner validate new transactions and record them on the global ledger and get the reward.

        After the new block add to the blockchain, everyone can view it.
        (Question: last time say the miner would not be compete anymore, for now how to calculate the hash?)
        pos
        poa
        pow
        pods

    


    Video name: 7 Skills Needed to Become a Blockchain Developer | Blockchain Developer Career Path


    1.Command Line
        learn Unix or Linux command-line interface
        learning how to interate with computer using command line

    2. Javascript
        it supported by every browser
        it is client side language and can performs the computation in web browser, no need to wait the server reply.

    3. NodeJS
        cross-platform javascript
        enable developer to write server-side application with javascript.
        Many blockchain frameworks are built on top of NodeJS

    4. Blockchain baiscs
        What is blockchain?
            Block use to store the information in the chain(database).

        How does it work?
            When the transaction occur, and the transaction is virified. 
            The transaction information will be store into the block. 
            The block will have unique hash and store in to blockchain. 
            After it will be add to the blockchain.

        What are the consensus mechanisms?
            System that validates a transaction and marks it as authentic.
                EX: if the hash is different, the block will be replace by the currect one.

        What is a node?
            It is computer systems that contain a copy of a blockchain's primary protocol and its entire transaction history.
                Lite node: specify a point in time and copy the data after that point in time.(Question: is my understanding correct?)
                archive
                full

        What is a Smart Contract?
            It is Immutable.
            it is digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met.

    5.Solidity
        It is OOP language for write the Smart Contract.

    6.Web3.js
        Is a collection of libraries that allows user to interact with local or remote ethereum node using an http or ipc.  
        Used to connect an ethereum blockchain to a client browser usually through a browser extension like metamask.
        Easily installed into javascript object and allows user decentralized application to run and retrieve information to and from a blockchain defined by the user.

    7. Turffle Suite
        A framework which facilitates the development, testing and deployment of full-stack decentralised applications.
        Framework
            Can write and deploy smart contract within minutes.
            Easy to use solidity and javascript test the smart contract.
            Easy deployment to any test network or the main network from the command line. 
        Ganache
            Allows you to start a local blockchain in your development environment with just two clicks and makes developing decentralized applications on your machine extremely easy.


    Video Name: Difference Between Blockchain and Distributed Ledger Technology
    
        Blockchain is one type of distributed ledger.
        Blockchain is the subset of distributed ledger.
        Distributed ledger do not need proof of work. Better scaling option. It have mutiple sites, regions or Participants.
        


    Video name: Types of Blockchain Explained | Blockchain Types
        1.Public Blockchain
            Public accessible, permissionless.
            No restriction on the participant and validator.
            Uncontrollability: single entuty can complete control over this network.
            Data is secure and help in immutability.
            Everyone have equal, so it is fully distributed.
            EX: Bitcoin and ethereum 

            The developer can do some change for the blockchain? if can, what is the meaning of the complete control?

        2.Private Blockchain
            Invitation is required. Resrict the people who can participate.
            Only the user who in this system can see the transcation.
            Centralized and much better control.
            Governed and regulated by someone.
            Can have token or not, it is based on the owner.
            EX: Hyperledger Fabric



        3.Consorttium/Hybird
            Some nodes private.
            Other are public.
            Some node use to participate the transcation, and other node use to control consensus process.
            All node can access by blockchain, and what information can be accessed is based on particular data in that blockchain.
            There are two type of the users, one is only can access the blockchain as their function, another can control over the blockchain and decides the level of security.

        Difference between Blockchain and cryptocurrency
            The relationship between Blockchain and cryptocurrency like the mobile app and mobile OS, like the bitcoin is the first cryptocurrency on the blockchain platform.



    Video Name: Public vs Private Blockchain | Difference Between Public and Private Blockchain

        Similarity:
            Both function as an append-only ledger.
            Each network node in both these blockchains has a complete replica of the ledger.
            In both, the validity of a record is verified.
            Both blockchain rely on numerous to authenticate edits.

        Differences:
            Oder of magnitude is less in public blockchain,  oder of magnitude is more in private blockchain.
            Anyone can take part by verifiing and adding data in public blockchain, the private blockchain olny allow authoried entities can praticipate and control network.
            Public blockchain is decentralized, and private is centralized.

            Public don't use consensus algorithm, private blockchain can use consensus algorithm such as Poorf of Elapsed Time(PoET), Raft and Istanbul BFT. (Question : Why don't use in public blockchain? XX)
            IBFT

            Public blockchain TPS(Transaction per second) are less. Private TPS are more. 

            (Quesiton: 
            Transactions per second (or TPS) are lesser in a public blockchain when compared to private blockchains.  
            As the number of authorized participants is less in a private blockchain, it can process hundreds or even thousands of transactions per second. why?)

            Public blockchain more scalable. Private blockchain less scalable.
            (Question: 
            public blockchain cannot compete with a private blockchain in terms of scalability  issues as it is slow and hence can process transactions only at a slow pace. 

            In a private blockchain, as only a few nodes need to manage data, transactions can be  supported and processed at a much higher pace.

            What is the meaning of scalability at here?)

            Public blockchain is trustless network. In private blockchain, participants must not trust one another.
            (Question: why can not trust other perticipants in private blockchain? 
             Answer:　Because in a private blockchain, the validity of records cannot be independently verified as the integrity of a private network relies on the credibility of the authorized nodes.)

            Public Blockchain is more secure and private blockchain is less secure. Because the node of the blockchain in public blockchain is higher than private blockchain, so the hacker hard to modify the data in blockchain. And hacker can hack whole network through accessing central node.

            Public blockchain consumes more energy and private blockchain consumes less.

            Public bloclchain have riskier it terms of collision or 51% attack. Private blockchain no chance of minor collisions.
               In the private blockchain, there is no chance of minor collision, because the validator in the network is know and they have suitable credentials.
               In public blockchain, the validator don't know each other, so it increase the risk of the potential collision (Current cryptographic hash function used in blockchain. Although incredibly unlikely, the possibility still exists potential threat to the data integrity).

               And it also have change to be 51% attack (where a group of miners who control more than 50% of the  network’s computing power can influence it).


 

    The need for web3
        It provide more secure, private, transparnecy of transaction. And it is no need the intermediary.
            

    Web3 vs Web2





Need to know how to use MAAL