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
 * @interface BlockchainInterface
 * @description This interface represents the structure of a Blockchain. It includes an array of blocks (chain) and methods to add a new block to the chain (addBlock), validate the integrity of the chain (isValidChain), and replace the current chain with a new one (replaceChain).
 * @property {any[]} chain - The array of blocks forming the blockchain.
 * @method addBlock - A method that accepts a data argument and returns the new block.
 * @method isValidChain - A method that accepts an array of blocks and returns a boolean indicating whether the chain is valid.
 * @method replaceChain - A method that accepts a new array of blocks and returns a boolean indicating whether the chain was replaced.
 * @example
 * @see
 */
 export interface BlockchainInterface {
    chain: any[];
    addBlock(arg: any): any;
    isValidChain(arg: any[]): boolean;
    replaceChain(arg: any[]): boolean;
}