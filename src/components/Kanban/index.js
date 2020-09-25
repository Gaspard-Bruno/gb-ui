import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { DragDropContext } from "react-beautiful-dnd";

import { BackofficeKanbanContainer } from "Components/Layout";
import KanbanColumn from "Components/KanbanColumn";

const Kanban = ({ items, colNames, kanbanData, onChangeStatus }) => {
  const [columns, setColumns] = useState({});
  useEffect(() => {
    const COLUMNS = {};
    colNames.forEach(cn => {
      COLUMNS[cn] = [];
    });

    items.forEach(item => {
      if (!COLUMNS[item.column]) {
        return null;
      }
      COLUMNS[item.column].push(item);
    });
    setColumns(COLUMNS);
  }, [colNames, items, kanbanData]);

  const handleChangeColumn = useCallback(
    params => {
      const cardId = params.draggableId;
      const destinationColumn = params.destination.droppableId;
      const sourceColumn = params.source.droppableId;
      if (destinationColumn !== sourceColumn) {
        const COLUMNS = {
          ...columns,
          [sourceColumn]: columns[sourceColumn].filter(c => c.id !== cardId)
        };
        COLUMNS[destinationColumn] = [
          items.find(itm => itm.id === cardId),
          ...columns[destinationColumn]
        ];
        setColumns(COLUMNS);
        if (onChangeStatus) {
          onChangeStatus(params);
        }
      }
    },
    [columns, items, onChangeStatus]
  );

  return (
    <>
      <DragDropContext onDragEnd={handleChangeColumn}>
        <BackofficeKanbanContainer>
          {columns &&
            Object.keys(columns).map((key, index) => {
              return (
                <KanbanColumn
                  key={"kanbanCol" + index}
                  colName={key}
                  items={columns[key]}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      column: PropTypes.string
    })
  ),
  kanbanData: PropTypes.shape({
    admins: PropTypes.object,
    clients: PropTypes.object,
    services: PropTypes.object
  }),
  colNames: PropTypes.arrayOf(PropTypes.string),
  onChangeStatus: PropTypes.func
};
