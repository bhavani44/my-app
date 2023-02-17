import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap/esm';
import { Button, Modal } from 'bootstrap';


function FatHome() {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        
        <>
        <Container className='mt-4 mb-4'>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className='mt-4 p-5 rounded bg-warning text-white' style={{ height: "35vh" }}>
                        <h1 style={{ fontSize: "2rem" }} className='text-center'>Carbohydrate</h1>
                        <p style={{ fontSize: "1rem" }} className='text-center'>
                            These are one of the 3 main nutrients found in all foods and beverages. These are organic compounds containing carbon, hydrogen and oxygen.
                            Carbohydrates can be classified into simple sugars (monosacchaides and disaccharides) and complex carbohydrates (polysaccharides like starch, and dietary fiber)
                            Carbohydrates can be classified into simple sugars (monosacchaides and disaccharides) and complex carbohydrates (polysaccharides like starch, and dietary fiber)
                        </p>
                        <div className='text-center'>
                            <Button variant="link" onClick={handleShow}>
                                Know More
                            </Button>
                        </div>
                        <Modal aria-labelledby="contained-modal-title-vcenter"
                            centered show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Carbohydrate</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Modal content goes here. You can add any information you want to display.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Got It
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                    <img style={{ minHeight: "35vh" }} src="https://img.freepik.com/premium-photo/crossword-puzzle-pencil_488220-880.jpg?" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                </Col>
                <Col style={{ height: "35vh" }} xs={12} sm={12} md={6} lg={3} xl={3}>
                    <div className='mt-4 p-4 rounded bg-info text-white' style={{ height: "35vh" }}>
                        <h1 style={{ fontSize: "2rem" }}>Crossword</h1>
                        <p style={{ fontSize: "1rem" }}>Fill-in-the-blank by selecting a clue, thinking up possible answers to the clue, selecting an answer from among the possible ones, and entering the answer in the grid.</p>
                        <Button className="food-health-nutrion-item-button d-flex d-sm-inline d-md-inline d-lg-inline d-xl-inline" onClick={() => { navigate('/carbohydratecrossword') }}>Play</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className='mb-5'>
            <Row>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                    <div className='mt-4 p-4 rounded bg-success text-white' style={{ height: "35vh" }}>
                        <h1 style={{ fontSize: "2rem" }}>Wordsearch</h1>
                        <p style={{ fontSize: "1rem" }}>Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.</p>
                        <Button className="food-health-nutrion-item-button d-flex d-sm-inline d-md-inline d-lg-inline d-xl-inline" onClick={() => { navigate('/foodhealthwordsearch') }}>Play</Button>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                    <img style={{ height: "35vh" }} src="https://img.freepik.com/premium-vector/cartoon-fruits-wizards-sorcerer-characters-word-search-puzzle-game-quiz-grid-worksheet-vector-kids-crossword-with-pineapple-mango-lemon-plum-orange-banana-with-kiwi-quince-watermelon_8071-10365.jpg?" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                    <div className='mt-4 p-4 rounded bg-secondary text-white' style={{ height: "35vh" }}>
                        <h1 style={{ fontSize: "2rem" }}>Scramble</h1>
                        <p style={{ fontSize: "1rem" }}>Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.</p>
                        <Button className="food-health-nutrion-item-button d-flex d-sm-inline d-md-inline d-lg-inline d-xl-inline" onClick={() => { navigate('/carbohydratescramble') }}>Play</Button>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                    <img style={{ height: "35vh" }} src="https://img.freepik.com/free-vector/spelling-word-scramble-game-with-word-papaya_1308-40253.jpg?&t=st=1665996848~exp=1665997448~hmac=14fb356f9703722a57bb947f7fde90d6d402c940bb3444b139968ceab6e0853a" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                </Col>
            </Row>
        </Container>
    </>
        
    )
}

export default FatHome

