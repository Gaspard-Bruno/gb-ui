import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";


const admin = {
  fullName: "Elena"
};

const Candidates = () => {
  const t = useTranslate("candidates");    
  return (
    <>
        <TopBar location={t('specialists')} title={t('newCandidates')} user={admin} />
        <BackofficeContainer>

            candidate kanban woo
        </BackofficeContainer>
    </>
  );
};

export default Candidates;
