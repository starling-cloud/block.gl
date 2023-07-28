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


export const BLOCKCHAIN_WALLET_ADDRESS = "blockchain-wallet";

export const DIFFICULTY: number = 3;

//in milliseconds
export const MINE_RATE: number = 3000;

export const INITIAL_BALANCE: number = 500;

export const MINING_REWARD: number = 10;

//end points

export const ENDPOINT_POST_MINE = "/mine";
export const ENDPOINT_POST_TRANSACTIONS = "/transact";

export const ENDPOINT_GET_BALANCE = "/balance";
export const ENDPOINT_GET_BLOCKS = "/blocks";
export const ENDPOINT_GET_MINE_TRANSACTIONS = "/mine-transactions"
export const ENDPOINT_GET_PUBLIC_KEY = "/public-key";
export const ENDPOINT_GET_TRANSACTIONS = "/transactions";