/* eslint-disable react/prop-types */
import DraggableComponent from "./Draggable";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  const components = ["Header", "Visual", "Details", "Grid"];

  return (
    <div
      style={{
        width: isSidebarOpen ? "30%" : "0",
        transition: "width 0.3s",
        overflow: "hidden",
        padding: isSidebarOpen ? "10px" : "0",
      }}
    >
      <button onClick={toggleSidebar} style={{ marginBottom: "10px" }}>
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>
      <div>
        {components.map((component, index) => (
          <DraggableComponent key={index} name={component} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
