/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";

const DropZone = ({ parentId, addItem }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => addItem(item, parentId),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: "30px",
        backgroundColor: isOver ? "lightgreen" : "lightgray",
        border: "2px dashed gray",
        marginTop: "8px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {canDrop && isOver ? "Release to drop" : "Drop here"}
    </div>
  );
};

export default DropZone;
