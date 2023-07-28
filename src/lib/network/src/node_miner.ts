// Copyright 2023 Stichting Block Foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * The Miner class represents the entity responsible for validating transactions and adding new blocks to the blockchain.
 * It uses a wallet to receive mining rewards and a peer-to-peer server to synchronize its blockchain with other nodes.
 * It also manages the pool of unconfirmed transactions.
 *
 * @module Miner
 * @see Blockchain
 * @see TransactionPool
 * @see Transaction
 * @see Wallet
 * @see P2pServer
 * @see Block
 */

// Import required modules
import Blockchain from "../../blockchain/src/blockchain";
import TransactionPool from "../../blockchain/src/transaction-pool";
import Transaction from "../../blockchain/src/transaction"
import Wallet from "../../blockchain/src/wallet";
import P2pServer from "./node_server";
import Block from "../../blockchain/src/block";


export default class Miner {

    // Blockchain instance
    blockchain: Blockchain;
    // Transaction Pool instance
    tp: TransactionPool;
    // Wallet instance
    wallet: Wallet;
    // Peer-to-peer Server instance
    p2pServer: P2pServer;

    /**
     * Creates a new Miner instance.
     *
     * @param {Blockchain} blockchain - The blockchain instance.
     * @param {TransactionPool} tp - The transaction pool instance.
     * @param {Wallet} wallet - The wallet instance.
     * @param {P2pServer} p2pServer - The peer-to-peer server instance.
     */
    constructor(
        blockchain: Blockchain,
        tp: TransactionPool,
        wallet: Wallet,
        p2pServer: P2pServer,
    ) {
        this.blockchain = blockchain;
        this.tp = tp;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    /**
     * Mines a new transaction on the blockchain by:
     * - Validating transactions on the transaction pool
     * - Rewarding the miner
     * - Creating new block on the blockchain consisting of the newly validated transactions
     * - Synchronizes blockchains between all other peers
     * - Clears transaction pool
     * - Broadcasts to every miner to clear their transaction pool
     *
     * @returns {Block} The new block added to the blockchain.
     */
    mine(): Block {
        // Validate transactions in the pool
        const validTransactions: Transaction [] = this.tp.validTransactions();
        // Reward miner
        validTransactions.push(Transaction.newRewardTransaction(this.wallet, Wallet.getBlockchainWallet()));
        // Add new block to the blockchain
        let block: Block = this.blockchain.addBlock(validTransactions);
        // Synchronize chains across peers
        this.p2pServer.syncChains();
        // Clear transaction pool
        this.tp.clear();
        // Clear transaction pools across all miners
        this.p2pServer.broadcastClearTxs();

        return block;
    }
}




