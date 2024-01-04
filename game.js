let newbtn=document.createElement("button")
console.dir(newbtn)
newbtn.innerText="Go back to event"
let ftg=document.querySelector("h1")
ftg.append(newbtn)
document.querySelector("h1").addEventListener('click',()=>{
    window.location.href="Events.html"
})
newbtn.style.color="red";
newbtn.style.backgroundColor="yellow";





/// Now the code is for game

let userchoice=0;
let compchoice=0;

const choices=document.querySelectorAll(".choice");

const gencomp=()=>{
    const option=["rock","Paper","Sieser"]
    const compcho=Math.floor(Math.random()*3)
    return option[compcho];
}
const msg=document.querySelector("#msg");

const drawgame=()=>{
    console.log("Game was draw")
    msg.innerText="Game was draw Play Again!"
}

const youscore=document.querySelector("#you");
const compscore=document.querySelector("#comp");

const showwinner=(userwin)=>{
    if(userwin){
        userchoice++
        youscore.innerText=userchoice;
        console.log("You win");
        msg.innerText="You win";
    }
    else{
        compchoice++
        compscore.innerText=compchoice;
        console.log("You loose")
        msg.innerText="You loose"
    }
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice)
    const compchoice=gencomp()
    console.log("comp choice=",compchoice)
    if(userchoice===compchoice){
        //Draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            if(compchoice==="Paper"){
                console.log("false ");
                 userwin=false;
            }
            else if(compchoice==="Sieser"){
                console.log("true");
                 userwin=true;
            }
        }
        else if(userchoice==="Paper"){
            if(compchoice==="rock"){
                console.log("true");
                 userwin=true;
            }
            else if(compchoice==="Sieser"){
                console.log("flase");
                 userwin=false;
            }
        }
        else if(userchoice==="Sieser"){
            if(compchoice==="rock"){
                console.log("false");
                 userwin=false;
            }
            else if(compchoice==="Paper"){
                console.log("true");
                 userwin=true;
            }
        }
        //  console.log(userwin);  
        showwinner(userwin); 
    }   
              
    }
    
    


choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id")
                playgame(userchoice)
        
    })
})


