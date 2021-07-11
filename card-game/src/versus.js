import React from 'react';
const choose = ['rock','scissors','paper']
state = {
    P1:choose[0],P2:choose[0]
  };
export default function versus(props){  
    this.setState({ 
        P1:choose[props],
        P2:choose[Math.floor(Math.random()*choose.length)]
    })


    return(
        <div className='App'>

        </div>
    )
}