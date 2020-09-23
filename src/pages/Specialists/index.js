import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import useProviders from "Hooks/useProviders";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";
import FilterBar from "Components/FilterBar";
import SpecialistTable from "Components/SpecialistTable";

const filters = [
  {
    label: "responsible",
    value: "todo"
  },
  {
    label: "date",
    value: "todo"
  },
  {
    label: "service",
    value: "todo"
  },
  {
    label: "status",
    value: "todo"
  }
];

const admin = {
  fullName: "Elena"
};

const Specialists = () => {
  const t = useTranslate("specialists");

  const { providers } = useProviders(null, true);

  return (
    <>
      <TopBar
        location={t("specialists")}
        title={t("specialists")}
        user={admin}
      />
      <BackofficeContainer>
        <FilterBar availableFilters={filters} />
        <SpecialistTable items={providers} />
      </BackofficeContainer>
    </>
  );
};

export default Specialists;
