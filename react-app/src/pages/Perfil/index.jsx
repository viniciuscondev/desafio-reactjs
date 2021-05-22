import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import parser from 'parse-link-header';
import styled from 'styled-components';

import Sidebar from '../../components/Sidebar';
import Repository from '../../components/Repository';

const Main = styled.main`
    display: flex;
    flex-direction: row;
`;

export default function Perfil() {
    const { state } = useLocation();
    const [userData, setUserData] = useState({});
    const [starred, setStarred] = useState('');
    const [repositoryData, setRepositoryData] = useState([]);  

    useEffect(() => {        
        async function getUser() {
            try {

                const response = await axios.get(`https://api.github.com/users/${state}`);

                setUserData(response.data);

            } catch (error) {
                alert('Falha ao obter dados do usuário');
            }            
        }
        getUser();    
    }, [state]);

    useEffect(() => {
        async function getStarsCount() {
            try {

                const stars = await axios.get(`https://api.github.com/users/${state}/starred?per_page=1`);

                const starsParsed = parser(stars.headers.link);

                setStarred(starsParsed.last.page);

            } catch (error) {
                alert('Falha ao obter contagem de estrelas');            
            }
        }
        getStarsCount();
    }, [state]);

    useEffect(() => {
        async function getRepositories() {
            try {

                const repositories = await axios.get(`https://api.github.com/users/${state}/repos`);

                setRepositoryData(repositories.data);
                
            } catch (error) {
                alert('Falha ao obter repositórios');            
            }
        }
        getRepositories();
    }, [state]);

    return (
        <Main>
            <Sidebar userData={userData} starred={starred} />
            <Repository repositoryData={repositoryData} />
        </Main>
    );
}