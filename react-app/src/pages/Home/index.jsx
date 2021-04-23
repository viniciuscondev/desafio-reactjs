import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    
    h1 {
        margin: 0;
        font-size: 40px;
        font-style: italic;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.primary};
    }
    form {
        margin: 0;
        padding: 0;
        display: flex;
    }
    input {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        background-color: #FFFFFF;
        border-radius: 5px;
        width: 366px;
        height: 50px;
        padding: 0px;
        padding-left: 32px;               
        font-size: 18px;        
        font-weight: 300;   
        color: ${({ theme }) => theme.colors.primary};       
    }
    input::placeholder {
        font-style: italic;       
    }
    button {
        background-color: #47525E;
        border-radius: 5px;
        border: 1px solid #47525E;
        width: 118px;
        height: 50px;
        color: #ECEFF4;
        font-style: italic;
        font-size: 22px;
        font-weight: 100;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;  
    }
`;

export default function Home() {
    const [username, setUsername] = useState();
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        history.push({ pathname: '/perfil', state: username });        
    }

    return (
        <Main>
            <h1>Search Devs</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Type the username here..." onChange={event => setUsername(event.target.value)} required />
                <button type="submit">
                    <BsSearch />
                    Buscar
                </button>
            </form>            
        </Main>
    );
}