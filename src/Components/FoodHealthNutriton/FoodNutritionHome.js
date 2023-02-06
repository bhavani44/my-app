import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom'


function FoodHealthHome() {
    let navigate = useNavigate();

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <div className='mt-4 p-5 rounded bg-warning text-white' style={{ minHeight: "35vh" }}>
                            <Container>
                                <h1 className='text-center'>Nutrition Information</h1>
                                <p className='text-center'></p>
                            </Container>
                        </div>
                    </Col>
                    {/* <Col xs={12} sm={12} md={6} lg={3} xl={3} style={{ minHeight: "35vh" }} >
                        <img style={{ minHeight: "35vh" }} src="https://img.freepik.com/premium-photo/crossword-puzzle-pencil_488220-880.jpg?" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                    </Col>
                    <Col style={{ minHeight: "35vh" }} xs={12} sm={12} md={6} lg={3} xl={3}>
                        <div className='mt-4 p-4 rounded bg-info text-white' style={{ minHeight: "35vh" }}>
                            <h1>Crossword</h1>
                            <p>Fill-in-the-blank by selecting a clue, thinking up possible answers to the clue, selecting an answer from among the possible ones, and entering the answer in the grid.</p>
                            <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthcrossword') }}>Play</button>
                        </div>
                    </Col> */}
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center">
                        <div style={{ minHeight: "35vh", width: "50%" }} >
                            <img style={{ minHeight: "35vh" }} src="https://img.freepik.com/premium-photo/crossword-puzzle-pencil_488220-880.jpg?" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                        </div>
                        <div style={{ minHeight: "35vh", width: "50%" }}>
                            <div className='mt-4 p-4 rounded bg-info text-white' style={{ minHeight: "35vh" }}>
                                <h1>Crossword</h1>
                                <p>Fill-in-the-blank by selecting a clue, thinking up possible answers to the clue, selecting an answer from among the possible ones, and entering the answer in the grid.</p>
                                <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthcrossword') }}>Play</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='mb-5'>
                <Row>
                    {/* <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <div className='mt-4 p-4 rounded bg-success text-white' style={{ minHeight: "35vh" }}>
                            <h1>Wordsearch</h1>
                            <p>Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.</p>
                            <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthwordsearch') }}>Play</button>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <img style={{ minHeight: "35vh" }} src="https://img.freepik.com/premium-vector/cartoon-fruits-wizards-sorcerer-characters-word-search-puzzle-game-quiz-grid-worksheet-vector-kids-crossword-with-pineapple-mango-lemon-plum-orange-banana-with-kiwi-quince-watermelon_8071-10365.jpg?" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <div className='mt-4 p-4 rounded bg-secondary text-white' style={{ minHeight: "35vh" }}>
                            <h1>Scramble</h1>
                            <p>Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.</p>
                            <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthscramble') }}>Play</button>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <img style={{ minHeight: "35vh" }} src="https://img.freepik.com/free-vector/spelling-word-scramble-game-with-word-papaya_1308-40253.jpg?&t=st=1665996848~exp=1665997448~hmac=14fb356f9703722a57bb947f7fde90d6d402c940bb3444b139968ceab6e0853a" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                    </Col> */}
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center">
                        <div style={{ minHeight: "35vh", width: "50%" }}>
                            <div className='mt-4 p-4 rounded bg-primary text-white' style={{ minHeight: "35vh" }}>
                                <h1>Wordsearch</h1>
                                <p>Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.</p>
                                <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthwordsearch') }}>Play</button>
                            </div>
                        </div>
                        <div style={{ minHeight: "35vh", width: "50%" }} >
                            <img style={{ minHeight: "35vh" }} src="https://img.freepik.com/premium-vector/cartoon-fruits-wizards-sorcerer-characters-word-search-puzzle-game-quiz-grid-worksheet-vector-kids-crossword-with-pineapple-mango-lemon-plum-orange-banana-with-kiwi-quince-watermelon_8071-10365.jpg?" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center">
                        <div style={{ minHeight: "35vh", width: "50%" }}>
                            <div className='mt-4 p-4 rounded bg-success text-white' style={{ minHeight: "35vh" }}>
                                <h1>Scramble</h1>
                                <p>Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.</p>
                                <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthscramble') }}>Play</button>
                            </div>
                        </div>
                        <div style={{ minHeight: "35vh", width: "50%" }} >
                            <img style={{ minHeight: "35vh" }} src="https://img.freepik.com/free-vector/spelling-word-scramble-game-with-word-papaya_1308-40253.jpg?&t=st=1665996848~exp=1665997448~hmac=14fb356f9703722a57bb947f7fde90d6d402c940bb3444b139968ceab6e0853a" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FoodHealthHome;