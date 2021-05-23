import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import parser from 'parse-link-header';
import styled from 'styled-components';

import Sidebar from '../../components/Sidebar';
import Repository from '../../components/Repository';
import BackButton from '../../components/BackButton';

const Main = styled.main`
    display: flex;
    flex-direction: row;
`;

const Errors = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    ul {        
        list-style-type: none;        
    }

    li {
        font-size: 2rem;
        color: #d43c3c;
        margin-bottom: 14px;
    }
`;

export default function Perfil() {
    const { state } = useLocation();
    const [userData, setUserData] = useState({});
    const [starred, setStarred] = useState('');
    const [repositoryData, setRepositoryData] = useState([]);
    const [errors, setErrors] = useState([':(']);

    useEffect(() => {        
        async function getUser() {
            try {

                const response = await axios.get(`https://api.github.com/users/${state}`);

                setUserData(response.data);

            } catch (error) {
                setErrors(errors => [...errors, 'Falha ao obter dados do usuário']);
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
                setErrors(errors => [...errors, 'Falha ao obter contagem de estrelas']);            
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
                setErrors(errors => [...errors, 'Falha ao obter repositórios']);                
            }
        }
        getRepositories();
    }, [state]);

    if (errors.length <= 1) {
        return (
            <Main>            
                <Sidebar userData={userData} starred={starred} />
                <Repository repositoryData={repositoryData} />
            </Main>
        );
    } else {
        return(
            <Errors>
                <div>
                    {errors.map((error, index) => (
                        <ul key={index}>
                            <li>{error}</li>
                        </ul>
                    ))}
                <BackButton />
                </div>
            </Errors>
        );
    }
}