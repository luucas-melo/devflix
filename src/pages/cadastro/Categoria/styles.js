import styled from 'styled-components';

export const Button = styled.button` 
    width: 180px;
    height: 30px;
    display: inline-block;
    margin-right: 20px;
    border-radius: 5px;
    text-decoration: none;
    background-color: white;
    transition-duration: 0.4s;
    border: 1px solid #f00000;
    &:hover {
        background-color: red; 
        color: white;
    }

    @media (max-width: 800px) {
        margin-bottom:  4px;
    }
`


