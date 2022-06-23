nft-mint
==================


Github feedback - readme.md file missing your project description, also name of smart contracts used, methods in smart contracts, steps to add nft to near wallet etc. Remove description like "This React app was initialized with create-near-app"

project description
===================
This app allows users to login and logout and Mint their NFT's into the Near wallet by once.

smart contracts --baackend
============================= 
I developed this app through the rust smart contracts.

Frontend
========
For fronted I used Reactjs through config.js file I'm connecting the Rust backend and fetching smart contract calls to the frontend.



Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you've installed [Node.js] ≥ 12
2. Install dependencies: `yarn install`
3. Run the local development server: `yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the NEAR TestNet!

Go ahead and play with the app and the code. As you make code changes, the app will automatically reload.


Exploring The Code
==================

1. The "backend" code lives in the `/contract` folder. See the README there for
   more info.
2. The frontend code lives in the `/src` folder. `/src/index.html` is a great
   place to start exploring. Note that it loads in `/src/index.js`, where you
   can learn how the frontend connects to the NEAR blockchain.
3. Tests: there are different kinds of tests for the frontend and the smart
   contract. See `contract/README` for info about how it's tested. The frontend
   code gets tested with [jest]. You can run both of these at once with `yarn
   run test`.



Step 0: Install near-cli (optional)
-------------------------------------

[near-cli] is a command line interface (CLI) for interacting with the NEAR blockchain. It was installed to the local `node_modules` folder when you ran `yarn install`, but for best ergonomics you may want to install it globally:

    yarn install --global near-cli

Or, if you'd rather use the locally-installed version, you can prefix all `near` commands with `npx`

Ensure that it's installed with `near --version` (or `npx near --version`)


Step 1: Create an account for the contract
------------------------------------------

Each account on NEAR can have at most one contract deployed to it. If you've already created an account such as `your-name.testnet`, you can deploy your contract to `nft-mint-frontend.your-name.testnet`. Assuming you've already created an account on [NEAR Wallet], here's how to create `nft-mint-frontend.your-name.testnet`:

1. Authorize NEAR CLI, following the commands it gives you:

      near login

2. Create a subaccount (replace `YOUR-NAME` below with your actual account name):

      near create-account nft-mint-frontend.YOUR-NAME.testnet --masterAccount YOUR-NAME.testnet


Step 2: set contract name in code
---------------------------------

Modify the line in `src/config.js` that sets the account name of the contract. Set it to the account id you used above.

    const CONTRACT_NAME = process.env.CONTRACT_NAME || 'nft-mint-frontend.YOUR-NAME.testnet'


Step 3: deploy!
---------------

One command:

    yarn deploy

As you can see in `package.json`, this does two things:

1. builds & deploys smart contract to NEAR TestNet
2. builds & deploys frontend code to GitHub using [gh-pages]. This will only work if the project already has a repository set up on GitHub. Feel free to modify the `deploy` script in `package.json` to deploy elsewhere.



TO Mint a NFT  contracts needs to able to
========================================
 -- Keep Track of Tokens
 --store Information for each Token
 -- Link  a Token with an Owner

 Contract Structure
 ===================

 contract/src/lib.rs

 -- tokens_per_owner:Allows you keep track of the toekns owned by account ID
 -- tokens_by_id : returns all information about a specific token.
 -- token_metadata_by_id:returns just the metadata for a specific token


initilization Functions
=======================

A function that can only be called one time.typically upon deployment of a smart contract onto a near account.
-- "new" methid initilizes all the contract fields defined above.
-- "new_default_media" method initilizes the contract metadta

contract/src/metadata.rs

NFT ContractMetadata: information of the smart contract itself
Required :fields being:

spec - version of smart contracts
Name - Name of a smart contact
Symbol - shorthand for name (this USD,NEAR,ETH)


contracts/src/mint.rs

Minting Function
=================

Looking at these data structures, the minting function should do the following:
-- tokens_per_owner: Add the token ID into the set of tokens that the receivr owns.
-- tokens_by_id: Create a token object, and map the token ID to that token object in the tokens_by_id field.

-- token_metadata_by_id : Map the token ID to it's metadata.

-- token_id : custom ID given to token(string)
-- metadata: metadata associated with token (object)
-- receiver_id: account that will own the NFT .

--Measures intial storage being used on the contract
--Specify the token struct that contains the owner ID
--checks for the existence of the token
--insert the token id and the metadata
--calls the internal method that adds the token to the owner
--calculates the required storage which has used
--refunds excess storage if the user attaches too much

Front-end setup
================
npm i near-api-js

import * as nearAPI from 'near-api-js'

src/config.js
======================
-- returns an object that contains the networkID, the nodeURL, the name of the contract account, the walletURL,the helper URL,and the explorer URL

src/utils.js
================
--retrives config object
--connects tp near blockchain
--Express near-api-js tools to the window object for global use
-- Creates contracts Objects to interact to with the smart contract .

Deploying the Contract
======================

simply run 'Yarn && Yarn build' to run a build script located in nft-contract/build.sh file

this will compile our smart contracts into a .wasm file which appear in the out/main.wasm folder


App Functionally
================
step 1: we have go the localhost:1234 there is App Login Button 
step 2: we have login with our near wallet sign in our near near.testnet account
step 3: At the below there is MINT NFT Button to click we will Mint nft to our account
step 4 : we have to https://near.wallet.tesnet.org in this page we can see out NFT.



