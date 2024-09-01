/* eslint-disable react/prop-types */
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableNode = ({ data }) => {
  return (
    <ResizableBox
      width={200}          // Initial width
      height={200}         // Initial height
      minConstraints={[100, 100]}  // Minimum width and height
      maxConstraints={[400, 400]}  // Maximum width and height
      resizeHandles={['se']}  // Resize from the bottom right corner
    >
      <div style={{ width: '100%', height: '100%', border: '1px solid #ccc', padding: '10px' }}>
        {data.label}
      </div>
    </ResizableBox>
  );
};

export default ResizableNode;
