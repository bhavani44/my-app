import React, { useState } from 'react'
import "./carbohydratescramble.css"
import CarbohydrateScrambleItem from './CarbohydrateScrambleItem'

const scrambledWords = [
  {
    sId:(new Date()).getTime,
    scramble_id:1,
    scrambled_word:'CUASEWHNT',
    correct_word:'CASHEWNUT',
    scramble_message:"cashewnut text will be added here DFJDKFL DKFHDKLFJSDFKLDSJ F DSFSDJLJDF DFJDFLSKDJF.",
    scramble_url:"cashew.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:2,
    scrambled_word:'GJAYGER',
    correct_word:'JAGGERY',
    scramble_message:"jaggery text will be added here DFJDKFL DKFHDKLFJSDFKLDSJ F DSFSDJLJDF DFJDFLSKDJF..",
    scramble_url:"jaggery.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:3,
    scrambled_word:'OFRLU',
    correct_word:'FLOUR',
    scramble_message:"flour text will be added here DFJDKFL DKFHDKLFJSDFKLDSJ F DSFSDJLJDF DFJDFLSKDJF..",
    scramble_url:"flour.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:4,
    scrambled_word:'ASRGU',
    correct_word:'SUGAR',
    scramble_message:"sugar text will be added here DFJDKFL DKFHDKLFJSDFKLDSJ F DSFSDJLJDF DFJDFLSKDJF..",
    scramble_url:"sugar.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:5,
    scrambled_word:'NCEDISA',
    correct_word:'CANDIES',
    scramble_message:"candies text will be added here DFJDKFL DKFHDKLFJSDFKLDSJ F DSFSDJLJDF DFJDFLSKDJF..",
    scramble_url:"sweets.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:6,
    scrambled_word:'OPTOAT',
    correct_word:'POTATO',
    scramble_message:"potato text will be added here DFJDKFL DKFHDKLFJSDFKLDSJ F DSFSDJLJDF DFJDFLSKDJF..",
    scramble_url:"potato.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:7,
    scrambled_word:'UBSITCI',
    correct_word:'BISCUIT',
    scramble_message:"biscuit text will be added here DFJDKFL DKFHDKLFJSDFKLDSJ F DSFSDJLJDF DFJDFLSKDJF..",
    scramble_url:"biscuit.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:8,
    scrambled_word:'KMLI',
    correct_word:'MILK',
    scramble_message:"milk text will be added here DFJDKFL DKFHDKLFJSDFKLDSJ F DSFSDJLJDF DFJDFLSKDJF..",
    scramble_url:"milk.png"
  }
]


function CarbohydrateScramble() {
  
  return (
    <>
      <CarbohydrateScrambleItem scrambleWords={scrambledWords}/>
    </>
  )
}

export default CarbohydrateScramble