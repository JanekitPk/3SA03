import React from 'react';
/* 0 = rock 
   1 = scissors
   2 = paper
*/



export default function versus(props){  
    var P1 = props.value
    var P2 = Math.floor(Math.random()*3)
    if((P1==0&&P2==1)||(P1==1&&P2==2)||(P1==2&&P2==0)){
        console.log('YouWin!')
    }
    else if((P1==1&&P2==0)||(P1==2&&P2==1)||(P1==0&&P2==2)){
       console.log('YouLose!')
    }
    return(
    <div>
    </div>
);
}
*/



/*import React from 'react';
const choose = ['rock','scissors','paper']

export default function versus(props){  
this.state = {P1:choose[0],P2:choose[0]}
    this.setState({ 
        P1:choose[props.value],
        P2:choose[Math.floor(Math.random()*choose.length)]
    })
    return(
        <div className='App'>
            if(P1=='rock'&&P2=='scissors')||(P1=='scissors'&&P2=='paper')||(P1=='paper'&&P2=='rock'){
                console.log('YouWin!')
            }else if(P1=='scissors'&&P2=='rock')||(P1=='paper'&&P2=='scissors')||(P1=='rock'&&P2=='paper'){
                console.log('YouLose!')
            }
        </div>
    )
}*/