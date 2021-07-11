import React from 'react';
import './App.css';
/* 0 = rock 
   1 = scissors
   2 = paper
*/
function App() {
  function CheckP2(n){
    if(n==0){
      alert("Player 2 use Rock!")
    }
    else if(n==1){
      alert("Player 2 use Scissors!")
    }
    else{
      alert("Player 2 use Paper!")
    }
  }

  function act0(){
    var P2 = Math.floor(Math.random()*3)
    CheckP2(P2)
    if(P2==1){
      alert('You Win!')
    }
    else if(P2==2){
      alert('You Lose!')
    }
    else{
      alert('Draw!')
    }
  }
  function act1(){
        var P2 = Math.floor(Math.random()*3)
        CheckP2(P2)
        if(P2==2){
          alert('You Win!')
        }
        else if(P2==0){
          alert('You Lose!')
        }
        else{
          alert('Draw!')
        }
   } 
  function act2(){
          var P2 = Math.floor(Math.random()*3)
          CheckP2(P2)
          if(P2==0){
            alert('You Win!')
          }
          else if(P2==1){
            alert('You Lose!')
          }
          else{
            alert('Draw!')
          }
   }   

  return (
    <div className="Choose">
    <h1>
     Rock-Scissors-Paper
    </h1>
    
    <button class="ChooseBtn" onClick={act0}>
      ✊
    </button>
    <button class="ChooseBtn" onClick={act1}>
      ✌
    </button>
    <button class="ChooseBtn" onClick={act2} >
      ✋
    </button>
    </div>
    );
}
export default App