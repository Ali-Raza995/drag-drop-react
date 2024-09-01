/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Flow from './basic-drag';
import './App.css'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDrop = (newNode) => {
    if (
      !newNode.position ||
      typeof newNode.position.x !== "number" ||
      typeof newNode.position.y !== "number"
    ) {
      console.error("Invalid node position:", newNode);
      return;
    }

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "end", alignSelf: "end" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Dashboard
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}
            onDrop={handleDrop}
          />
          <Sidebar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
