# Asynchronous Programming in JavaScript

## Asynchronous Programming

Asynchronous programming in JavaScript allows code to execute independently of the main program flow, enabling non-blocking behavior and better handling of tasks like network requests and file I/O.

## async keyword

The `async` keyword is used to define asynchronous functions in JavaScript. It allows functions to return a Promise, simplifying asynchronous code by enabling the use of the `await` keyword within the function.

## Promise in JavaScript

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It provides a cleaner way to deal with asynchronous code compared to using callbacks, by chaining `.then()` and `.catch()` methods.

## await keyword

The `await` keyword is used inside `async` functions to pause execution until a Promise is fulfilled or rejected. It allows asynchronous code to be written in a synchronous-like manner, improving readability and maintainability.

# Compiling our Solidity

## Yarn / npm Install

`yarn and npm install` is a command used with the Yarn package manager to install project dependencies listed in the `package.json` file.

## solc-js

`solc-js` is a JavaScript library for compiling Solidity smart contracts. It allows developers to compile Solidity code into bytecode that can be deployed on the Ethereum blockchain.

## yarn add / npm install solc@0.8.7-fixed

This command installs a specific version of the `solc` package (0.8.7-fixed in this case) using the package managers.

## yarn / npm scripts

Yarn /npm scripts are defined in the `package.json` file and allow you to run predefined commands using the `yarn run` command.

# Ganache & Networks

## Ganache

Ganache is a personal Ethereum blockchain for development purposes. It allows developers to deploy contracts, develop applications, and run tests in a simulated Ethereum environment.

## Networks in MetaMask

MetaMask is a browser extension that allows users to interact with the Ethereum blockchain. It supports different networks, including the Ethereum mainnet, testnets, and custom networks like Ganache.

## RPC URL

RPC (Remote Procedure Call) URL is a web address used to connect to a remote server or blockchain node. In the context of Ethereum development, it's used to communicate with the Ethereum network, including sending transactions and querying blockchain data.

## Geth

Geth is the command-line interface for running a full Ethereum node. It allows developers to interact with the Ethereum network, mine Ether, deploy contracts, and more.

## JSON RPC Spec Playground

JSON RPC (Remote Procedure Call) Spec Playground is a tool for exploring and testing JSON-RPC APIs. In Ethereum development, it can be used to interact with Ethereum nodes via JSON-RPC requests.

# Introduction to Ethers.js

## Ethers.js

Ethers.js is a JavaScript library for interacting with the Ethereum blockchain. It provides a simple and efficient API for sending transactions, deploying contracts, and interacting with smart contracts on the Ethereum network.
