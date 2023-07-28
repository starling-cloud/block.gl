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


import { BlockAbstract } from "./block_abstract";


/**
 * Currency Block Class
 * @memberof blockchain
 * @class
 * @description Currency Block Class
 * @param index index of the block
 * @param timestamp timestamp of the block
 * @param lastHash hash of the previous block
 * @param hash current hash (based on the timestamp, hash of previous block and transactions)
 * @param data data to store (cryptocurrency transactions but can store generic data, as well)
 * @param nonce nonce value (for mining new blocks)
 * @param difficulty difficulty value (for mining new blocks)
 * @returns
 * @example
 * @see {@link https://block.gl/docs/block#currency block.gl | documentation | block | currency}
 */
export default class BlockCurrency extends BlockAbstract {

    public index: number;
    public timestamp: number;
    public lastHash: string;
    public hash: string;
    public data: any;
    public nonce: number; // private ?
    public difficulty: number; // private ?
    
    constructor(
        index: number,
        timestamp: number,
        lastHash: string,
        hash: string,
        data: any,
        nonce: number,
        difficulty: number,
    ) {
        super(
            index,
            timestamp,
            lastHash,
            hash,
            data,
            nonce,
            difficulty,
        );
    }

}