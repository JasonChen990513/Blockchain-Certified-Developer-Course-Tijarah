//declare contract address and abi
const RockPaperScissorsAddressfor2 = "0x9129AfeB06E03A33AEC8239EbFE8ad59B023d12f";
const RockPaperScissorsfor2ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user1",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "user2",
                "type": "address"
            }
        ],
        "name": "inputOption",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "showError",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "logResult",
                "type": "string"
            }
        ],
        "name": "showResult",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "logUserAddress",
                "type": "address"
            }
        ],
        "name": "showUserAddress",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "getGameHistory",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user1",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user2",
                        "type": "tuple"
                    },
                    {
                        "internalType": "string",
                        "name": "finalResult",
                        "type": "string"
                    }
                ],
                "internalType": "struct RockPaperScissors.GameInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getSpecificGameHistory",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user1",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user2",
                        "type": "tuple"
                    },
                    {
                        "internalType": "string",
                        "name": "finalResult",
                        "type": "string"
                    }
                ],
                "internalType": "struct RockPaperScissors.GameInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getUser1",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "userAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "userOption",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct RockPaperScissors.UserInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "play",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "user1address",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "user2address",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "option",
                "type": "uint256"
            }
        ],
        "name": "userEnterOption",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

//alert("I am an alert box!");


let CurrentUserAddress;
let playGame = document.getElementById("playGame");
let submitOption = document.getElementById("submitOption");
playGame.onclick = () => {
    Game();
};

submitOption.onclick = () => {
    uploadOption();
};

async function Game(){

    //declare provider signer and connect to matamask 
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    await provider.send("eth_requestAccounts", []);

    //Create the contract object and call the play function
    let gameContract = new ethers.Contract(RockPaperScissorsAddressfor2, RockPaperScissorsfor2ABI, signer);
    await gameContract.play();
    //set listener to check 2 user already prepare to play the game
    //show the user 1 and 2 information
    gameContract.once("inputOption", (user1, user2) => {
        alert("welcome user1: " + user1 + " and user2: " + user2 + " to play this game")
        
        document.getElementById("showPlayer").innerHTML = "User1: " + user1 + " \nUser2: " + user2;
    });

}

async function uploadOption(){
    let option = document.getElementById("setOption").value;

    //declare provider signer and connect to matamask 
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    await provider.send("eth_requestAccounts", []);
    //Create the contract object.  Call the userEnterOption function and submit user option
    let gameContract = new ethers.Contract(RockPaperScissorsAddressfor2, RockPaperScissorsfor2ABI, signer);
    await gameContract.userEnterOption(option);
    //get the final result and show it
    gameContract.once("showResult", (logResult) => {
        alert(logResult);
        document.getElementById("finalResult").innerHTML = logResult;
    });
}

//init the wallet address
async function onInit() {
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account)
    CurrentUserAddress = account;

    //  window.ethereum.on('accountsChanged', function (accounts) {
    //     // Time to reload your interface with accounts[0]!
    //     console.log(accounts[0])
    //    });
}

onInit();
