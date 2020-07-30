import styled from 'styled-components';

export const Label = styled.label`  
    flex-direction: column;
    margin-bottom: 0.8em;
    display: flex;
}
`

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 5px;
    font-size: 15px;
    box-sizing: border-box;
    transition-duration: 0.4s;
    &[type="color"] {
        padding: 0px;
    }
    &:focus::-webkit-input-placeholder {
        font-size: 0.65em;
    }
    
`
