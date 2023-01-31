import React from 'react'

function FoodHealthScrambleWords({checkSrambleWordProp}) {
    if(checkSrambleWordProp ===null){
        return null;
    }
    else if(checkSrambleWordProp){
        return (
            <div>Correct Ans</div>
          )
    }
    else{
        return (
            <div>Wrong Ans</div>
          )
    }
    
}

export default FoodHealthScrambleWords