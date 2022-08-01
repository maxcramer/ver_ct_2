import React, { useState } from "react";
import Form from "../Form/Form";
import Nft from "../Nft/Nft";

const List = () => {
  const [nfts, setNfts] = useState([]);

  const addNft = (nft) => {
    if (!nft.title || /^\s*$/.test(nft.title)) {
      return;
    }
    const newNfts = [nft, ...nfts];
    setNfts(newNfts);
    console.log(...nfts);
  };

  return (
    <div>
      <Form onSubmit={addNft} />
      <h2>List</h2>
      <Nft nfts={nfts} />
    </div>
  );
};

export default List;
