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
        async function ApiRequest() {
            try {
                const response = await axios.get(`https://api.github.com/users/${state}`);

                const stars = await axios.get(`https://api.github.com/users/${state}/starred?per_page=1`); 
                
                const repositories = await axios.get(`https://api.github.com/users/${state}/repos`);
                
                setRepositoryData(repositories.data);
                
                const starsParsed = parser(stars.headers.link);
                
                setStarred(starsParsed.last.page);            
                setUserData(response.data);                
            } catch (error) {
                alert('deu ruim');
            }            
        }

        ApiRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Main>
            <Sidebar userData={userData} starred={starred} />
            <Repository repositoryData={repositoryData} />
        </Main>
    );
}