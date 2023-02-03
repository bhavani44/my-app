import React, { useState } from 'react'
import FatScrambleItem from './FatScrambleItem'
import "./fatscramble.css"
import ShortNotes from './ShortNotes'

const scrambledWords = [
  {
    sId:(new Date()).getTime,
    scramble_id:1,
    scrambled_word:'IPSNCAH',
    correct_word:'SPINACH',
    scramble_message:"spinach text will be added here.",
    scramble_url:"spinach url"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:2,
    scrambled_word:'ACBEBAG',
    correct_word:'CABBAGE',
    scramble_message:"cabbage text will be added here.",
    scramble_url:"cabbage url"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:3,
    scrambled_word:'CREI',
    correct_word:'RICE',
    scramble_message:"rice text will be added here.",
    scramble_url:"rice url"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:4,
    scrambled_word:'TWAEH',
    correct_word:'WHEAT',
    scramble_message:"wheat text will be added here.",
    scramble_url:"wheat url"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:5,
    scrambled_word:'SFHI',
    correct_word:'FISH',
    scramble_message:"fish text will be added here.",
    scramble_url:"fish url"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:6,
    scrambled_word:'OPPRCNO',
    correct_word:'POPCORN',
    scramble_message:"popcorn text will be added here.",
    scramble_url:"popcorn url"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:7,
    scrambled_word:'ZPAIZ',
    correct_word:'PIZZA',
    scramble_message:"pizza text will be added here.",
    scramble_url:"pizza url"
  }
]


function FatScramble() {
  
  return (
    <>
      <FatScrambleItem scrambleWords={scrambledWords}/>
      {/* <ShortNotes/> */}
    </>
  )
}

export default FatScramble