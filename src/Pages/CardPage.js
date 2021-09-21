import React from "react";
import CardContentBlock from "../components/CardContentBlock";
import Header from '../components/Header'

const CardPage = () => {
  return (
    <>
        <Header button = {"Return to list"} link = {`/`}/>
        <CardContentBlock />
    </>
  );
};

export default CardPage;