/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Item from './Items';
import { ArcherElement } from 'react-archer';

const Column = ({ items, isSource, addItem, connections }) => {
  useEffect(() => {
    console.log('Rendering Column with items:', items);
  }, [items]);

  return (
    <div
      style={{
        margin: '0 20px',
        padding: '10px',
        border: '1px solid black',
        width: '200px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <ArcherElement
            id={isSource ? `source-${item.id}` : `target-${item.id}`}
            relations={
              isSource
                ? connections
                    .filter((connection) => connection.from === item.id)
                    .map((connection) => ({
                      targetId: `target-${connection.to}`,
                      targetAnchor: 'left',
                      sourceAnchor: 'right',
                      style: { strokeColor: 'blue', strokeWidth: 2 },
                    }))
                : []
            }
          >
            <div>
              <Item item={item} isSource={isSource} addItem={addItem} />
            </div>
          </ArcherElement>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Column;
