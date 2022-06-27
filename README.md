# NFT DEPLOYMENT


##  Project Description

-  This NFT Deployment is a NEAR Blockchain Based DApp which includes Deploying of NFT's.
- This Near NFT Deployment dApp it Consisits of a Smart Contracts its written in Assembly Script.
-  Ultimately, the purpose of this project was to build a simple contract to explore how user can login into  an account and deploy their NFT into their Acoount. 

## Smart Contracts --Backend

I developed this app through the rust smart contracts.

## Frontend

For fronted I used Reactjs through config.js file I'm connecting the Rust backend and fetching smart contract calls to the frontend.



## TO Mint a NFT 
 - Keep Track of Tokens
 - Store Information for each Token
 -  Link  a Token with an Owner

 ## Contract Structure
 

 contract/src/lib.rs

- tokens_per_owner:Allows you keep track of the toekns owned by account ID
 - tokens_by_id : returns all information about a specific token.
 - token_metadata_by_id:returns just the metadata for a specific token


## Initilization Functions

A function that can only be called one time.typically upon deployment of a smart contract onto a near account.
- "new" methid initilizes all the contract fields defined above.
- "new_default_media" method initilizes the contract metadta

contract/src/metadata.rs

NFT ContractMetadata: information of the smart contract itself
Required :fields being:

- version of smart contracts
 - Name of a smart contact
 - shorthand for name (this USD,NEAR,ETH)


contracts/src/mint.rs

## Minting Function


Looking at these data structures, the minting function should do the following:
- tokens_per_owner: Add the token ID into the set of tokens that the receivr owns.
- tokens_by_id: Create a token object, and map the token ID to that token object in the tokens_by_id field.

- token_metadata_by_id : Map the token ID to it's metadata.

- token_id : custom ID given to token(string)
- metadata: metadata associated with token (object)
- receiver_id: account that will own the NFT .

- Measures intial storage being used on the contract
- Specify the token struct that contains the owner ID
- Checks for the existence of the token
- Insert the token id and the metadata
- Calls the internal method that adds the token to the owner
- Calculates the required storage which has used
- Refunds excess storage if the user attaches too much

## Front-end setup

- import * as nearAPI from 'near-api-js'

### src/config.js

- Returns an object that contains the networkID, the nodeURL, the name of the contract account, the walletURL,the helper URL,and the explorer URL

### src/utils.js

- Retrives config object
- Connects tp near blockchain
- Express near-api-js tools to the window object for global use
- Creates contracts Objects to interact to with the smart contract .

## Deploying the Contract


- Simply run 'Yarn && Yarn build' to run a build script located in nft-contract/build.sh file

- This will compile our smart contracts into a .wasm file which appear in the out/main.wasm folder


- ![nft.png](./src/assests/nft.png)

## App Functionally

- Step 1: we have go the localhost:1234 there is App Login Button 
- Step 2: we have login with our near wallet sign in our near near.testnet account
- Step 3: At the below there is MINT NFT Button to click we will Mint nft to our account
- Step 4 : we have to https://near.wallet.tesnet.org in this page we can see out NFT.

#### Introduction Video

A [loom] video which includes introduction and a quick demo.  [Click here to watch.](https://www.loom.com/share/ba11b6bb03cc43d58954fd5400934176)





