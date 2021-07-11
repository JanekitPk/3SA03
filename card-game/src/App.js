import React from 'react';
import './App.css';
const activationHandler = (c) => {
    var P1 = c
    console.log("P1="+P1)
    var P2 = Math.floor(Math.random()*3)
    console.log("P2="+P2)
    if((P1==0&&P2==1)||(P1==1&&P2==2)||(P1==2&&P2==0)){
        console.log('YouWin!')
    }
    else if((P1==1&&P2==0)||(P1==2&&P2==1)||(P1==0&&P2==2)){
       console.log('YouLose!')
    }
    else{
      console.log('Draw!')
    }
    }
function App() {
  

  return (
    <div className="Choose">
    <h1>
     Rock-Scissors-Paper
    </h1>
    <button class="ChooseBtn" onClick={activationHandler(0)}>
      ✊
    </button>
    <button class="ChooseBtn" onClick={activationHandler(1)}>
      ✌
    </button>
    <button class="ChooseBtn" onClick={activationHandler(2)} >
      ✋
    </button>
    </div>
    );
}
export default App