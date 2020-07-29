import styled from 'styled-components';
export const Label = styled.label`  
    flex-direction: column;
    margin-bottom: 0.8em;
    display: flex;
`
export const Button = styled.button` 
    width: 180px;
    height: 40px;
    display: inline-block;
    margin-right: 20px;
    border-radius: 5px;
    text-decoration: none;
    background-color: white;
    transition-duration: 0.4s;
    border: 2px solid #ff0000;
    &:hover {
        background-color: red; 
        color: white;
    }
`


