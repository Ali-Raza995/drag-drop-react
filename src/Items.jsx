/* eslint-disable react/prop-types */
import { useDrag, useDrop } from 'react-dnd';

const Item = ({ item, addItem }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id: item.id, text: item.text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (draggedItem) => addItem(draggedItem, item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        padding: '8px',
        margin: '4px 0',
        backgroundColor: isOver && canDrop ? 'lightgreen' : 'white',
        border: '1px solid gray',
        opacity: isDragging ? 0.5 : 1,
        position: 'relative',
        zIndex: 2,
      }}
    >
      {item.text}
    </div>
  );
};

export default Item;
