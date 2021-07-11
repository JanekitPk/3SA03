import React from 'react';
import './App.css';
/* 0 = rock 
   1 = scissors
   2 = paper
*/
function App() {
  function CheckP2(n){
    if(n==0){
      console.log("P2 = Rock")
    }
    else if(n==1){
      console.log("P2 = Scissors")
    }
    else{
      console.log("P2 = Paper")
    }
  }

  function act0(){
    console.log("P1 = Rock")
    var P2 = Math.floor(Math.random()*3)
    CheckP2(P2)
    if(P2==1){
        console.log('YouWin!')
    }
    else if(P2==2){
       console.log('YouLose!')
    }
    else{
      console.log('Draw!')
    }
  }
  function act1(){
        console.log("P1 = Scissors")
        var P2 = Math.floor(Math.random()*3)
        CheckP2(P2)
        if(P2==2){
            console.log('YouWin!')
        }
        else if(P2==0){
           console.log('YouLose!')
        }
        else{
          console.log('Draw!')
        }
   } 
  function act2(){
          console.log("P1 = Paper")
          var P2 = Math.floor(Math.random()*3)
          CheckP2(P2)
          if(P2==0){
              console.log('YouWin!')
          }
          else if(P2==1){
             console.log('YouLose!')
          }
          else{
            console.log('Draw!')
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