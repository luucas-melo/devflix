/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    --mainColor: #E50914;
    color: white;
    margin-top: 1rem;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid var(--mainColor);
    tbody:nth-child(even) {
        background-color: #1E1D1D ;
    }
    th, td {
        padding: 10px 15px;
        text-align: left;
    }
   
    th {
        background-color: var(--mainColor);
        
    }
    th:first-child  {
        border-top-left-radius: 5px;
    }

    th:nth-child(4){
        border-top-right-radius: 5px;
    }
  
    


    @media(max-width:800px) {
        th, td {
            padding: 6px 8px;
        }
    }
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
    border-color: var(--primary);
    font: 16px;
    @media (max-width: 800px) {
        width: 100%;
    }
    &:hover {
        cursor: pointer;
        background-color: #2471A9;
    }
`;
