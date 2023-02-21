import React from "react";
import './wordSearch.css';
import * as bootstrap from 'bootstrap/dist/js/bootstrap';
import {Container as WordSearchContainer} from 'react-bootstrap/Container';
import {Row as WordSearchRow} from 'react-bootstrap/esm/Row';
import {Col as WordSearchCol} from 'react-bootstrap/esm/Col';

var successModalWrap = null;
function successModal() {
  setTimeout(function(){
    if(successModalWrap !==null){
      successModalWrap.remove();
    }
    successModalWrap = document.createElement('div');
    successModalWrap.innerHTML = `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        You Have Completed the Game Click next to Continue
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Next</button>
      </div>
    </div>
  </div>
</div>
    `;

    document.body.append(successModalWrap);
    var modal = new bootstrap.Modal(successModalWrap.querySelector('.modal'));
    modal.show();
  }, 5000);
}
var infoMessage = {
  food:"Food Found",
  protein:"Proteins are essential nutrients for the human body. They are the building blocks of body tissue and can also serve as a fuel source. It is a nutrient needed by the human body for growth and maintenance. Rich food sources of protein include meat, fish, eggs, milk,dairy,poultry. Vegetarian sources of Protein include legumes, nuts, seeds,soyabeans, kidney beans,cowpeas.",
  nutrition:"Nutrition Found",
  carbohydrate:"Carbohydrate Found",
  water:"Water Found",
  protectivefood:"Protectivefood Found",
  vitamin:"Vitamin Found",
  minerals:"Minerals Found",
  health:"Health Found",
  lipid:"Lipid Found",
  proximatefood:"Proximatefood Found",
  fat:"Fat Found"
};
var modalWrap = null;
      const showModal = (str) => {
        let key = String(str.toLowerCase())
        if(modalWrap !==null){
          modalWrap.remove();
        }
        modalWrap = document.createElement('div');
        modalWrap.innerHTML = `
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${key.toUpperCase()}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${infoMessage[key]}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
        </div>
      </div>
    </div>
</div>
        `;

        document.body.append(modalWrap);
        var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
        modal.show();
      }
var completeList = [
  "Food",
  "Protein",
  "Nutrition",
  "Carbohydrate",
  "Water",
  "Protectivefood",
  "Vitamin",
  "Minerals",
  "Health",
  "Lipid",
  "Proximatefood",
  "Fat"
];
function getRandomWords() {
  let lst = [];
  for (var i = 0; i < 5; i++) {
    let currItem =
      completeList[Math.floor(Math.random() * completeList.length)];
    if (lst.indexOf(currItem) === -1) {
      lst.push(currItem);
    } else {
      i--;
    }
  }
  return lst.sort((a, b) => {
    return b.length - a.length;
  });
}
function WSGenerator(wordList, directions) {
  var clen = completeList.length;
  var clsIndex = Math.floor(Math.random() * (clen - 11));
  this.gridSize = 0;
  this.gridArr = [];
  this.directions = directions && directions.length ? directions : [1, 2, 3, 4];
  this.wordList = wordList && wordList.length ? wordList : getRandomWords();
  this.wordList = this.wordList.map((item, i) => {
    return { text: item, index: i, found: false };
  });
  this.alreadyFound = [];
  this.startBox = null;
  this.endBox = null;
}

WSGenerator.prototype.getRandomRow = function () {
  return Math.floor(Math.random() * this.gridSize);
};

WSGenerator.prototype.getRandomColumn = function () {
  return Math.floor(Math.random() * this.gridSize);
};

WSGenerator.prototype.getRandomDirection = function () {
  return this.directions[Math.floor(Math.random() * this.directions.length)];
};

WSGenerator.prototype.setGridSize = function () {
  let len = this.wordList.length;
  let list = this.wordList.slice();
  let currLen = len;
  for (let i = 0; i < len; i++) {
    if (list[i].text.length > currLen) {
      currLen = list[i].text.length;
    }
  }
  this.gridSize = currLen + 3;
};

WSGenerator.prototype.initGrid = function () {
  let grid = [];
  for (let i = 0; i < this.gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < this.gridSize; j++) {
      grid[i][j] = "$$";
    }
  }
  this.gridArr = grid.slice();
  for (var i = 0; i < this.wordList.length; i++) {
    this.populateWord(this.wordList[i].text);
  }
  this.populateUnusedBoxes();
};

WSGenerator.prototype.isPlacable = function (
  word,
  start,
  end,
  direction,
  increment
) {
  let i = 0,
    wordLength = word.length;
  let currI = start.x,
    currJ = start.y;
  while (
    currI >= 0 &&
    currI < this.gridSize &&
    currJ >= 0 &&
    currJ < this.gridSize &&
    i < wordLength &&
    (this.gridArr[currI][currJ] === word[i] ||
      this.gridArr[currI][currJ] === "$$")
  ) {
    i++;
    switch (direction) {
      case -1: {
        currJ = currJ - 1;
        break;
      }
      case 1: {
        currJ++;
        break;
      }
      case -2: {
        currI--;
        break;
      }
      case 2: {
        currI++;
        break;
      }
      case 3: {
        currI++;
        currJ++;
        break;
      }
      case -3: {
        currI--;
        currJ--;
        break;
      }
      case 4: {
        currI++;
        currJ--;
        break;
      }
      case -4: {
        currI--;
        currJ++;
        break;
      }
      default: {
      }
    }
  }
  return i === wordLength;
};

WSGenerator.prototype.placeWord = function (
  word,
  start,
  end,
  direction,
  increment
) {
  let i = 0,
    wordLength = word.length;
  let currI = start.x,
    currJ = start.y;
  while (i < wordLength) {
    this.gridArr[currI][currJ] = {
      letter: word[i],
      id: currI + 1 + "-cell-" + (currJ + 1),
      used: false,
      hilighted: false
    };
    i++;
    switch (direction) {
      case -1: {
        currJ = currJ - 1;
        break;
      }
      case 1: {
        currJ++;
        break;
      }
      case -2: {
        currI--;
        break;
      }
      case 2: {
        currI++;
        break;
      }
      case 3: {
        currI++;
        currJ++;
        break;
      }
      case -3: {
        currI--;
        currJ--;
        break;
      }
      case 4: {
        currI++;
        currJ--;
        break;
      }
      case -4: {
        currI--;
        currJ++;
        break;
      }
      default: {
      }
    }
  }
};

WSGenerator.prototype.populateWord = function (word) {
  let start = { x: this.getRandomRow(), y: this.getRandomColumn() };
  let dir = this.getRandomDirection();

  // console.log(word, start, dir);
  if (this.isPlacable(word, start, null, dir, null)) {
    this.placeWord(word.toUpperCase(), start, null, dir, null);
  } else {
    this.populateWord(word);
  }
};

WSGenerator.prototype.populateUnusedBoxes = function () {
  let indexi;
  let indexj;
  for (indexi = 0; indexi < this.gridSize; indexi++) {
    for (indexj = 0; indexj < this.gridSize; indexj++) {
      if (this.gridArr[indexi][indexj] === "$$") {
        this.gridArr[indexi][indexj] = {
          letter:
            WSGenerator.prototype.alphabets[Math.floor(Math.random() * 25)],
          id: indexi + 1 + "-cell-" + (indexj + 1),
          used: false,
          hilighted: false
        };
      }
    }
  }
};

WSGenerator.prototype.alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "R",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Solver part
WSGenerator.prototype.getDirection = function (startObj, endObj) {
  var dir;
  let stRow = startObj.row,
    stCol = startObj.col,
    curRow = endObj.row,
    curCol = endObj.col;

  if (curRow === stRow && curCol !== stCol) {
    if (stCol < curCol) {
      dir = 1;
    } else {
      dir = -1;
    }
  } else if (curCol === stCol && curRow !== stRow) {
    if (stRow < curRow) {
      dir = 2;
    } else {
      dir = -2;
    }
  } else if (
    curCol - stCol === curRow - stRow ||
    stCol - curCol === stRow - curRow
  ) {
    if (stRow < curRow && stCol < curCol) {
      dir = 3;
    } else if (stRow > curRow && stCol > curCol) {
      dir = -3;
    }
  } else if (
    stRow - curRow === curCol - stCol ||
    curCol - stCol === curRow - curRow
  ) {
    if (stRow < curRow && stCol > curCol) {
      dir = 4;
    } else if (stRow > curRow && stCol < curCol) {
      dir = -4;
    }
  }
  return dir ? dir : 0;
};

WSGenerator.prototype.getStringBetweenPoints = function (startBox, endBox) {
  var dir;
  dir = this.getDirection(startBox, endBox);
  return this.getStringByRowCol(startBox, endBox, dir);
};

WSGenerator.prototype.getStringByRowCol = function (startBox, endBox, dir) {
  var returnedString = "";
  var cellIds = [];
  let str = startBox.row,
    stc = startBox.col,
    enr = endBox.row,
    enc = endBox.col;

  switch (dir) {
    case -1: {
      for (let k = stc; k >= enc; k -= 1) {
        returnedString = returnedString + this.gridArr[str][k].letter;
        cellIds.push([str, k]);
      }
      break;
    }
    case 1: {
      for (let k = stc; k <= enc; k += 1) {
        returnedString = returnedString + this.gridArr[str][k].letter;
        cellIds.push([str, k]);
      }
      break;
    }
    case -2: {
      for (let k = str; k >= enr; k -= 1) {
        returnedString = returnedString + this.gridArr[k][stc].letter;
        cellIds.push([k, stc]);
      }
      break;
    }
    case 2: {
      for (let k = str; k <= enr; k += 1) {
        returnedString = returnedString + this.gridArr[k][stc].letter;
        cellIds.push([k, stc]);
      }
      break;
    }
    case -3: {
      for (let k = str, j = stc; k >= enr, j >= enc; k -= 1, j -= 1) {
        returnedString = returnedString + this.gridArr[k][j].letter;
        cellIds.push([k, j]);
      }
      break;
    }
    case 3: {
      for (let k = str, j = stc; k <= enr, j <= enc; k += 1, j += 1) {
        returnedString = returnedString + this.gridArr[k][j].letter;
        cellIds.push([k, j]);
      }
      break;
    }
    case -4: {
      for (let k = str, j = stc; k >= enr, j <= enc; k -= 1, j += 1) {
        returnedString = returnedString + this.gridArr[k][j].letter;
        cellIds.push([k, j]);
      }
      break;
    }
    case 4: {
      for (let k = str, j = stc; k <= enr, j >= enc; k += 1, j -= 1) {
        returnedString = returnedString + this.gridArr[k][j].letter;
        cellIds.push([k, j]);
      }
      break;
    }
    default: {
    }
  }
  return { str: returnedString, ids: cellIds };
};

WSGenerator.prototype.TestString = function (testStr) {
  // match the found string with the elements of the words
  var str = testStr,
    reverseStr = "",
    matched = false,
    reverseMatched = false,
    matchFound = false,
    reverseMatchFound = false;

  for (let i = 0; i <= str.length; i += 1) {
    reverseStr = str.substring(i, i + 1) + reverseStr;
  }
  matched = this.matchString(str);
  reverseMatched = this.matchString(reverseStr);

  if (matched) {
    matchFound = this.isAlreadyFound(testStr);
  }
  if (reverseMatched) {
    reverseMatchFound = this.isAlreadyFound(reverseStr);
  }
  // console.log(
  //   str,
  //   reverseStr,
  //   matched,
  //   reverseMatched,
  //   matchFound,
  //   reverseMatchFound
  // );

  if (matched && !matchFound) {
    return { found: false, str: testStr, match: true };
  } else if (reverseMatched && !reverseMatchFound) {
    return { found: false, str: reverseStr, match: true };
  } else if (matchFound && reverseMatchFound) {
    return { found: true, match: false };
  } else {
    return { found: false, match: false };
  }
};

WSGenerator.prototype.isAlreadyFound = function (str) {
  var count,
    found = false;
  for (count = 0; count < this.alreadyFound.length; count++) {
    if (str === this.alreadyFound[count]) {
      found = true;
      break;
    }
  }
  return found;
};

WSGenerator.prototype.matchString = function (str) {
  var matched = false;
  for (let count = 0; count < this.wordList.length; count++) {
    if (str.toUpperCase() === this.wordList[count].text.toUpperCase()) {
      matched = true;
      showModal(str);
      break;
    }
  }
  return matched;
};

WSGenerator.prototype.getBoxById = function (id) {
  let [row, col] = id.split("-cell-");
  row -= 1; // subtract for 0 based index
  col -= 1; // subtract for 0 based index
  return Object.assign({}, this.gridArr[row][col], { row: row, col: col });
};

//cell.js
class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hilighted: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }
  mouseOver(evt) {
    this.setState({
      hilighted: true
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (state.hilighted && !props.hasSelectionStarted()) {
      return {
        hilighted: false
      };
    }
    return null;
  }

  mouseOut(evt) {
    let id = evt.target.id;
    let startBox = this.props.hasSelectionStarted();
    let hilighted = true;
    if (startBox && startBox.id === id) {
      hilighted = true;
    }
    this.setState({
      hilighted: hilighted
    });
  }

  render() {
    let cell = this.props.cell;
    let id = cell.id;
    let currClass =
      "cell" + (cell.used || this.state.hilighted ? " hilighted" : "");
    return (
      <div
        className={currClass}
        id={id}
        onMouseDown={this.props.selectionStart}
        onMouseUp={this.props.selectionEnd}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        {cell.letter}
      </div>
    );
  }
}

//row.js
class Row extends React.Component {
  render() {
    let row = this.props.row;
    return (
      <div className="row">
        {row.map((item, i) => {
          return (
            <Cell
              cell={item}
              key={i}
              selectionStart={this.props.selectionStart}
              selectionEnd={this.props.selectionEnd}
              mouseOver={this.props.mouseOver}
              hasSelectionStarted={this.props.hasSelectionStarted}
            />
          );
        })}
      </div>
    );
  }
}

//grid.js
class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.ws = props.ws;
    this.ws.startBox = null;
    this.ws.endBox = null;

    this.selectionStart = this.selectionStart.bind(this);
    this.selectionEnd = this.selectionEnd.bind(this);
    this.hasSelectionStarted = this.hasSelectionStarted.bind(this);
    this.state = {
      ws: this.ws
    };
  }

  selectionStart(evt) {
    let id = evt.target.id;
    this.ws.startBox = this.ws.getBoxById(id);
    return false;
  }

  selectionEnd(evt) {
    //let dir;
    if (this.ws.startBox != null) {
      let id = evt.target.id;
      this.ws.endBox = this.ws.getBoxById(id);
    }
    if (this.ws.startBox && this.ws.endBox) {
      let strObj = this.ws.getStringBetweenPoints(
        this.ws.startBox,
        this.ws.endBox
      );
      let str = strObj.str;
      let obj = this.ws.TestString(str);
      if (obj.match && !obj.found) {
        this.ws.alreadyFound.push(str);
        this.ws.wordList.forEach((item) => {
          // console.log(
          //   str.split("").reverse().join("").toLowerCase(),
          //   item.text.toLowerCase()
          // );
          if (
            item.text.toLowerCase() === str.toLowerCase() ||
            str.split("").reverse().join("").toLowerCase() ===
            item.text.toLowerCase()
          ) {
            item.found = true;
            // console.log(item);
          }
        });
        strObj.ids.forEach((item) => {
          let [i, j] = item;
          this.ws.gridArr[i][j].used = true;
        });
        for (let i = 0; i < this.ws.gridArr.length; i++) {
          for (let j = 0; j < this.ws.gridArr[i].length; j++) {
            if (strObj.ids.indexOf(this.ws.gridArr[i][j].id) !== -1) {
              this.ws.gridArr[i][j].used = true;
            }
          }
        }
        this.forceUpdate();
      }

      this.ws.startBox = null;
      this.ws.endBox = null;
      this.setState({
        ws: this.ws
      });
      return false;
    }
  }

  mouseOver(evt) {
    if (this.ws.startBox !== null) {
      let tempEndBox;
      let id = evt.target.id;
      tempEndBox = this.ws.getBoxById(id);
      let dir = this.ws.getDirection(this.ws.startBox, tempEndBox);
      //highLightBoxes(this.ws.startBox, tempEndBox, dir);
    }
  }

  hasSelectionStarted() {
    return this.ws.startBox;
  }

  handleRefreshClick() {
    console.log('Go Next button is clicked');
  }

  handleGoNextClick() {
    console.log('Go Next button is clicked');
  }

  render() {
    let gridStyle = {
      width: 40 * this.props.ws.gridSize + "px",
      height: 40 * this.props.ws.gridSize + "px",
      borderRadius: "2px"
    };
    let gridArr = this.props.ws.gridArr.slice();
    let wordList = this.props.ws.wordList.slice();
    let toastVisible =
      this.props.ws.wordList.length === this.props.ws.alreadyFound.length;
    return (
      <div id="root" className="container word-search-container">
      <div className="row justify-content-lg-center">
        <div className="grid col-12 col-md-12 col-lg-8"  style={gridStyle}>
          {gridArr.map((row, i) => {
            return (
              <Row
                row={row}
                rowIndex={i}
                key={i}
                selectionStart={this.selectionStart}
                selectionEnd={this.selectionEnd}
                hasSelectionStarted={this.hasSelectionStarted}
              />
            );
          })}
        </div>
        <div id="word-list" className="col-12 col-md-12 col-lg-4">
          <p>Find the below words</p>

          <ul>
            {wordList.map((item, i) => {
              let styleObj = {
                textDecoration: item.found ? "line-through" : "none"
              };
              return (
                <li key={i} style={styleObj}>
                  {item.text}
                </li>
              );
            })}
          </ul>
          <div
            style={{ display: toastVisible ? successModal() : "none" }}
            // className="ws-my-page-success-toast"
          >
            {/* Wohoooo, You did it */}
        
          </div>
          {/* <button onClick={this.handleRefreshClick}>Refresh</button>
            <button onClick={this.handleGoNextClick}>Go Next</button> */}
        </div>
        </div>
      </div>
    );
  }
}

class SuccessToast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      message: props.message
    };
    alert(props.visible);
  }

  render() {
    let styleObj = {
      display: this.state.visible ? "block" : "block",
      position: "absolute",
      right: 0,
      bottom: 0
    };
    return <div style={styleObj}>{this.state.message}</div>;
  }
}

//wordsearch.js
class FoodHealthWordSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.wsGenerator = new WSGenerator();
    this.wsGenerator.setGridSize();
    this.wsGenerator.initGrid();
    this.wsGenerator.populateUnusedBoxes();
  }

  render() {
    return (
      <div id="root-container">
        <Grid ws={this.wsGenerator} />
      </div>
    );
  }
}
//index.js

export default FoodHealthWordSearch;

