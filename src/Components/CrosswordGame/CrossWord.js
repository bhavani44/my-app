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
      clue: "Complex carbohydrate composed of numerous monisacchrides units.",
      answer: "POLYSACCHARIDES",
      row: 2,
      col: 10
    },
    2: {
      clue: "Glucose in the form of glycogen stored in the _________for future use.",
      answer: "LIVER",
      row: 7,
      col: 11
    },
    3: {
      clue: "Starch is also called______carbohydrate.",
      answer: "COMPLEX",
      row: 10,
      col: 10
    },
    4: {
      clue: "The body breaks carbohydrate into simple sugars & they are abosorbed into the ________",
      answer: "BLOODSTREAM",
      row: 14,
      col: 4
    },
    5: {
      clue: "They are sweet in taste.",
      answer: "SUGAR",
      row: 17,
      col: 7
    },
    6: {
      clue: "They cannot digest by humans.",
      answer: "FIBAR",
      row: 19,
      col: 9
    },
    7: {
      clue: "The form in which glucose is stored in the body",
      answer: "GLYCOGEN",
      row: 21,
      col: 3
    }
  },
  down: {
    8: {
      clue: "Monosaccharides are also called________",
      answer: "SIMPLE",
      row: 2,
      col: 14
    },
    9: {
      clue: "This is our staple food.",
      answer: "RICE",
      row: 7,
      col: 15
    },
    10: {
      clue: "This is a tuber vegetable & use in chips.",
      answer: "POTATO",
      row: 9,
      col: 7
    },
    11: {
      clue: "Fiber can prevent_________.",
      answer: "CONSTIPATION",
      row: 10,
      col: 10
    },
    12: {
      clue: "_________is a nearly universal and accessible source of calories.",
      answer: "GLUCOSE",
      row: 13,
      col: 5
    },
    13: {
      clue: "Carbohydrate consumed in food yields_________calories of energy per gram.",
      answer: "FOUR",
      row: 16,
      col: 13
    }
  }
},
{
  across: {
    1: {
      clue: "________fat is located beneath the skin (and includes fat that is located in the abdomnial area beneath the skin but above the abdominal muscle wall).",
      answer: "SUBCUTANEOUS",
      row: 6,
      col: 8
    },
    2: {
      clue: "it is one of the fatsolvents",
      answer: "CHLORORORM",
      row: 9,
      col: 1
    },
    3: {
      clue: "________fat is located within the abdominal wall(i.e., beneath the wall of abdominal muscle)",
      answer: "VISCERAL",
      row: 11,
      col: 7
    },
    4: {
      clue: "Excess fat consumption over a prolonged period causes_____",
      answer: "OBESITY",
      row: 14,
      col: 10
    },
    5: {
      clue: "Fat stored in _____tissue",
      answer: "ADIPOSE",
      row: 15,
      col: 3
    },
  },
  down: {
    6: {
      clue: "LDL may cause_______.",
      answer: "ATHEROSCLEROSIS",
      row: 2,
      col: 1
    },
    7: {
      clue: "It is a combination of fatty acid & glycerol",
      answer: "PHOSPHOLIPIDS",
      row: 3,
      col: 8
    },
    8: {
      clue: "Fat gives______kcal/Gm",
      answer: "NINE",
      row: 4,
      col: 15
    },
    9: {
      clue: "All types of fats, regardless of whether they are liquid or solid",
      answer: "LIPID",
      row: 11,
      col: 14
    },
    10: {
      clue: "_______is solids at normal room temperature.",
      answer: "FAT",
      row: 14,
      col: 3
    }
  }
},
{
  across: {
    1: {
      clue: "As a fuel, proteins contain______kcal per gram.",
      answer: "FOUR",
      row: 2,
      col: 11
    },
    2: {
      clue: "_________is a protein breaking enzyme",
      answer: "PROREASE",
      row: 5,
      col: 1
    },
    3: {
      clue: "_____protein is good quality protein",
      answer: "ANIMAL",
      row: 8,
      col: 7
    },
  },
  down: {
    4: {
      clue: "protein helps in________.",
      answer: "BODYBUILDING",
      row: 1,
      col: 12
    },
    5: {
      clue: "Protein is a nutrient needed by the human body for ______ & maintenance",
      answer: "GROWTH",
      row: 1,
      col: 14
    },
    6: {
      clue: "Proteins are polymer chains made of ______linked together by peptide bonds",
      answer: "AMINOACID",
      row: 1,
      col: 3
    },
    7: {
      clue: "Number of total essential emino acids",
      answer: "NINE",
      row: 2,
      col: 5
    },
    8: {
      clue: "________is a type of vegetarian diet that excludes meat, eggs, dairy products and all other animal-derived ingredients.",
      answer: "VEGAN",
      row: 4,
      col: 8
    },
    9: {
      clue: "________are one of the building blocks of body tissue, and can also serve as a fuel source.",
      answer: "PROTEIN",
      row: 5,
      col: 1
    },
    10: {
      clue: "Protein breakdown occurs in_______",
      answer: "STOMACH",
      row: 5,
      col: 10
    }
  } 
},
{
  across: {
    1: {
      clue: "Vitamin-B2 deficiency can cause________.",
      answer: "ARIBOFLABINOSIS",
      row: 4,
      col: 3
    },
    2: {
      clue: "Vitamin-B1 deficiency can cause________.",
      answer: "BERIBERI",
      row: 8,
      col: 16
    },
    3: {
      clue: "_______anemia can cause due to Vitamin-C & Vitamin-B12",
      answer: "MEGALOBLASTIC",
      row: 11,
      col: 1
    },
    4: {
      clue: "_________is also known as Vit-B2",
      answer: "RIBOFLAVIN",
      row: 15,
      col: 10
    },
    5: {
      clue: "This Vitamin can synthesize in the body in the presence of sunlight.",
      answer: "VITAMIND",
      row: 6,
      col: 2
    },
  },
  down: {
    6: {
      clue: "Vitamin-A deficiency can cause________.",
      answer: "KERATOMALACIA",
      row: 2,
      col: 4
    },
    7: {
      clue: "______are organic compounds which are needed in small quantites to sustain life",
      answer: "VITAMINS",
      row: 7,
      col: 23
    },
    8: {
      clue: "Vit B3 deficiency can cause__________.",
      answer: "PELLAGRA",
      row: 10,
      col: 2
    },
    9: {
      clue: "Also called as Vitamin B1",
      answer: "THIAMIN",
      row: 6,
      col: 19
    },
    10: {
      clue: "This is also known as Vitamin-A",
      answer: "CAROTENOIDS",
      row: 7,
      col: 11
    },
    11: {
      clue: "This is also known as Vitamin_B3",
      answer: "NIACIN",
      row: 8,
      col: 13
    },
    12: {
      clue: "Chemical name of vitamin also called",
      answer: "VITAMINER",
      row: 12,
      col: 16
    },
  }
},
{
  across: {
    1: {
      clue: "Controlling the balance of fluids in the body & helps to lowering blood pressure.",
      answer: "POTASSIUM",
      row: 1,
      col: 8
    },
    2: {
      clue: "______elements are found in small amounts in a variety of foods.",
      answer: "TRACE",
      row: 3,
      col: 9
    },
    3: {
      clue: "Helps produce red and white blood cells and triggers the release of iron to form hemoglobin, the substance that carries oxygen around the body",
      answer: "COPPER",
      row: 5,
      col: 11
    },
    4: {
      clue: "Helps in bone & teeth formation.",
      answer: "CALCIUM",
      row: 6,
      col: 0
    },
    5: {
      clue: "_________are minerals our body needs in larger amounts.",
      answer: "MICROMINERALS",
      row: 9,
      col: 1
    },
    6: {
      clue: "_____helps make red blood cells, which carry oxygen around the body.",
      answer: "IRON",
      row: 12,
      col: 6
    }
  },
  down: {
    7: {
      clue: "Calcium deficiency in adults leads to______.",
      answer: "OSTEOPOROSIS",
      row: 0,
      col: 13
    },
    8: {
      clue: "_______are the chemical elements required by living organisms",
      answer: "MINERALS",
      row: 5,
      col: 4
    },
    9: {
      clue: "Calcium deficiency in children leads to_______",
      answer: "RICKETS",
      row: 5,
      col: 16
    },
    10: {
      clue: "Plays an important role in our immune system's function and in reproduction. It also helps prevent damage to cells and tissues.",
      answer: "SELENIUM",
      row: 8,
      col: 9
    },
    11: {
      clue: "A lack of iron can lead to iron deficiency",
      answer: "ANAEMIA",
      row: 9,
      col: 11
    },
    12: {
      clue: "______Helps with the healing of wounds.",
      answer: "ZINC",
      row: 11,
      col: 6
    }
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

