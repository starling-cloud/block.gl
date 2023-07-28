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


import ChainUtil from "./blockchain_util";
import * as config from "./config";
import Transaction from "./transaction";
import TransactionInput from "./transaction-input";


/**
 * Block Class
 * @memberof blockchain
 * @class
 * @description
 * @param timestamp timestamp
 * @param lastHash hash of the previous block
 * @param hash current hash (based on the timestamp, hash of previous block and transactions)
 * @param data data to store (cryptocurrency transactions but can store generic data, as well)
 * @param nonce nonce value (for mining new blocks)
 * @param difficulty difficulty value (for mining new blocks)
 * @returns
 * @example
 * @see
 */
export default class Block {

    // public index: number; // add this?
    public timestamp: number;
    public lastHash: string;
    public hash: string;
    public data: any; 
    public nonce: number; // private ?
    public difficulty: number; // private ?
    
    constructor(
        // index: number; // add this?
        timestamp: number,
        lastHash: string,
        hash: string,
        data: any,
        nonce:number,
        difficulty: number
    ) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }
 
    /**
     * First block of the blockchain.
     * @static
     */
    static getGenesisBlock(): Block {

        let genesisTx: Transaction = new Transaction();
        genesisTx.id = "genesis";
        genesisTx.txInput = new TransactionInput(0, "-----");

        let genesisBlock: Block = new Block(
            0,
            '-----',
            'f1r5t-ha4h',
            genesisTx,
            0,
            config.DIFFICULTY
        );

        return genesisBlock;
    }

    /**
     * Mines new block that will be added to the blockchain.
     * @param lastBlock Link to the previous block for storing its hash.
     * @param data Data to store for the new block.
     */
    static mineNewBlock(lastBlock: Block, data: any): Block {
        let timestamp: number;
        const lastHash: string = lastBlock.hash;
        let nonce: number = 0;
        let hash: string;
        let {difficulty} = lastBlock;
        //PROOF OF WORK - keep generating new hashes until get specific number of leading 0's
        do {
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty(lastBlock, timestamp);

            nonce++;
            hash = Block.generateHash(timestamp, lastHash, data, nonce, difficulty);
        } while(hash.substr(0, difficulty) !== "0".repeat(difficulty));
        return new this(timestamp, lastHash, hash, data, nonce, difficulty)
    }

    static generateHash(timestamp: number, lastHash: string, data: any, nonce: number, difficulty: number): string {
            return ChainUtil.genHash(`${timestamp}${lastHash}${data}${nonce}${difficulty}`);
    }

    /**
     * Convenience method to generate hash based on a block - used for validation.
     * @param block The block to generate hash from.
     */
    static generateHash2(block: Block): string {
        const { timestamp, lastHash, data, nonce, difficulty} = block;
        return Block.generateHash(timestamp, lastHash, data, nonce, difficulty);
    }

    /**
     * Adjust difficulty level based on how long it took to mine new block. If new block was mined too quickly
     * (by less than the mine rate), difficulty will be increased and if new block was mined too slowly
     * difficulty will be decreased.
     * @param lastBlock Previous block in the chain.
     * @param newBlockTime Date stamp (in milliseonds from 1970) of (potential) new block.
     */
    static adjustDifficulty(lastBlock: Block, newBlockTime: number): number {
        let { difficulty } = lastBlock;
        difficulty = lastBlock.timestamp + config.MINE_RATE > newBlockTime ? ++difficulty  : --difficulty;

        if(difficulty < 1) difficulty = 1;

        return difficulty;
    }
 
    toString(): string {
        return `Block:
            Timestamp  : ${this.timestamp}
            Last Hash  : ${this.lastHash.substring(0,10)}
            Hash       : ${this.hash.substring(0,10)}
            Data       : ${this.data}
            Nonce      : ${this.nonce}
            Difficulty  : ${this.difficulty}
        `;
    }
 }