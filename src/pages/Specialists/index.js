import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";

const admin = {
  fullName: "Elena"
};

const Specialists = () => {
  const t = useTranslate("specialists");    
  return (
    <>
        <TopBar location={t('specialists')} title={t('specialists')} user={admin} />
        <BackofficeContainer>
            special yay
        </BackofficeContainer>
    </>
  );
};

export default Specialists;
