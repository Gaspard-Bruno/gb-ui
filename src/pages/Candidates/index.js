import React, { useState, useLayoutEffect, useRef, useEffect } from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import useCandidateLeads from "hooks/useCandidateLeads";
import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";
import useAdmin from "Hooks/useAdmin.js";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";
import FilterBar from "Components/FilterBar";
import { BackofficeKanbanContainer } from "Components/Layout";
import KanbanColumn from "Components/KanbanColumn";

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

const Candidates = () => {
  const t = useTranslate("candidates");

  const { providers } = useProviders();
  const { clients } = useClients();
  const { services } = useServices();
  const { admins } = useAdmin();
  const { candidateLeads } = useCandidateLeads();

  const filterStatus = candidateLeads => {
    const columns = {
      closed: [],
      newCandidates: [],
      inAnalysis: [],
      pending: [],
      reopened: [],
      accepted: [],
      rejected: []
    };

    candidateLeads.forEach(candidate => {
      switch (candidate.attributes.status) {
        case "new_candidate":
          columns.newCandidates.push(candidate);
          break;
        case "analysis":
          columns.inAnalysis.push(candidate);
          break;
        case "awaiting_details":
          columns.pending.push(candidate);
          break;
        case "reopened":
          columns.reopened.push(candidate);
          break;
        case "closed":
          columns.closed.push(candidate);
          break;
        case "rejected":
          columns.rejected.push(candidate);
          break;
        case "accepted":
          columns.accepted.push(candidate);
          break;
        default:
          break;
      }
    });

    return columns;
  };

  const columns = filterStatus(candidateLeads);

  const [filterHeight, setFilterHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const filterRef = useRef(null);
  const updateFilterHeight = () => {
    setFilterHeight(filterRef.current.clientHeight);
    setContainerHeight(226 + filterHeight);
  };
  useEffect(() => {
    updateFilterHeight();
  });

  const kanbanData = {
    providers,
    services,
    clients,
    candidateLeads,
    admins
  };

  return (
    <>
      <TopBar
        location={t("specialists")}
        title={t("newCandidates")}
        user={admin}
      />
      <BackofficeContainer>
        <div ref={filterRef}>
          <FilterBar
            availableFilters={filters}
            updateFilterHeight={updateFilterHeight}
          />
        </div>

        <BackofficeKanbanContainer filterHeight={filterHeight}>
          {columns &&
            Object.keys(columns).map(key => {
              return (
                <KanbanColumn
                  data={kanbanData}
                  key={key}
                  status={key}
                  items={columns[key]}
                  kanbanType="candidates"
                  containerHeight={containerHeight}
                />
              );
            })}
        </BackofficeKanbanContainer>
      </BackofficeContainer>
    </>
  );
};

export default Candidates;