import React from "react";
import { Component } from "react";
import Crossword from "../../myFiles/react-crossword";
import "./crossword.css";
const data = [
  {
  across: {
    1: {
      clue: "Sugar is one type of ",
      answer: "CARBOHYDRATE",
      row: 4,
      col: 9
    },
    2: {
      clue: "______ is a condition which results when insufficient food is eaten over a prolonged time.",
      answer: "UNDERNUTRITION",
      row: 16,
      col: 2
    },
    3: {
      clue: "Essential for normal vision.",
      answer: "VITAMINA",
      row: 8,
      col: 2
    },
    4: {
      clue: "These types of food help in body building & energy production.",
      answer: "PROXIMATEFOOD",
      row: 12,
      col: 1
    },
    5: {
      clue: "Helps in body building",
      answer: "PROTEIN",
      row: 3,
      col: 1
      
    },
  },
  down: {
    6: {
      clue: "This is also called fat/oil",
      answer: "LIPID",
      row: 8,
      col: 13
    },
    7: {
      clue: "They help to  build healthy bodies and make people more able to resist or fight diseases.",
      answer: "PROTECTIVEFOOD",
      row: 1,
      col: 3
    },
    8: {
      clue: "______ is the condition results when excess food is eaten for a long period",
      answer: "OVERNUTRITION",
      row: 1,
      col: 17
    },
    9: {
      clue: "This is the science of food & its relationship to health.",
      answer: "NUTRITION",
      row: 1,
      col: 11
    },
    10: {
      clue: "It is an inorganic substance needed by the human body for good health",
      answer: "MINERALS",
      row: 12,
      col: 6
    }
    // 11: {
    //   clue: "._____ is the material that after ingestion helps in growth, nourishment, regeneration of cells & energy production for our day-to-day activity",
    //   answer: "FOOD",
    //   row: 11,
    //   col: 12
    // }
  }
},
{
  across: {
    1: {
      clue: "Sugar is one type of ",
      answer: "CARBOHYDRATE",
      row: 4,
      col: 8
    },
    2: {
      clue: "______ is a condition which results when insufficient food is eaten over a prolonged time.",
      answer: "UNDERNUTRITION",
      row: 6,
      col: 0
    }
  },
  down: {
    7: {
      clue: "They help to  build healthy bodies and make people more able to resist or fight diseases.",
      answer: "PROTECTIVEFOOD",
      row: 2,
      col: 3
    },
    8: {
      clue: "______ is the condition results when excess food is eaten for a long period",
      answer: "OVERNUTRITION",
      row: 2,
      col: 19
    },
    9: {
      clue: "Helps in body building",
      answer: "PROTEIN",
      row: 3,
      col: 10
    }
  }
},
{
  across: {
    1: {
      clue: "Sugar is one type of ",
      answer: "CARBOHYDRATE",
      row: 4,
      col: 8
    },
    2: {
      clue: "______ is a condition which results when insufficient food is eaten over a prolonged time.",
      answer: "UNDERNUTRITION",
      row: 6,
      col: 0
    }
  },
  down: {
    7: {
      clue: "They help to  build healthy bodies and make people more able to resist or fight diseases.",
      answer: "PROTECTIVEFOOD",
      row: 2,
      col: 3
    },
    8: {
      clue: "______ is the condition results when excess food is eaten for a long period",
      answer: "OVERNUTRITION",
      row: 2,
      col: 19
    }
  }
},
{
  across: {
    1: {
      clue: "Sugar is one type of ",
      answer: "CARBOHYDRATE",
      row: 4,
      col: 8
    },
    2: {
      clue: "______ is a condition which results when insufficient food is eaten over a prolonged time.",
      answer: "UNDERNUTRITION",
      row: 6,
      col: 0
    }
  },
  down: {
    7: {
      clue: "They help to  build healthy bodies and make people more able to resist or fight diseases.",
      answer: "PROTECTIVEFOOD",
      row: 2,
      col: 3
    },
    8: {
      clue: "______ is the condition results when excess food is eaten for a long period",
      answer: "OVERNUTRITION",
      row: 2,
      col: 19
    },
    9: {
      clue: "Helps in body building",
      answer: "PROTEIN",
      row: 3,
      col: 10
    },
    10: {
      clue: "This is the science of food & its relationship to health.",
      answer: "NUTRITION",
      row: 9,
      col: 7
    },
  }
},
{
  across: {
    1: {
      clue: "Sugar is one type of ",
      answer: "CARBOHYDRATE",
      row: 4,
      col: 8
    },
    2: {
      clue: "______ is a condition which results when insufficient food is eaten over a prolonged time.",
      answer: "UNDERNUTRITION",
      row: 6,
      col: 0
    }
  },
  down: {
    7: {
      clue: "They help to  build healthy bodies and make people more able to resist or fight diseases.",
      answer: "PROTECTIVEFOOD",
      row: 2,
      col: 3
    },
    8: {
      clue: "______ is the condition results when excess food is eaten for a long period",
      answer: "OVERNUTRITION",
      row: 2,
      col: 19
    },
    9: {
      clue: "Helps in body building",
      answer: "PROTEIN",
      row: 3,
      col: 10
    }
  }
},
{
  across: {
    1: {
      clue: "Sugar is one type of ",
      answer: "CARBOHYDRATE",
      row: 4,
      col: 8
    },
    2: {
      clue: "______ is a condition which results when insufficient food is eaten over a prolonged time.",
      answer: "UNDERNUTRITION",
      row: 6,
      col: 0
    }
  },
  down: {
    7: {
      clue: "They help to  build healthy bodies and make people more able to resist or fight diseases.",
      answer: "PROTECTIVEFOOD",
      row: 2,
      col: 3
    },
    8: {
      clue: "______ is the condition results when excess food is eaten for a long period",
      answer: "OVERNUTRITION",
      row: 2,
      col: 19
    },
    9: {
      clue: "Helps in body building",
      answer: "PROTEIN",
      row: 3,
      col: 10
    },
    10: {
      clue: "This is the science of food & its relationship to health.",
      answer: "NUTRITION",
      row: 9,
      col: 7
    },
  }
},
];


// class crossWordComponent extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Crossword data={data} />
//         </header>{" "}
//       </div>
//     );
//   }
// }

// export default crossWordComponent;

export function FoodHealthCrossWordComponent() {
  return (
    <div className="crossword-container">
        <header className="crossword-header">
          <Crossword data={data[0]} />
         </header>{" "}
    </div>
  )
}
export function CarbohydrateCrossWordComponent() {
  return (
    <div className="crossword-container">
        <header className="crossword-header">
          <Crossword data={data[1]} />
         </header>{" "}
    </div>
  )
}
export function FatCrossWordComponent() {
  return (
    <div className="crossword-container">
        <header className="crossword-header">
          <Crossword data={data[2]} />
         </header>{" "}
    </div>
  )
}
export function ProteinCrossWordComponent() {
  return (
    <div className="crossword-container">
        <header className="crossword-header">
          <Crossword data={data[3]} />
         </header>{" "}
    </div>
  )
}
export function VitaminCrossWordComponent() {
  return (
    <div className="crossword-container">
        <header className="crossword-header">
          <Crossword data={data[4]} />
         </header>{" "}
    </div>
  )
}
export function MineralsCrossWordComponent() {
  return (
    <div className="crossword-container">
        <header className="crossword-header">
          <Crossword data={data[5]} />
         </header>{" "}
    </div>
  )
}

