/* eslint-disable react/prop-types */
import React from 'react';
import Collapsible from 'react-collapsible';
import { FaTrashAlt } from 'react-icons/fa';
import { Container } from './styles';
import categoriesRepository from '../../repositories/categories';


function ListComponent({ categories, onRemove }) {
  return (
    <Container>
      {categories.map((category) => (
        <Collapsible
          key={category.id}
          trigger={(
            <>
              <span>{category.title}</span>
              {' '}
              <FaTrashAlt
                onClick={
                  () => {
                    onRemove(category.id);
                    categoriesRepository.deleteCategories(category.id);
                  }

                }
              />
            </>
          )}
        >
          <p>{category.description}</p>
        </Collapsible>
      ))}
    </Container>
  );
}

export default ListComponent;
