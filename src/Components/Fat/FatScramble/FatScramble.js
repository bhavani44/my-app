import React, { useState } from 'react'
import FatScrambleItem from './FatScrambleItem'
import "./fatscramble.css"

const scrambledWords = [
  {
    sId:(new Date()).getTime,
    scramble_id:1,
    scrambled_word:'OCHTOCLAE',
    correct_word:'CHOCOLATE',
    scramble_message:"chocolate text will be added here.",
    scramble_url:"chocolate-bar.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:2,
    scrambled_word:'PVAASNATI',
    correct_word:'VANASPATI',
    scramble_message:"vanaspati text will be added here.",
    scramble_url:"frying-pan.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:3,
    scrambled_word:'UGROUNDNT',
    correct_word:'GROUNDNUT',
    scramble_message:"groundnut text will be added here.",
    scramble_url:""
  },
  {
    sId:(new Date()).getTime,
    scramble_id:4,
    scrambled_word:'SULNFOE-WROIL',
    correct_word:'SUNFLOWER-OIL',
    scramble_message:"sunflower-oil text will be added here.",
    scramble_url:"sunflower-oil url"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:5,
    scrambled_word:'ARSTMUD',
    correct_word:'MUSTARD',
    scramble_message:"mustard text will be added here.",
    scramble_url:"mustard.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:6,
    scrambled_word:'TBUETR',
    correct_word:'BUTTER',
    scramble_message:"butter text will be added here.",
    scramble_url:"butter.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:7,
    scrambled_word:'YTRILCGEDRIE',
    correct_word:'TRIGLYCERIDE',
    scramble_message:"triglyceride text will be added here.",
    scramble_url:"triglycerides.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:8,
    scrambled_word:'GEHE',
    correct_word:'GHEE',
    scramble_message:"ghee text will be added here.",
    scramble_url:"ghee.png"
  }
]


function FatScramble() {
  
  return (
    <>
      <FatScrambleItem scrambleWords={scrambledWords}/>
    </>
  )
}

export default FatScramble