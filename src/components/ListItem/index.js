/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { FaTrashAlt } from 'react-icons/fa';
import { Container } from './styles';
import categoriesRepository from '../../repositories/categories';
import CategoryRegister from '../../pages/cadastro/Categoria';

function ListComponent({ categories, onRemove }) {
  return (
    <Container>
      {categories.map((category) => (
        <Collapsible
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
          <p>{category.id}</p>
        </Collapsible>
      ))}
    </Container>
  );
}

export default ListComponent;
