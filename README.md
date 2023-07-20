<div>
    <img align="right" src="https://raw.githubusercontent.com/block-foundation/brand/master/logo/logo_gray.png" width="96" alt="Block Foundation Logo">
    <h1 align="left">block.gl</h1>
    <h3 align="left">Blockchain in your Browser</h3>
</div>
<br>
---
`block.gl` is a browser-native blockchain visualization library, designed to make the otherwise complex operations of a blockchain more accessible and comprehensible.


`block.gl` is written in TypeScript and ties into the vis.gl ecosystem.


## Features

It would probably allow you to:

1. Visualize the Blockchain Structure: You would be able to see how a blockchain is essentially a linked list of blocks, each containing a set of transactions. The tool might show how each block includes a unique identifier (hash), the hash of the previous block (to maintain the chain), and the bundled transactions.

2. Simulate Transactions and Mining: The tool could let you simulate creating new transactions and adding them to blocks. It might also illustrate the process of mining – the way new blocks are added to the blockchain – and how this process involves solving a computational problem.

3. Demonstrate Security Features: The visualization could illustrate how altering a transaction in a block affects the hashes of subsequent blocks, demonstrating the blockchain's resistance to tampering.

4. Network View: It might include a network view to demonstrate how blockchain works in a distributed system, showing the spread of data across nodes and how consensus algorithms operate.

Blockchain Structure Visualization: A browser-native blockchain could have a visual component that represents each block and the chain linking them together. Each block would typically contain a list of transactions, a unique identifier (or hash), and the hash of the previous block to maintain the continuity of the chain.

Transaction Simulation: The blockchain might allow users to simulate creating and adding new transactions to blocks. This would likely involve inputting transaction details into a form, and the transactions would then be displayed in the corresponding block.

Block Creation and Mining: The blockchain could allow users to simulate the process of mining, which is how new blocks are created and added to the blockchain. This could involve running a proof-of-work algorithm in the browser, or it could be simplified to a button click for ease of understanding.

Immutability Demonstration: One key feature of blockchains is their resistance to tampering. The tool could show how, if you try to alter the data in a block, it changes the block's hash and breaks the chain. This effectively illustrates the concept of blockchain immutability.

Decentralization and Consensus Mechanisms: More advanced features might include a network view to show how multiple copies of the blockchain interact and stay synchronized. This could be used to demonstrate consensus mechanisms, which are how disagreements in the blockchain are resolved.




Search
⌘
K
Main Navigation
Docs
Tutorials
Integrations
Latest News

10.2.4
💻 Live Editor

Sidebar Navigation
📔 Introduction
About Mermaid

Deployment

Syntax and Configuration

📊 Diagram Syntax
Flowchart

Sequence Diagram

Class Diagram

State Diagram

Entity Relationship Diagram

User Journey

Gantt

Pie Chart

Quadrant Chart

Requirement Diagram

Gitgraph (Git) Diagram 🔥

C4C Diagram (Context) Diagram 🦺⚠️

Mindmaps 🔥

Timeline 🔥

Zenuml 🔥

Other Examples

📚 Ecosystem
Showcases

Use-Cases and Integrations

⚙️ Deployment and Configuration
Configuration

Tutorials

API-Usage

Mermaid API Configuration

Directives

Theming

Accessibility

Mermaid CLI

Advanced usage

FAQ

🙌 Contributions and Community
Overview for Beginners

Contributing to Mermaid
Technical Requirements and Setup

Contributing Code

Contributing Documentation

Questions or Suggestions?

Last Words

Adding Diagrams

Security

📰 Latest News
Announcements

Blog

On this page
Table of Contents for current page
Syntax
Define a class
Defining Members of a class
Defining Relationship
Define Namespace
Cardinality / Multiplicity on relations
Annotations on classes
Comments
Setting the direction of the diagram
Interaction
Notes
Styling
Configuration
Class diagrams
"In software engineering, a class diagram in the Unified Modeling Language (UML) is a type of static structure diagram that describes the structure of a system by showing the system's classes, their attributes, operations (or methods), and the relationships among objects."

-Wikipedia

The class diagram is the main building block of object-oriented modeling. It is used for general conceptual modeling of the structure of the application, and for detailed modeling to translate the models into programming code. Class diagrams can also be used for data modeling. The classes in a class diagram represent both the main elements, interactions in the application, and the classes to be programmed.

Mermaid can render class diagrams.


## Installation

### HTML Script Tag

``` html
<script src="https://unpkg.com/block.gl@latest/dist.min.js"></script>
```

### NPM Module

``` bash
npm i block.gl
```

## Links

- [Website](https://www.block.gl)
- [NPM](https://www.npmjs.com/package/block.gl)

## Disclaimer

**THIS SOFTWARE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
