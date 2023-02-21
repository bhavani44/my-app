import React, { useRef } from 'react';
import { useState } from 'react';
import { Table, Button, Form, Modal, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';



function FoodHealthScrambleItem({ scrambleWords }) {
    let navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const [iconModalShow, setIconModalShow] = React.useState(false);
    const inputs = useRef([]);

    const handleCheck = (index, userInput) => {
        const newResults = [...results];
        if (userInput.toUpperCase() === scrambleWords[index].correct_word) {
            newResults[index] = {
                result: 'correct',
                scramble_message: scrambleWords[index].scramble_message,
                scramble_url: scrambleWords[index].scramble_url,
            };
        } else {
            newResults[index] = { result: 'incorrect' };
        }
        setResults(newResults);
    };

    const handleKeyPress = (event, index, userInput) => {
        if (event.key === 'Enter') {
            handleCheck(index, userInput.toUpperCase());
            inputs.current[index + 1].focus();
        }
    };

    const handleSubmit = () => {
        const inputs = Array.from(document.getElementsByTagName("input"));
        const userInputs = inputs.map(input => input.value);
        const isCorrect = results.every(result => result.result === 'correct');
        if (!userInputs.includes("")) {
            if (isCorrect) {
                setModalText('Congratulations, you have successfully completed the game. Click OK to proceed to the next game.');
            } else {
                setModalText('Correct all the words to proceed to the next game.');
            }
            setShowModal(true);
        } else {
            setModalText('Fill in all the words to proceed to the next game.');
            setShowModal(true);
        }
    };

    const handleRest = (e) => {
        e.preventDefault();
        setResults([]);
        const inputs = Array.from(document.getElementsByTagName("input"));
        inputs.forEach(input => input.value = '');
    }
    const handleClose = () => {
        setShowModal(false);
    };
    const handleNext =() =>{
        navigate('/foodhealthcrossword')
    }
    return (
        <Container className='mb-5 mt-5 align-items-center'>
            <Table borderless striped hover className='align-items-center'>
                <thead>
                    {/* <tr>
                        <th>Scrambled Word</th>
                        <th>User Input</th>
                        <th>Result</th>
                    </tr> */}
                </thead>
                <tbody>
                    {scrambleWords.map((word, index) => (
                        <tr key={word.scramble_id}>
                            <td>
                                <Container className='align-items-center'>
                                    <Row className='align-items-center'>
                                        <Col sm={12} className='scramble-word'>{word.scrambled_word}</Col>
                                    </Row>
                                </Container>
                            </td>
                            <td>
                                <Container>
                                    <Row>
                                        <Col sm={8}>
                                            <Form.Control
                                                ref={input => inputs.current[index] = input}
                                                className='input-styling'
                                                type="text"
                                                placeholder='Enter Unscrambled word'
                                                onKeyPress={e => handleKeyPress(e, index, e.target.value)}
                                            />
                                        </Col>
                                        <Col sm={4}>
                                            <Button className="" onClick={() => handleCheck(index, document.getElementsByTagName("input")[index].value)}>
                                                Check
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </td>
                            <td>
                                {results[index] ? (
                                    results[index].result === 'correct' ? (
                                        <Container>
                                            <Row className='align-items-center'>
                                                <Col sm={2} style={{ color: 'green', fontSize: '1.5em', fontWeight: 'bold' }}>Correct</Col>
                                                <Col sm={2}>
                                                    <img src={require(`../../Images/${results[index].scramble_url}`)}
                                                        alt=""
                                                        width="100rem"
                                                        height="65rem"
                                                    />
                                                </Col>
                                                <Col sm={4}>{results[index].scramble_message}</Col>
                                            </Row>
                                        </Container>
                                    ) : (
                                        <span style={{ color: 'red', fontSize: '1.5em', fontWeight: 'bold' }}>Incorrect</span>)
                                ) : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='text-center'>
                <Button onClick={handleSubmit} className="submit-button" >Submit</Button>
                <Button variant="secondary" onClick={handleRest} className="submit-button">Reset</Button>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                    </Button>
                    <Button variant="warning" onClick={handleNext}>
                        Proceed to next
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default FoodHealthScrambleItem;




