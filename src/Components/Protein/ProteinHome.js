import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ProteinItem from './ProteinItem';


function ProteinHome() {
    const gameItems = [
        {
            fid: 1,
            fimgUrl: 'https://img.freepik.com/free-vector/documentation-management-colorful-icon-female-cartoon-character-putting-document-big-yellow-folder-files-storage-sorting-organization_335657-846.jpg?w=826&t=st=1666078056~exp=1666078656~hmac=d7b9324e19775a51346aac6a664d71f5f03c0d6a892e0ea41458515b9bd04efd',
            fname: 'Document',
            finstructions: "Scramble Words is a word-making game. The goal is to unscramble the list of letters found at the right of the screen, using your keyboard or mouse to spell out words.",
            component: 'document'
        },
        {
            fid: 2,
            fimgUrl: 'https://img.freepik.com/premium-photo/female-hand-holds-recycled-pen-her-hands-rejoices-crossword-puzzle-top-view-free-space_623493-64.jpg?w=1380',
            fname: 'Crossword',
            finstructions: "Fill-in-the-blank by 1) selecting a clue, 2) thinking up possible answers to the clue, 3) selecting an answer from among the possible ones, and 4) entering the answer in the grid.",
            component: 'proteincrossword'
        },
        {
            fid: 3,
            fimgUrl: 'https://img.freepik.com/premium-vector/business-man-finding-new-ideas-solution-illustration-highlighted-word-solution-mess-crossword-game-entrepreneur-searching-key-solve-problem-challenging-times_135869-385.jpg?w=1380',
            fname: 'Word Search',
            finstructions: "Words are written in straight lines forwards backwards up down and diagonally when you find a word you circle or highlight it. Once you have found all the words you win.",
            component: 'wordsearch'
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
            <Container>
            <Col xs={12} className="food-health-nutrion-heading">
                <h1 className='food-health-nutrion-text'>Choose one of the Games to get started</h1>
            </Col>
            <Col xs={3} className="food-health-nutrion-item-container">
                <ProteinItem data={gameItems} />
            </Col>
            </Container>
            </> 
    )
}

export default ProteinHome

{/* <button onClick={() => { navigate('/crossword') }}>crossWord</button>
<button onClick={() => { navigate('/wordsearch') }}>wordsearch</button>
<button onClick={() => { navigate('/scrumble') }}>scrumble</button> */}