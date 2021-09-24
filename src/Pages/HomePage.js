import React from "react";
import MainContentBlock from "../components/MainContentBlock";
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import RegistrationPopup from '../components/RegistrationPopup'
const HomePage = () => {
  return (
    <>
        <Header button = {"Card"} link = {`/card`}/>
        <MainContentBlock />
        <Pagination/>
        <RegistrationPopup/>
    </>
  );
};

export default HomePage;