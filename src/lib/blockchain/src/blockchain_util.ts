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


const EC = require("elliptic").ec;
import * as crypto from "crypto-js";
// import * as uuidV1 from "uuid/v1";
import { v1 as uuidV1 } from 'uuid';
// const { v1: uuidV1 } = require('uuid');

const ec = new EC('secp256k1');

export default class ChainUtil {
    static genKeyPair() {
        return ec.genKeyPair();
    }

    /**
     * Generates hash based on any given data. Useful for not having to sign very large pieces of data but
     * just the hash value.
     * @param data Any arbitrary data with no fixed size that will be hashed to a set size.
     */
    static genHash(data: any): string {
        return crypto.SHA256(JSON.stringify(data)).toString();
    }

    static genID(): string {
        return uuidV1();
    }

    /**
     * verifySignature
     * @param publicKey Key to use for the verification.
     * @param signature Signature to verify.
     * @param expectedDataHash Expected hash if signature is successfully verified.
     */
    static verifySignature(publicKey: string, signature: string, expectedDataHash: string): boolean {
        try {
            return ec.keyFromPublic(publicKey, 'hex').verify(expectedDataHash, signature);
        }
        catch(Error: any) {

            console.log("signature verification error for public key: " + publicKey + "; error message: " + Error.message);
            return false;
        }
    }
}