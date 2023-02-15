import React, { useState } from 'react'
import "./foodhealthscramble.css"
import FoodHealthScrambleItem from './FoodHealthScrambleItem'
import ShortNotes from './ShortNotes'

const scrambledWords = [
  {
    sId:(new Date()).getTime,
    scramble_id:1,
    scrambled_word:'IPSNCAH',
    correct_word:'SPINACH',
    scramble_message:"A dark green leafy vegetabel rich in vitamins like Folate, vit-C, vit-K, Carotenes, Calcium and Dietary Fibre, also known for its Antioxidant and anti cancer properties.",
    scramble_url:'spinach.png'
  },
  {
    sId:(new Date()).getTime,
    scramble_id:2,
    scrambled_word:'ACBEBAG',
    correct_word:'CABBAGE',
    scramble_message:"A cruciferous vegetable rich in vit-C, vit- K and beneficial phytochemicals like glucosinolates, tocopherol, leads to a lower cancer risk and a stronger immunity.",
    scramble_url:"cabbage.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:3,
    scrambled_word:'CREI',
    correct_word:'RICE',
    scramble_message:"A staple cereal providing major source of carbohydrates in the diet, however white rice lacks essential vitamins, minerals and dietary fibre due to the milling process.",
    scramble_url:"rice.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:4,
    scrambled_word:'TWAEH',
    correct_word:'WHEAT',
    scramble_message:"A staple cereal used mostly for making chapatis, wholewheat is a source of major carbohydrates, protein as well as essential health components like b complex vitamins and dietary fibre.",
    scramble_url:"wheat.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:5,
    scrambled_word:'SFHI',
    correct_word:'FISH',
    scramble_message:"Excellent source of high-quality protein, Omega 3 fats and vitamins like B12.",
    scramble_url:"fish.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:6,
    scrambled_word:'OPPRCNO',
    correct_word:'POPCORN',
    scramble_message:"A type of maize which is air-popped and is a great example of healthy snack provided it is not loaded with butter and excess calories like you get at the cinemas.",
    scramble_url:"popcorn.png"
  },
  {
    sId:(new Date()).getTime,
    scramble_id:7,
    scrambled_word:'ZPAIZ',
    correct_word:'PIZZA',
    scramble_message:"A junk food of Italian origin, contains refined flour and high amounts of saturated fat and sodium-linked with obesity, diabetes and cardiovascular problems.",
    scramble_url:"pizza.png"
  }
]


function FoodHealthScramble() {
  
  return (
    <>
      <FoodHealthScrambleItem scrambleWords={scrambledWords}/>
      {/* <ShortNotes/> */}
    </>
  )
}

export default FoodHealthScramble