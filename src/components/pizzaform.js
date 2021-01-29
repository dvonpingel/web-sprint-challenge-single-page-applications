import React from 'react';
import styled from 'styled-components';

export default function Form(props) {
    const { values, disabled, submit, change, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }


    return (
        <BigForm onSubmit={onSubmit}>
            <MainDiv>
                <div>
                    <Header>Build Your Own Pizza!</Header>
                    <PizzaImg src='https://www.pngarts.com/files/3/Pizza-PNG-Download-Image.png' alt='pizza'/>
                </div>

                <FormDiv>
                    <BuildPizzaDiv>
                        <h2>Build Your Own Pizza</h2>
                    </BuildPizzaDiv>

                    {/* NAME INPUT */}
                    {/* NAME INPUT */}
                    <Titles>
                        <h2>Enter Your Name</h2>
                        <div>{errors.name}</div>
                    </Titles>
                    <TypeInput>
                        <input
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={onChange}
                            placeholder='Name here...'
                        ></input>
                    </TypeInput>

                    {/* SIZE INPUT */}
                    {/* SIZE INPUT */}
                    <Titles>
                        <h2>Choice of Size</h2>
                        <div>{errors.size}</div>
                    </Titles>
                    <Size>
                        <select
                            onChange={onChange}
                            value={values.size}
                            name='size'
                        >
                            <option value=''>- Select an option -</option>
                            <option value='8"'>8" Pizza</option>
                            <option value='10"'>10" Pizza</option>
                            <option value='12"'>12" Pizza</option>
                        </select>
                    </Size>

                    {/* TOPPINGS CHECKBOXES */}
                    {/* TOPPINGS CHECKBOXES */}
                    <Titles>
                        <h2>Add Toppings</h2>
                    </Titles>
                    <Toppings>
                        <Option>Pepperoni
                            <input
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={onChange}
                            ></input>
                        </Option>
                        <Option>Bacon
                            <input
                                type='checkbox'
                                name='bacon'
                                checked={values.bacon}
                                onChange={onChange}
                            ></input>
                        </Option>
                        <Option>Anchovies
                            <input
                                type='checkbox'
                                name='anchovies'
                                checked={values.anchovies}
                                onChange={onChange}
                            ></input>
                        </Option>
                        <Option>Pineapple
                            <input
                                type='checkbox'
                                name='pineapple'
                                checked={values.pineapple}
                                onChange={onChange}
                            ></input>
                        </Option>
                        <Option>Chicken
                            <input
                                type='checkbox'
                                name='chicken'
                                checked={values.chicken}
                                onChange={onChange}
                            ></input>
                        </Option>
                        <Option>Sausage
                            <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}
                            ></input>
                        </Option>
                    </Toppings>

                    {/* SPECIAL INSTRUCTIONS TEXT FIELD */}
                    {/* SPECIAL INSTRUCTIONS TEXT FIELD */}
                    <Titles>
                        <h2>Special Instructions</h2>
                    </Titles>
                    <TypeInput>
                        <Instruction
                            type='text'
                            name='instructions'
                            value={values.instructions}
                            onChange={onChange}
                            placeholder="Anything else you'd like to add?"
                        ></Instruction>
                    </TypeInput>
                    <ButtonDiv>
                        <Button id='submitBtn' disabled={disabled}>Add to Order</Button>
                    </ButtonDiv>
                </FormDiv>
            </MainDiv>
        </BigForm>
    );
}

// STYLES //
// STYLES //
// STYLES //

const BigForm = styled.form`
    display: flex;
    justify-content: center;
`;

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 60%;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border: 1px solid rgb(210, 210, 210);
    padding: 10px;
`;

const Header = styled.h2`
    text-align: center;
`;

const PizzaImg = styled.img`
    width: 100%;
`;

const FormDiv = styled.div`

`;

const BuildPizzaDiv = styled.div`
    padding: 1px 1px 10px 20px;
    height: 50px;
    font-style: italic;
`;

const Titles = styled.div`
    background-color: #f6eabb;
    padding: 1px 1px 1px 20px;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: .6rem;
    font-style: italic;
`;

const TypeInput = styled.div`
    padding: 10px 20px;
`;

const Size = styled.div`
    padding: 10px 20px;
`;

const Toppings = styled.div`
    padding: 10px 20px;
`;

const Option = styled.div`
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
`;

const Instruction = styled.textarea`
    width: 100%;
    height: 50px;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    height: 50px;
    width: 60%;
    text-align: left;
    padding: 0 20px;
    border-style: none;
    background-color: #003366;
    border-radius: 5px;
    color: white;
    font-size: 1.4rem;
`;