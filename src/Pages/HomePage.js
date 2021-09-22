import React from "react";
import MainContentBlock from "../components/MainContentBlock";
import Header from '../components/Header'
import Pagination from '../components/Pagination'
const HomePage = () => {
  return (
    <>
        <Header button = {"Card"} link = {`/card`}/>
        <MainContentBlock />
        <Pagination/>
    </>
  );
};

export default HomePage;