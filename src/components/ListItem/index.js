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
              <span>{dataType.title}</span>
              {' '}
              <FaTrashAlt
                onClick={
                  () => {
                    onRemove(dataType.id);
                    deleteFromRepository(dataType.id);
                  }

                }
              />
            </>
          )}
        >
          <a href={dataType.url}>{dataType.description || dataType.url }</a>
        </Collapsible>
      ))}
    </Container>
  );
}

export default ListComponent;
