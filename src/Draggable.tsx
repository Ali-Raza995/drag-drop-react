import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableComponent = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '8px',
        marginBottom: '5px',
        backgroundColor: '#f3f3f3',
        border: '1px solid #ccc',
      }}
    >
      {name}
    </div>
  );
};

export default DraggableComponent;
