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
            <Button onClick={routeToPizza}>Pizza?</Button>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('https://www.pizzainn.com/wp-content/uploads/2019/12/Buffet-Close-pizzas-APPROVED.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 400px;
    margin: 25px 0 0 0;
    box-shadow: 0px 5px 6px -2px rgb(128, 127, 127);
`;
const Button = styled.button`
    font-size: 5rem;
    letter-spacing: 2px;
    border-radius: 5px;
    border-style: none;
    border: 2px solid rgb(230, 230, 230);
    box-shadow: 0px 1px 25px -2px rgb(200, 200, 200);
    background: rgb(255, 255, 255, .8);
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: .2s;
    }
    transition: .2s;
`;