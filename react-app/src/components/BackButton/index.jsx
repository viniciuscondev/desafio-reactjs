import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.whiteText};
    width: 200px;
    margin-bottom: 1vh;
    border: none;
    border-radius: 5px;
    height: 50px;
    font-style: italic;
    font-size: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};    
`;

export default function BackButton() {
    
    const history = useHistory();    
    function goBack() {
        history.goBack();
    }

    return (
        <Button onClick={goBack}>Voltar</Button>
    );
}