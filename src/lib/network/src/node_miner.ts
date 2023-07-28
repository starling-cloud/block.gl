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


import Blockchain from "../../blockchain/src/blockchain";
import TransactionPool from "../../blockchain/src/transaction-pool";
import Transaction from "../../blockchain/src/transaction"
import Wallet from "../../blockchain/src/wallet";
import P2pServer from "./node_server";
import Block from "../../blockchain/src/block";



export default class Miner {

    blockchain: Blockchain;
    tp: TransactionPool;
    wallet: Wallet;
    p2pServer: P2pServer;

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
     */
    mine(): Block {
        const validTransactions: Transaction [] = this.tp.validTransactions();
        validTransactions.push(Transaction.newRewardTransaction(this.wallet, Wallet.getBlockchainWallet()));
        let block: Block = this.blockchain.addBlock(validTransactions);

        this.p2pServer.syncChains();
        this.tp.clear();
        this.p2pServer.broadcastClearTxs();

        return block;
    }
}