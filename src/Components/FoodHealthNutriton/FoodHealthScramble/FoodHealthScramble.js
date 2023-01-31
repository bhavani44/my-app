import React from 'react'
import "./foodhealthscramble.css"
import FoodHealthScrambleItem from './FoodHealthScrambleItem'
import ShortNotes from './ShortNotes'

const scrambleWords = [
  {
    sId:(new Date()).getTime,
    scrambleId:1,
    scramble_word:'IPSNCAH',
    correct_word:'SPINACH',
  },
  {
    sId:(new Date()).getTime,
    scrambleId:2,
    scramble_word:'ACBEBAG',
    correct_word:'CABBAGE',
  },
  {
    sId:(new Date()).getTime,
    scrambleId:3,
    scramble_word:'CREI',
    correct_word:'RICE',
  },
  {
    sId:(new Date()).getTime,
    scrambleId:4,
    scramble_word:'TWAEH',
    correct_word:'WHEAT',
    userInput:'',
  },
  {
    sId:(new Date()).getTime,
    scrambleId:5,
    scramble_word:'SFHI',
    correct_word:'FISH',
    userInput:'',
  },
  {
    sId:(new Date()).getTime,
    scrambleId:6,
    scramble_word:'OPPRCNO',
    correct_word:'POPCORN',
    userInput:'',
  },
  {
    sId:(new Date()).getTime,
    scrambleId:7,
    scramble_word:'ZPAIZ',
    correct_word:'PIZZA',
    userInput:'',
  }
]



function FoodHealthScramble() {
  return (
    <>
      <FoodHealthScrambleItem data={scrambleWords}/>
      {/* <ShortNotes/> */}
    </>
  )
}

export default FoodHealthScramble