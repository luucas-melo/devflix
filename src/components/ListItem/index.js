/* eslint-disable react/prop-types */
import React from 'react';
import Collapsible from 'react-collapsible';
import { FaTrashAlt, FaCentercode } from 'react-icons/fa';
import { Container } from './styles';

function ListComponent({ categories }) {
  return (
    <Container>
      {categories.map((category) => (
        <Collapsible
          id={category.id}
          trigger={(
            <>
              <span>{category.title}</span>
              {' '}
              <FaTrashAlt />
            </>
)}
        >
          <p>{category.id}</p>
        </Collapsible>
      ))}
    </Container>
  );
}

export default ListComponent;
