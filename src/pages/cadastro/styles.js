/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Table = styled.table`
    
`;
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

Button.Send = styled(Button)`
    width: 50%;
    height: 50px;   
    margin-right: 0px;
    border-radius: 5px;
    text-decoration: none;
    background-color: white;
    transition-duration: 0.4s;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: var(--primary);
    color: white;
    font: 16px;
    @media (max-width: 800px) {
        width: 100%;
    }
    &:hover {
        cursor: pointer;
        background-color: #2471A9;
    }
`;
