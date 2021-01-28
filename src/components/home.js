import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {

    const history = useHistory();

    const routeToPizza = () => {
        history.push('/pizza');
    };

    return (
        <Wrapper>
            <PizzaImg src="https://www.pngarts.com/files/3/Pizza-PNG-Download-Image.png" alt='pizza'/>
            <Button onClick={routeToPizza}>Pizza?</Button>
        </Wrapper>
    );
}

const PizzaImg = styled.img`
    width: 50%;
    max-height: 300px;
    object-fit: cover;
    margin: 10px 0 20px 0;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Button = styled.button`
    font-size: 2rem;
    letter-spacing: 2px;
    border-radius: 5px;
    border-style: none;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    &:hover {
        cursor: pointer;
    }
`;