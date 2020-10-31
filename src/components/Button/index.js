import styled from 'styled-components';

const Button = styled.button`
    color: var(--red);
    border: 1px solid var(--red);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    outline: none;
    border-radius: 15px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .8;
    }
  
`;

export default Button;
