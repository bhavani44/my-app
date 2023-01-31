import React from 'react'
import FoodHealthNutritionItem from './FoodNutritionItem'
import './foodHealthNutrition.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom'


function FoodHealthHome() {
    let navigate = useNavigate();
    const gameItems = [
        {
            fid: 1,
            fname: 'food and nutrition',
            finstructions: "Fill-in-the-blank by 1) selecting a clue, 2) thinking up possible answers to the clue, 3) selecting an answer from among the possible ones, and 4) entering the answer in the grid."
        },

        {
            fid: 2,
            fimgUrl: 'https://img.freepik.com/premium-photo/female-hand-holds-recycled-pen-her-hands-rejoices-crossword-puzzle-top-view-free-space_623493-64.jpg?w=1380',
            fname: 'Crossword',
            finstructions: "Fill-in-the-blank by 1) selecting a clue, 2) thinking up possible answers to the clue, 3) selecting an answer from among the possible ones, and 4) entering the answer in the grid.",
            component: 'foodhealthcrossword'
        },
        {
            fid: 3,
            fimgUrl: 'https://img.freepik.com/premium-vector/business-man-finding-new-ideas-solution-illustration-highlighted-word-solution-mess-crossword-game-entrepreneur-searching-key-solve-problem-challenging-times_135869-385.jpg?w=1380',
            fname: 'Word Search',
            finstructions: "Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.",
            component: 'foodhealthwordsearch'
        },
        {
            fid: 4,
            fimgUrl: 'https://img.freepik.com/free-vector/spelling-word-scramble-game-with-word-papaya_1308-40253.jpg?w=1060&t=st=1665996848~exp=1665997448~hmac=14fb356f9703722a57bb947f7fde90d6d402c940bb3444b139968ceab6e0853a',
            fname: 'Scramble',
            finstructions: "Scramble Words is a word-making game. The goal is to unscramble the list of letters found at the right of the screen, using your keyboard or mouse to spell out words.",
            component: 'scramble'
        }


    ]

    return (
        <> 
            <Container  className='mt-5'>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <div className='mt-4 p-5 rounded bg-warning text-white' style={{minHeight:"35vh"}}>
                            <Container>
                                <h1 className='text-center'>Nutrition Information</h1>
                                <p className='text-center'></p>
                            </Container>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <img style={{minHeight:"35vh"}} src="https://img.freepik.com/premium-photo/crossword-puzzle-pencil_488220-880.jpg?" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <div className='mt-4 p-4 rounded bg-info text-white' style={{minHeight:"35vh"}}>
                            <h1>Crossword</h1>
                            <p>Fill-in-the-blank by selecting a clue, thinking up possible answers to the clue, selecting an answer from among the possible ones, and entering the answer in the grid.</p>
                            <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthcrossword')}}>Play</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='mb-5'>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                    <div className='mt-4 p-4 rounded bg-primary text-white' style={{minHeight:"35vh"}}>
                        <h1>Wordsearch</h1>
                        <p>Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.</p>
                        <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthwordsearch')}}>Play</button>
                    </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <img style={{minHeight:"35vh"}} src="https://img.freepik.com/premium-vector/cartoon-fruits-wizards-sorcerer-characters-word-search-puzzle-game-quiz-grid-worksheet-vector-kids-crossword-with-pineapple-mango-lemon-plum-orange-banana-with-kiwi-quince-watermelon_8071-10365.jpg?" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                    <div className='mt-4 p-4 rounded bg-success text-white' style={{minHeight:"35vh"}}>
                        <h1>Scramble</h1>
                        <p>Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.</p>
                        <button className="food-health-nutrion-item-button" onClick={() => { navigate('/foodhealthscramble')}}>Play</button>
                    </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <img style={{minHeight:"35vh"}} src="https://img.freepik.com/free-vector/spelling-word-scramble-game-with-word-papaya_1308-40253.jpg?&t=st=1665996848~exp=1665997448~hmac=14fb356f9703722a57bb947f7fde90d6d402c940bb3444b139968ceab6e0853a" alt="crossword" class="img-thumbnail img-fluid mt-4" />
                    </Col>
                </Row>
            </Container>   
        </>
    )
}

export default FoodHealthHome

{/* <button onClick={() => { navigate('/crossword') }}>crossWord</button>
<button onClick={() => { navigate('/wordsearch') }}>wordsearch</button>
<button onClick={() => { navigate('/scrumble') }}>scrumble</button> */}