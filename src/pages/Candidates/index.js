import React, {
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
  useMemo
} from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import CONFIG from "Config";

import useCandidateLeads from "hooks/useCandidateLeads";
import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";
import useAdmin from "Hooks/useAdmin.js";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";
import FilterBar from "Components/FilterBar";
import Kanban from "Components/Kanban";

const STATUS_COLUMNS = CONFIG.boards.candidates.columns;

const Candidates = () => {
  const t = useTranslate("candidates");
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

  const { providers } = useProviders();
  const { clients } = useClients();
  const { services } = useServices();
  const { admins } = useAdmin();
  const { candidateLeads } = useCandidateLeads();
  const COLUMN_NAMES = new Set(Object.values(STATUS_COLUMNS));
  const kanbanItems = useMemo(
    () =>
      candidateLeads?.map(a => ({
        ...a,
        column: STATUS_COLUMNS[a?.attributes?.status]
      })),
    [candidateLeads]
  );

  const kanbanData = useMemo(
    () => ({
      providers,
      services,
      clients,
      admins
    }),
    [admins, clients, providers, services]
  );

  const updateCandidate = () => {
    console.log("Updating candidate");
  };

  return (
    <>
      <TopBar
        location={t("specialists")}
        title={t("newCandidates")}
        user={admin}
      />
      <BackofficeContainer>
        <FilterBar availableFilters={filters} />
        <Kanban
          onChangeStatus={updateCandidate}
          kanbanData={kanbanData}
          items={kanbanItems}
          colNames={[...COLUMN_NAMES]}
        />
      </BackofficeContainer>
    </>
  );
};

export default Candidates;
