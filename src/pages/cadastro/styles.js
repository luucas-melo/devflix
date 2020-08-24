/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.button` 
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: white;
    height: 50px; 
    width: 180px; 
    display: inline-block;
    border-radius: 5px;
    text-decoration: none;
    background-color: #000000;
    transition-duration: 0.4s;
    border: 1px solid  var(--white);
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    @media (max-width: 800px) {
        width: 120px;
        margin-bottom:  4px;
    }
`;

Button.Div = styled.div`
    text-align: center;
    Button:first-child {
        margin-right: 20px;
    }
`;
Button.Link = styled.a`
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
`;

