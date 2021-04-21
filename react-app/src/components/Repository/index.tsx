import React from 'react';
import styled from 'styled-components';
import { BsStar } from 'react-icons/bs';


const Container = styled.div`
    margin: 3%;
    h2 {    
        color: ${({ theme }) => theme.colors.primary};
        font-style: italic;
        font-weight: 300;
        font-size: 2rem;
    }
    span {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1rem;
        font-weight: 300;
    }
    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        color: #8190A5;
        font-style: italic;
        margin-top: 1%;
    }
    li {
        margin-right: 2rem;
    }
`;

export default function Repository(props: any) {
    function parseDate(date: string) {
        var day1 = new Date(date);
        var now = new Date();

        var diffMilliseconds = now.getTime() - day1.getTime();

        var diffDays = diffMilliseconds / (1000*60*60*24);

        return diffDays.toFixed(0);
    }
    
    return (
        <div>
            {props.repositoryData.map((repository: any, index: any) => (
                <Container key={index}>                
                    <h2>{repository.name}</h2>
                    <span>{repository.description}</span>
                    <ul>
                        <li><BsStar />{repository.stargazers_count} stars</li>
                        <li>•</li>
                        <li>Updated {parseDate(repository.updated_at)} days ago</li>
                    </ul>
                </Container>
            ))}            
        </div>
    );
}