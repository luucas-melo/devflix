/* eslint-disable react/prop-types */
import React from 'react';
import Collapsible from 'react-collapsible';
import { List, ListItem, Container} from './styles';

function DivList() {
  return (
    <>
      bora
    </>
  );
}
function ListComponent({ categories }) {
  return (
    <Container>
      {categories.map((category) => (
        <Collapsible trigger={category.title}>
          <p>descricão</p>
        </Collapsible>
      ))}

    </Container>
  );
}

export default ListComponent;
