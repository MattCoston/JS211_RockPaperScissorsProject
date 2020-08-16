// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
const { exit } = require('process');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  // Write code here
  // Use the unit test to see what is expected

  
  let hand1Wins = 'Hand one wins!'
  let hand2Wins = 'Hand two wins!'
  let tie = 'It\'s a tie!'
  
    if (hand1.toLowerCase().trim() == hand2.toLowerCase().trim()){
      return tie
    }
    else if (hand1.toLowerCase().trim() == 'rock' && hand2.toLowerCase().trim() == 'paper'){
      return hand2Wins
    } 
    else if (hand1.toLowerCase().trim() == 'paper' && hand2.toLowerCase().trim() == 'scissors'){
      return hand2Wins
    } 
    else if (hand1.toLowerCase().trim() == 'scissors' && hand2.toLowerCase().trim() == 'rock'){
      return hand2Wins
    } 
    else if (hand1.toLowerCase().trim() == 'rock' && hand2.toLowerCase().trim() == 'scissors'){
      return hand1Wins
    }
    else if (hand1.toLowerCase().trim() == 'paper' && hand2.toLowerCase().trim() == 'rock'){
      return hand1Wins
    }
    else if (hand1.toLowerCase().trim() ==  'scissors' && hand2.toLowerCase().trim() == 'paper'){
      return hand1Wins
    }
    else {
      return 'invalid selection'
    }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });


  //RPS test creation assignment
  //Create a couple of test cases for RPS

  if(typeof describe === 'function'){
    describe('RPS TESTS', () => {
      it('should evaluate same words as a tie even if they are not rock, paper or scissors', () => {
        assert.equal(rockPaperScissors('rack', 'rack'), "It's a tie!");
        assert.equal(rockPaperScissors('poppers', 'poppers'), "It's a tie!");
        assert.equal(rockPaperScissors('spices', 'spices'), "It's a tie!");
      });
      it('Evaluate totally different words as invalid selection', () => {
        assert.equal(rockPaperScissors('rocket', 'cat'), "invalid selection");
        assert.equal(rockPaperScissors('poppers', 'screen'), "invalid selection");
        assert.equal(rockPaperScissors('spices', 'dog'), "invalid selection");
      });
    })
  }
} else {

  // always returns ask the user for another input
  getPrompt();

}
