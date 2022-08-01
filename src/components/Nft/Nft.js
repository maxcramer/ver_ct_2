import React, { useState } from "react";
import Form from "../Form/Form";

function Nft({ nfts }) {
  return nfts.map((nft, index) => (
    <div key={index}>
      <div key={nft.id}>
        <h3>{nft.title}</h3>
        <p>image: {nft.image}</p>
        <p>{nft.artist}</p>
        <p>{nft.year}</p>
      </div>
    </div>
  ));
}

export default Nft;
