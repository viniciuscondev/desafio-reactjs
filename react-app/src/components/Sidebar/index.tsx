import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { BsPeople, BsHeart, BsStar, BsBuilding } from 'react-icons/bs';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlineLink } from 'react-icons/hi';
import { FiTwitter } from 'react-icons/fi';

const Container = styled.div`    
    background-color: ${({ theme }) => theme.colors.primary};
    width: 30%;    
    display: flex;
    flex-direction: column;
    align-items: center;   
    padding: 0px 14px; 
    padding-top: 46px;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;    
    h2 {
        color: ${({ theme }) => theme.colors.whiteText};
        font-style: italic;
        font-weight: 100;
        font-size: 2rem;
        margin: 0;
        margin-top: 5vh;
    }
    h3 {
        color: ${({ theme }) => theme.colors.whiteText};
        font-style: italic;
        font-weight: 100;
        font-size: 1.5rem;
        margin: 0;
    }
`;

const Description = styled.span`
    color: #8190A5;
    margin: 0px;    
    font-size: 1.1rem;
    margin: 3vh 0;
    text-align: justify;
`;

const Image = styled.img`
    width: 15vw;
    height: 15vw;    
`;

const Stats = styled.ul`
    width: 100%;
    padding: 0;
    margin: 1vh 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.whiteText};
    font-size: 1.1rem;
    font-style: italic;    
    font-weight: 100;    
    li {
        display: flex;
        align-items: flex-end;
        justify-content: center;        
    }
    li span {
        margin-left: 5px;        
    }
`;

const Info = styled.ul`
    width: 100%;
    padding: 0;
    margin: 1vh 0px;    
    list-style-type: none;
    color: ${({ theme }) => theme.colors.whiteText};
    font-size: 1.6rem;
    font-style: italic;    
    font-weight: 100;    
    li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 12px 0px;      
    }
    li span {
        margin-left: 12px;        
    }
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.whiteText};
    width: 50%;
    margin: 1vw 0;
    border: none;
    border-radius: 5px;
    height: 50px;
    font-style: italic;
    font-size: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};    
`;

export default function Sidebar(props: any) {
    const history = useHistory();

    function goBack() {
        history.goBack();
    }

    return (
        <Container>
            <Image src={props.userData.avatar_url} alt={props.userData.name + 'profile picture'}/>
            <User>
                <h2>{props.userData.name}</h2>
                <h3>@{props.userData.login}</h3>
            </User>
            <Description>{props.userData.bio}</Description>
            <Stats>
                <li>
                    <BsPeople />
                    <span>{props.userData.followers} followers</span>
                </li>
                <li>
                    <BsHeart />
                    <span>{props.userData.following} following</span>
                </li>
                <li>
                    <BsStar />
                    <span>{props.starred} stars</span>
                </li>
            </Stats>
            <Info>
                <li>
                    <BsBuilding />
                    <span>{props.userData.company ? props.userData.company : '-'}</span>
                </li>
                <li>
                    <HiOutlineLocationMarker />
                    <span>{props.userData.location ? props.userData.location: '-'}</span>
                </li>
                <li>
                    <HiOutlineMail />
                    <span>{props.userData.email ? props.userData.email : '-'}</span>
                </li>
                <li>
                    <HiOutlineLink />
                    <span>{props.userData.blog ? props.userData.blog : '-'}</span>
                </li>
                <li>
                    <FiTwitter />
                    <span>{props.userData.twitter_username ? '@' + props.userData.twitter_username : '-'}</span>
                </li>            
            </Info>
            <Button onClick={goBack}>Voltar</Button>
        </Container>
    );
}