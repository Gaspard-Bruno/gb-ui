import React from "react";
import PropTypes from "prop-types";

import { DragDropContext } from "react-beautiful-dnd";

import { BackofficeKanbanContainer } from "Components/Layout";
import KanbanColumn from "Components/KanbanColumn";

const Kanban = ({ items, filters, colNames, kanbanData, onChangeStatus }) => {
  const COLUMNS = {};
  colNames.forEach(cn => {
    COLUMNS[cn] = [];
  });

  filters.forEach(filter => {
    if (!COLUMNS[filter.column]) {
      return null;
    }
    COLUMNS[filter.column].push(filter);
  });

  return (
    <>
      <DragDropContext onDragEnd={onChangeStatus}>
        <BackofficeKanbanContainer>
          {COLUMNS &&
            Object.keys(COLUMNS).map((key, index) => {
              return (
                <KanbanColumn
                  key={"kanbanCol" + index}
                  colName={key}
                  items={COLUMNS[key]}
                  data={kanbanData}
                  kanbanType="requests"
                />
              );
            })}
        </BackofficeKanbanContainer>
      </DragDropContext>
    </>
  );
};

export default Kanban;

Kanban.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      column: PropTypes.string
    })
  ),
  items: PropTypes.object,
  colNames: PropTypes.arrayOf(PropTypes.string),
  onChangeStatus: PropTypes.func
};
