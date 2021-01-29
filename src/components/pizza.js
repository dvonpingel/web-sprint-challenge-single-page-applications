import React from 'react';
import styled from 'styled-components';

export default function Pizza(props) {
    const { details } = props;

    return (
        <MainDiv>
            <h2>{details.name}</h2>
            <p>{details.size} pizza ordered!</p>
            <div>Toppings:
                <ul>
                    {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
                </ul>
            </div>
            <p>{details.instructions === '' ? '' : 'Special Instructions: '}{details.instructions}</p>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border: 1px solid rgb(210, 210, 210);
    padding: 10px;
    width: 60%;
    margin: 20px auto;
`;