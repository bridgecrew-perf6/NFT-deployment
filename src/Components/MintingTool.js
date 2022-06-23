import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";

const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id:`${window.accountId}-go-team-token`,
        metadata: {
          title:"My non Fungible Team Token",
          description:"The Team Most Certainly Goes",
          media:"https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"
          // media:'https://tenor.com/view/bayc-bored-ape-yacht-club-bored-ape-yacht-bored-apes-bored-ape-gif-23881773'
          // media:"https://tenor.com/bMmT3.gif",
          // media:"https://tenor.com/view/bored-ape-yacht-club-nft-cool-nfts-gif-23884160",
          

        },
        receiver_id:window.accountId,
      },
      300000000000000, // attached the Gas
      new BN("9440000000000000000000 ") // this is for storage
    );
  };

  return (
    <Card style={{ padding: "2vh" }}>
      <Container>
        <Row style={{ marginBottom: "2vh" }}>
          <p>
            Step 2: After you have logged in, hit this button to mint your "Go
            Team" Token and go your{" "}
            <a href='https://wallet.testnet.near.org/'> wallet</a> and see your
            NFT
          </p>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            style={{ width: "50vw" }}
          >
            Mint NFT
          </Button>
        </Row>
        <Row className='d-flex justify-content-center'>
          {console.log(props.userNFTStatus)}
          {props.userNFTStatus ? (
            <Alert variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                bruh/sis.... You have an NFT already. You can see it{" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  here!
                </a>
                :)
              </p>
            </Alert>
          ) : null}
        </Row>
      </Container>
    </Card>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
