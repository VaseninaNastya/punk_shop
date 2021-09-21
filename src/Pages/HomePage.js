import React from "react";
import MainContentBlock from "../components/MainContentBlock";
import Header from '../components/Header'

const HomePage = () => {
  return (
    <>
        <Header button = {"Card"} link = {`/card`}/>
        <MainContentBlock />
    </>
  );
};

export default HomePage;