import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from "react-redux";

import { useTranslate } from 'polyglot-react-redux-sdk';

import useAppointments from 'Hooks/useAppointments';

import { BackofficeContainer } from 'Components/Layout';
import TopBar from 'Components/TopBar';

import ArchiveTable from 'Components/ArchiveTable';
import FilterBar from 'Components/FilterBar';
import Pagination from 'Components/Pagination';
import { getAppointmentsTotalPages } from 'Redux/appointments/selectors';

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

const Archive = () => {
  const t = useTranslate("archive");

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(state => getAppointmentsTotalPages(state))

  const { appointments } = useAppointments(currentPage);

  const handleNavigation = useCallback((pageNumber) =>{
    setCurrentPage(pageNumber);
  }, [])

  return (
    <>
        <TopBar location={t('services')} title={t('archive')} user={admin} />
        <BackofficeContainer>
            <FilterBar availableFilters={filters}/>

            <ArchiveTable items={appointments}/>
            <Pagination 
              totalPages={totalPages} 
              currentPage={currentPage} 
              action={handleNavigation}
            />
        </BackofficeContainer>
    </>
  );
};

export default Archive;
