import React from "react";
import s from "./MainContentBlock.module.scss";
import MainContentBlock from "../components/MainContentBlock";
import Header from '../components/Header'

const HomePage = () => {
  return (
    <>
        <Header />
        <MainContentBlock />
    </>
  );
};

export default HomePage;