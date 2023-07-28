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


import Block from "./block";


/**
 * Blockchain Class
 * @class Blockchain
 * @memberof blockchain
 * @description A class that represents a Blockchain which is an array of Blocks.
 * @property {Block[]} chain - The array of blocks forming the blockchain.
 * @example
 * @see
 */
export default class Blockchain {
    
    public chain: Block[];

    /**
     * @constructor
     * @description Constructs a new Blockchain with a genesis block at creation.
     */
    constructor() {
        this.chain = [Block.getGenesisBlock()];
    }

    /**
     * addBlock Method
     * @method addBlock
     * @description Adds a new block to the blockchain.
     * @param {any} data - The data to be included in the new block.
     * @returns {Block} The newly added block.
     */
    addBlock(data: any): Block {
        const newBlock = Block.mineNewBlock(this.chain[this.chain.length-1], data);
        this.chain.push(newBlock);
        return newBlock;
    }

    /**
     * isValidChain Method
     * @method isValidChain
     * @description Validates the blockchain by checking the hash values of each block and the integrity of the genesis block.
     * @param {Block[]} blocks - The array of blocks forming the blockchain to be validated.
     * @returns {boolean} The validity of the blockchain.
     */
    isValidChain(blocks: Block[]): boolean {
        if(JSON.stringify(blocks[0]) !== JSON.stringify(Block.getGenesisBlock())) {
            return false;
        }

        for(let i: number = 1; i < blocks.length; i++) {
            const currentBlock: Block = blocks[i];
            const previousBlock: Block = blocks[i-1];
            if(currentBlock.lastHash !== previousBlock.hash ||
               currentBlock.hash !== Block.generateHash2(currentBlock)) {
                return false;
            }
        }
        return true;
    }

    /**
     * replaceChain Method
     * @method replaceChain
     * @description Replaces the current blockchain with a new one if the new one is longer and valid.
     * @param {Block[]} newBlocks - The new array of blocks to replace the current blockchain.
     * @returns {boolean} Whether the blockchain was replaced or not.
     */
    replaceChain(newBlocks: Block[]): boolean {
        if(newBlocks.length <= this.chain.length) {
            console.log("New chain is not longer than current chain - NOT replacing.")
            return false;
        }
        if(!this.isValidChain(newBlocks)) {
            console.log("New chain is not valid - NOT replacing.")
            return false;
        }
        this.chain = newBlocks;
        console.log("Replacing current chain with new chain.")
        return true;
    }
}

