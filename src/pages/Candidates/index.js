import React from 'react';

import { useTranslate } from 'polyglot-react-redux-sdk';

import useCandidateLeads from 'hooks/useCandidateLeads';

import { BackofficeContainer } from 'Components/Layout';
import TopBar from 'Components/TopBar';
import FilterBar from 'Components/FilterBar';
import { BackofficeKanbanContainer } from 'Components/Layout';
import KanbanColumn from 'Components/KanbanColumn';

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

  const { candidateLeads } = useCandidateLeads();

  const filterStatus = (candidateLeads) => {
    const columns = {
      closed: [],
      newCandidates: [],
      inAnalysis: [],
      pending: [],
      reopened: [],
      accepted: [],
      rejected: []
    }

    candidateLeads.forEach((candidate) => {
      switch (candidate.attributes.status) {
        case 'new_candidate': columns.newCandidates.push(candidate); break;
        case 'analysis': columns.inAnalysis.push(candidate); break;
        case 'awaiting_details': columns.pending.push(candidate); break;
        case 'reopened': columns.reopened.push(candidate); break;
        case 'closed': columns.closed.push(candidate); break;
        case 'rejected': columns.rejected.push(candidate); break;
        case 'accepted': columns.accepted.push(candidate); break;
        default: break;
      }
    })

    return columns;
  }

  const columns = filterStatus(candidateLeads);

  return (
    <>
        <TopBar location={t('specialists')} title={t('newCandidates')} user={admin} />
        <BackofficeContainer>
            <FilterBar availableFilters={filters}/>
            
            <BackofficeKanbanContainer>

              {columns && Object.keys(columns).map(key => {
                return (
                  <KanbanColumn
                    status={key}
                    items={columns[key]}
                    kanbanType='candidates'
                  />
                )
              })
              }

            </BackofficeKanbanContainer>

        </BackofficeContainer>
    </>
  );
};

export default Candidates;
