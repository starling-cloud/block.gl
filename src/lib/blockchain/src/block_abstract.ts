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
import { BlockInterface } from "./block_interface";
import * as config from "./config";
import Transaction from "./transaction";
import TransactionInput from "./transaction-input";


/**
 * Abstract Block Class
 * @memberof blockchain
 * @class
 * @description Abstract Block Class
 * @param index index of the block
 * @param timestamp timestamp of the block
 * @param lastHash hash of the previous block
 * @param hash current hash (based on the timestamp, hash of previous block and transactions)
 * @param data data to store (cryptocurrency transactions but can store generic data, as well)
 * @param nonce nonce value (for mining new blocks)
 * @param difficulty difficulty value (for mining new blocks)
 * @returns
 * @example
 * @see {@link https://block.gl/docs/block#abstract block.gl | documentation | block | abstract}
 */
export abstract class BlockAbstract implements BlockInterface {

    public readonly index: number;
    public readonly timestamp: number;
    public lastHash: string;
    public readonly hash: string;
    public data: any;
    public nonce: number; // private ?
    public difficulty: number; // private ?
    
    constructor(
        index: number,
        timestamp: number,
        lastHash: string,
        hash: string,
        data: any,
        nonce:number,
        difficulty: number,
    ) {
        this.index = index;
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    /**
     * Generate Hash
     * @static
     * @returns {string} hash generated
     */
    static generateHash(
        timestamp: number,
        lastHash: string,
        data: any,
        nonce: number,
        difficulty: number,
    ): string {
        let hash = ChainUtil.genHash(
            `${timestamp}${lastHash}${data}${nonce}${difficulty}`
        );
        return hash;
    }

//    /**
//      * Validate Block
//      * @returns {boolean} is valid block
//      */
//     isValidBlock(): boolean {
//         const generatedHash = BlockAbstract.generateHash(
//             this.timestamp,
//             this.lastHash,
//             this.data,
//             this.nonce,
//             this.difficulty
//         );
//         return this.hash === generatedHash;
//     }

//     /**
//      * Check equality of Blocks
//      * @param block Block to compare
//      * @returns {boolean} is equal block
//      */
//      isEqual(block: BlockAbstract): boolean {
//         return this.hash === block.hash;
//     }

//     /**
//      * Calculate Difficulty
//      * @param {number} previousBlockTimestamp The timestamp of the previous block
//      * @returns {number} Calculated difficulty
//      */
//      static calculateDifficulty(previousBlockTimestamp: number): number {
//         const timeDifference = Date.now() - previousBlockTimestamp;
//         let newDifficulty = config.INITIAL_DIFFICULTY;

//         if (timeDifference < config.MINE_RATE) {
//             newDifficulty++;
//         } else if (timeDifference > config.MINE_RATE) {
//             newDifficulty--;
//         }

//         return newDifficulty;
//     }



    // /**
    //  * Add Transaction
    //  * @param {Transaction} transaction The transaction to add
    //  * @returns {void}
    //  */
    //  addTransaction(transaction: Transaction): void {
    //     if (!transaction.isValidTransaction()) {
    //         throw new Error('Cannot add invalid transaction to block');
    //     }
    //     this.data.push(transaction);
    // }

    // /**
    //  * Has Transaction
    //  * @param {Transaction} transaction The transaction to check
    //  * @returns {boolean} True if the transaction exists
    //  */
    // hasTransaction(transaction: Transaction): boolean {
    //     return this.data.some((t: Transaction) => t.id === transaction.id);
    // }

    // /**
    //  * Get Transaction Input
    //  * @param {TransactionInput} input The transaction input to retrieve
    //  * @returns {Transaction | undefined} The transaction, or undefined if it does not exist
    //  */
    // getTransactionInput(input: TransactionInput): Transaction | undefined {
    //     return this.data.find((t: Transaction) => t.input === input);
    // }

    // /**
    //  * Validate Transactions
    //  * @returns {boolean} True if all transactions are valid
    //  */
    // validateTransactions(): boolean {
    //     for (let transaction of this.data) {
    //         if (!transaction.isValidTransaction()) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }


    /**
     * to String
     * @returns {string} block information
     */
    toString(): string {
        let info: string = `Block:
            Index      : ${this.index}
            Timestamp  : ${this.timestamp}
            Last Hash  : ${this.lastHash.substring(0, 10)}
            Hash       : ${this.hash.substring(0, 10)}
            Data       : ${this.data}
            Nonce      : ${this.nonce}
            Difficulty  : ${this.difficulty}
        `;
        return info;
    }

}
