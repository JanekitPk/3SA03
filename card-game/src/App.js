import React from 'react';
import './App.css';
/* 0 = rock 
   1 = scissors
   2 = paper
*/
function App() {
  function test(){
     console.log("test")
  }
  function test2(){
    console.log("test2")
 }

  const act0 = () => {
    var P1 = 0
    console.log("P1="+P1)
    var P2 = Math.floor(Math.random()*3)
    console.log("P2="+P2)
    if(P1==0&&P2==1){
        console.log('YouWin!')
    }
    else if(P1==1&&P2==2){
       console.log('YouLose!')
    }
    else{
      console.log('Draw!')
    }
  }
  const act1 = () => {
        var P1 = 1
        console.log("P1="+P1)
        var P2 = Math.floor(Math.random()*3)
        console.log("P2="+P2)
        if(P1==1&&P2==2){
            console.log('YouWin!')
        }
        else if(P1==1&&P2==0){
           console.log('YouLose!')
        }
        else{
          console.log('Draw!')
        }
   } 
  const act2 = () => {
          var P1 = 2
          console.log("P1="+P1)
          var P2 = Math.floor(Math.random()*3)
          console.log("P2="+P2)
          if(P1==2&&P2==0){
              console.log('YouWin!')
          }
          else if(P1==2&&P2==1){
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