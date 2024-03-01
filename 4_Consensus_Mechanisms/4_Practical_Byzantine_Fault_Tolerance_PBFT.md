# What is Practical Byzantine Fault Tolerance (PBFT)  
PBFT tries to provide a practical Byzantine state machine replication that can work even when malicious nodes are operating in the system.  

In PBFT, there are primary node and secondary node, the secondary can become to primary node when primary node failure. The PBFT system goal is that all honest nodes help in reaching a consensus regarding the state of the system using the majority rule.  
  
A practical Byzantine Fault Tolerant system can function on the condition that the maximum number of fault nodes must not be greater than or equal to N and 3N+1 is the all amount of nodes in the system. As the number of nodes increase, the system becomes more secure. But the performance may decrease.   



# How PBFT work 
**Pre-prepare:**  
Client send the request to primery node.
The primary node send pre-prepare message to other node.
Message content include message, view and sequence number.

**Prepare:**  
Node receive the pre-prepare message and validate it, if the message is valid then broadcast the prepare message.
When node receive more than f+1 prepare message, the state will become prepared. f is the maximum acceptable system fault.

**Commit:**  
Next going to commit step, the node need to broadcast the commit message to network.
Same as the step 2, need receive more than f+1 commit message.
After excecution, the node enter committed state and return the result to client.

![image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*PkEirp502mK0dhr_urThng.png)


**View Change**   
If the current primary node is Byzantine node, fails to broadcast the client’s request or face some problem cause other nodes to fail to “prepare” in time.  
The node will send the view change message when the above condition is triggered.  
After receiving more than 2f+1 view change message, the new leader will broadcast new view message. Which node will be next leader is base on the format used by the Platforms.  


# Key Properties:    
**Permissioned:**  
PBFT is not permissionless network, the system need to record all node information. Because the PBFT need to accurately tracking the number of nodes for mutual message verification.  
**Leader-based:**  
First, designate a leader, and then have the leader submit proposals. The most straightforward advantage of this approach is that it eliminates the need to expend computational resources vying for the opportunity to become a leader. By determining the leader through a random process, it avoids unfair opportunities to become a leader and also conserves computational resources.  
**Communication-based:**  
PBFT's security is based on a three-phase voting mechanism. Although it doesn't require the extensive computational resources of proof-of-work, the large volume of communication poses a bottleneck for scalability.  
 





Reference:  
https://poweichen.gitbook.io/blockchain-guide-zh/distribute_system/bft  
https://medium.com/taipei-ethereum-meetup/intro-to-pbft-31187f255e68  
https://www.geeksforgeeks.org/practical-byzantine-fault-tolerancepbft/  
https://docs.google.com/presentation/d/1BtrBzysYOZJTxYZWYD2P16082LWV5M3de50VD_p-kgw/edit#slide=id.g62ae016674_0_594  
























