/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import { ReactFlow, MiniMap, Controls, Background, addEdge, useNodesState, useEdgesState } from '@xyflow/react';
import { useDrop } from 'react-dnd';
import '@xyflow/react/dist/style.css';
import ResizableNode from './resizeable-nodes'; // Ensure this path is correct

// Define the node types
const nodeTypes = {
  ResizableNode, // Ensure this matches the name in your node component
};

const Dashboard = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const [, drop] = useDrop({
    accept: "COMPONENT",
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      console.log("offset", offset);

      if (!offset) {
        console.error("Offset is undefined. Cannot determine drop position.");
        return;
      }

      const newNode = {
        id: `${nodes.length + 1}`,
        position: { x: offset.x || 0, y: offset.y || 0 },
        data: { label: item.name },
        type: item.type,
        draggable: true,
        connectable: false,
      };

      console.log('New Node:', newNode); // For debugging

      setNodes((nds) => [...nds, newNode]);
    },
  });

  const handleNodesChange = useCallback(
    (changes) => {
      onNodesChange(changes);
      console.log('Updated Nodes:', nodes); 
    },
    [onNodesChange, nodes]
  );

  return (
    <div ref={drop} style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges} // Include edges if you have any
        onNodesChange={handleNodesChange} // Use the custom handler
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={{ width: "100%", height: "100%" }}
        nodeTypes={nodeTypes} // Pass the nodeTypes to ReactFlow
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Dashboard;
