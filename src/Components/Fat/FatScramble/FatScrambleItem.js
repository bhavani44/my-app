import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Table, Button, Form, Modal, Container, Row, Col } from "react-bootstrap";



function FatScrambleItem({ scrambleWords }) {
    const [results, setResults] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const inputs = useRef([]);

    const handleCheck = (index, userInput) => {
        const newResults = [...results];
        if (userInput.toUpperCase() === scrambleWords[index].correct_word) {
            newResults[index] = {
                result: 'correct',
                scramble_message: scrambleWords[index].scramble_message,
                scramble_icon: scrambleWords[index].scramble_icon,
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
    return (
        <Container className='div-center'>
            <Table borderless striped hover className='table-center'>
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
                            <td className='scramble-word'>{word.scrambled_word}</td>
                            <td>
                                <Row>
                                    <Col md={8}>
                                        <Form.Control
                                        ref={input => inputs.current[index] = input}
                                            className='input-styling'
                                            type="text"
                                            placeholder='Enter Unscrambled word'
                                            onKeyPress={e => handleKeyPress(e, index, e.target.value)}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Button onClick={() => handleCheck(index, document.getElementsByTagName("input")[index].value)}>
                                            Check
                                        </Button>
                                    </Col>
                                </Row>
                            </td>
                            <td>
                                {results[index] ? (
                                    results[index].result === 'correct' ? (
                                        <>
                                            <span style={{ color: 'green', fontSize:'1.5em', fontWeight:'bold' }}>Correct</span>
                                            <br />
                                            <span>{results[index].scramble_message}</span>
                                            <br />
                                            <img src={results[index].scramble_icon} alt={results[index].scramble_message} />
                                        </>
                                    ) : (
                                        <span style={{ color: 'red', fontSize:'1.5em', fontWeight:'bold' }}>Incorrect</span>)
                                ) : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
            <Button onClick={handleSubmit} className="submit-button">Submit</Button>
            <Button variant="secondary" onClick={handleRest} className="rest-button">Reset</Button>
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
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default FatScrambleItem;




