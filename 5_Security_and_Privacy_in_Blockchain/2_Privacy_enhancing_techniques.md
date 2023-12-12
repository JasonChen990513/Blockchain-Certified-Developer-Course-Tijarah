# What are privacy enhancing technologies (PETs)  
Privacy enhancing technologies are the broad range of technologies.    
That unlock the full commercial, scientific, and social benefits of data without compromising its privacy and security.  
privacy-enhancing technologies is very important now. Businesses can pay serious fines because of data breaches and privacy breaches can harm your business’ reputation, businesses or customers (depending on your business model) may want to stop interacting with your brand. PETs enable privacy protection while data sharing.   

# Homomorphic Encryption
Homomorphic encryption allows computations to be performed on encrypted data without decrypting it.  
It generates an encrypted result which, when decrypted, matches the result of the operations as if they had been performed on unencrypted data (i.e. plaintext).  
This enables encrypted data to be transfered, analyzed and returned to the data owner who can decrypt the information and view the results on the original data.  
This technique is useful in scenarios where computations need to be conducted on sensitive data while preserving privacy.  
EX: companies can share sensitive data with third parties for analysis purposes.   

![image](https://research.aimultiple.com/wp-content/webp-express/webp-images/uploads/2021/08/homomorphic-enc-800x603.png.webp)  

## Type of Homomorphic Encryption
Partial homomorphic encryption: can perform one type of operation on encrypted data, such as only additions or only multiplications but not both.  
Somewhat homomorphic encryption: can perform more than one type of operation (e.g. addition, multiplication) but enables a limited number of operations.  
Fully homomorphic encryption: can perform more than one type of operation and there is no restriction on the number of operations performed.  


## Advantages
Promotes privacy and data utility: SMPC can eliminate the tradeoff between data privacy and data utility since private or encrypted data doesn’t need to be shared with third parties or model owners to be utilized. By this means, it also eliminates the risks of data breaches and misuses stemming from data collection.  

Reveals only the final result: SMPC only reveals the final result and doesn’t reveal intermediate information during the computation. Compared with federated learning, a machine learning approach where data is not collected from different parties but model parameters are communicated, SMPC provides a higher security level.  

Less resource-intensive than other methods: Compared with fully homomorphic encryption, another cryptographic method that allows computation on encrypted data, SMPC requires less computing power.  

## Disadvantages  
Communication overhead: As illustrated in the example above, the SMPC method requires communication between parties, which can lead to high communication costs.  
Vulnerable to attacks from colluding parties: For instance, the second employee and the fourth employee can collude to learn the third employee’s salary by subtracting the value sent by second to third from the value sent by the third to fourth.  







# Secure multi-party computation (SMPC)
Secure multi-party computation is a subfield of homomorphic encryption with one difference: users are able to compute values from multiple encrypted data sources. Therefore, machine learning models can be applied to encrypted data since SMPC is used for a larger volume of data.   

**For example**:  
Each employee is numbered from first to last.  
The first employee chooses an arbitrarily large number and adds their salary to the number and tells the second employee the result.  
The second employee adds their number to the value and tells the result to the third employee, and so on until the last employee.  
After adding their salary to the result, the last employee tells the result to the first employee.  
The first employee subtracts the large number they started with and divides the result by the number of employees in the group to obtain the average salary.   



## What are the properties of secure multi-party computation?
SMPC aims to ensure two basic properties against adversarial attacks:  

Input privacy: No party can infer information about private inputs from the output.  
Correctness: An adversarial party must not be able to prevent other parties from receiving their correct outputs.(Why?)  

## Advantages
Promotes privacy and data utility: SMPC can eliminate the tradeoff between data privacy and data utility since private or encrypted data doesn’t need to be shared with third parties or model owners to be utilized. By this means, it also eliminates the risks of data breaches and misuses stemming from data collection.  

Reveals only the final result: SMPC only reveals the final result and doesn’t reveal intermediate information during the computation.  SMPC provides a higher security level.  

Less resource-intensive than other methods: Compared with fully homomorphic encryption, another cryptographic method that allows computation on encrypted data, SMPC requires less computing power.  

## Disadvantages

Communication overhead: As illustrated in the example above, the SMPC method requires communication between parties, which can lead to high communication costs.  

Vulnerable to attacks from colluding parties: For instance, the second employee and the fourth employee can collude to learn the third employee’s salary by subtracting the value sent by second to third from the value sent by the third to fourth.  

It is important to note that there are techniques to solve these problems, but they usually come with higher computational costs.  








# Differential privacy
Differential privacy is a method that involves adding a bit of controlled randomness to a dataset to protect the privacy of individuals. This controlled randomness ensures that the overall dataset remains accurate for generating general insights through analysis while safeguarding the personal information of each participant.   

[Explain Video](https://www.youtube.com/watch?v=gI0wk1CXlsQ)   


Suppose have one column in dataset with yes and no answers from individual.  
Now flip a coin, if it is head then leave the answer as yes.  
If it is tails, flip the answer again.  
If it is heads the answer yes.  
If it is tails the answer no.  
This process let the data more randomness. For the data size is very large, the add some noise adding mechanism would not affect the accurate in terms of aggregate measurements.   


In real-world applications, noise-adding algorithms are a bit more complex than flipping a coin.  
Differential privacy introduces a privacy loss or privacy budget parameter, often denoted as epsilon (ε), to the dataset. ε controls how much noise or randomness is added to the raw dataset.  
These algorithms are based on the parameter ε, which controls the trade-off between privacy and data utility: a high value of ε means more accurate but less private data.  
Differential privacy can be implemented locally or globally. In local differential privacy, noise is added to individual data before it is centralized in a database. In global differential privacy, noise is added to raw data after it is collected from many individuals.  


![global-and-local-image](https://research.aimultiple.com/wp-content/webp-express/webp-images/uploads/2021/05/diff_privacy-1-800x780.png.webp)


## Advantage  
Preventing attackers from access to perfect data
Applying differentially private computation for each query separately would lead to different answers for the same query by different researchers. These different approximate answers are still meaningful for aggregate statistics and it ensures that a querier cannot reveal information specific to individual participants.   

Protection from linkage attacks:    
This is an example of a linkage attack: re-identifying an individual from an anonymized dataset by combining it with auxiliary information from other datasets. Traditional anonymization techniques such as removing columns containing personally identifiable information or data masking can be susceptible to re-identification.   

Added random noise ensures that any individual in the dataset can plausibly deny their specific information or even participation in the dataset.  

This deniability aspect of differential privacy is important in cases like linkage attacks where attackers leverage multiple sources to identify the personal information of a target.  

Customized privacy levels:   
Differential privacy provides a quantifiable measure of privacy guarantees through the parameter ε. By adjusting the value of ε, data aggregators can control the level of privacy according to the sensitivity of the dataset.  

## Challenges and limitations of differential privacy  
It is not applicable to every problem:  
Individual level analysis: Such analysis is not possible with differential privacy applied data. It prevents an analyst from learning information particular to specific individuals. For example, differential privacy is not suitable for a bank that wants to determine instances of fraudulent activity.  
Small data: Similar to sampling errors, the inaccuracy introduced by differential privacy can be ignored for large datasets but it is not the case for small ones. For a small dataset, the noise added by differential privacy can seriously impact any analysis based on it.  
Correct level of ε is not clear: There is no consensus over the optimal value of ε, i.e. the level of distortion for the data to be both private and useful. ε = 0 is the perfect privacy case but it completely changes the original data and makes it useless.   








# Zero-knowledge proofs (ZKPs)
Zero-knowledge proof (ZKP), also called a zero-knowledge protocol, is a mathematical technique to verify the truth of information without revealing the information itself.













https://research.aimultiple.com/privacy-enhancing-technologies/