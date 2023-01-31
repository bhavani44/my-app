import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import FoodHealthScrambleWords from './FoodHealthScrambleWords';


function FoodHealthScrambleItem({ data }) {
    const [textInput, setTextInput] = useState('');
    const [textName, settextName] = useState('');
    const [answer, setAnswer] = useState(null);

    const checkSrambleWord = () => {
        console.log(textInput);
        console.log(textName);
        if ((textInput.length && textName.length) === 0) {
            alert('null')
        }
        else {
            if (textInput === textName) {
                alert('You are correct')
                setAnswer(true)
            }
            else {
                alert('You are wrong')
                setAnswer(false)
            }
        }


    }
    const onInputChange = event => {
        const value = event.target.value.toUpperCase();
        const name = event.target.name;

        setTextInput(value);
        settextName(name);
    }

    return (
        <>
            <Container className='d-flex flex-row justify-content-center'>
                <Row>

                    {

                        (!data) ? "Not Found" : data.map(item => {
                            const { scramble_word, correct_word, sId } = item
                            let indexNo = parseInt(sId)
                            return (

                                <Container key={item.scrambleId} className='d-flex justify-content-center'>
                                    <h3 className="">{scramble_word}</h3>
                                    <input className="user_input" type="text" id={indexNo} name={correct_word} maxLength={item.scramble_word.length} onChange={onInputChange} />
                                    <button onClick={checkSrambleWord}>Check</button>
                                    <FoodHealthScrambleWords checkSrambleWordProp={answer} />
                                </Container>
                            )

                        })

                    }

                </Row>
            </Container>
        </>
    );
}

export default FoodHealthScrambleItem