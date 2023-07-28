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


// export {};

/**
 * Block Interface
 * @interface BlockInterface
 * @description This interface declares the structure of a Block in a Blockchain. It includes properties like index, timestamp, data, lastHash, hash, nonce, and a method to convert the block to a string.
 * @property {number} index - The position of the block within the blockchain.
 * @property {number} timestamp - The timestamp indicating when the block was created.
 * @property {any} data - The data to be stored in the block. It could be transactions or any generic data.
 * @property {string} lastHash - The hash of the previous block in the chain.
 * @property {string} hash - The hash of the current block.
 * @property {number} nonce - The nonce value used in the process of mining new blocks.
 * @method toString - A method to convert the block data to a string.
 * @example
 * @see
 */
export interface BlockInterface {
    index: number;
    // uuid: string;
    timestamp: number;
    // timestamp: string;
    data: any; 
    // transactions: Array<any>;
    lastHash: string;
    hash: string;
    nonce: number;
    // validator: string; // none?
    // signature: string;
    toString(): string;
}
