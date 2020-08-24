/* eslint-disable react/prop-types */
import React from 'react';
import Collapsible from 'react-collapsible';
import { FaTrashAlt } from 'react-icons/fa';
import { Container } from './styles';

function ListComponent({ dataTypeDeleted, onRemove, deleteFromRepository }) {
  return (
    <Container>
      {dataTypeDeleted.map((dataType) => (
        <Collapsible
          key={dataType.id}
          trigger={(
            <>
              <p>{dataType.title}</p>
              {' '}
              <div>
                <FaTrashAlt
                  size={15}
                  onClick={
                    () => {
                      onRemove(dataType.id);
                      deleteFromRepository(dataType.id);
                    }

                  }
                />
              </div>
            </>
          )}
        >
          <a href={dataType.url}>{dataType.description || dataType.url}</a>
        </Collapsible>
      ))}
    </Container>
  );
}

export default ListComponent;
