import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  todo: [{ id: '1', text: 'Create UI layout' }],
  inProgress: [{ id: '2', text: 'Build components' }],
  done: [{ id: '3', text: 'Setup Tailwind' }],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceList = Array.from(tasks[source.droppableId]);
    const [movedItem] = sourceList.splice(source.index, 1);
    const destinationList = Array.from(tasks[destination.droppableId]);
    destinationList.splice(destination.index, 0, movedItem);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    });
  };

  const columns = {
    todo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done',
  };

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(columns).map(([columnId, title]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white dark:bg-gray-800 p-4 rounded shadow min-h-[200px]"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
                  {tasks[columnId].map((item, index) => (
                    <Draggable draggableId={item.id} index={index} key={item.id}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-2"
                        >
                          {item.text}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
