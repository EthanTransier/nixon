document.getElementById('nixonButton').addEventListener("click", nixonVoted)

function nixonVoted(){
    document.getElementById('nixonVotedID').classList.add('active');
    setTimeout(closeVoted, 3000)
}

function closeVoted() {
    document.getElementById('nixonVotedID').classList.remove('active');
}

let randomOrder = [];
let randomNum = 0;

while(randomOrder.length < 5){
    randomNum = Math.floor(Math.random() * 5)
    if(!randomOrder.includes(randomNum)){
        randomOrder.push(randomNum)
    }
    startNextEvent();
}

console.log(randomOrder)

function startNextEvent() {
    if(randomOrder[0] == 0){
        document.getElementById('governButton').addEventListener("mouseover", govern0);
    }else if(randomOrder[0] == 1){
        document.getElementById('governButton').addEventListener("click", govern1);
    }
    else if(randomOrder[0] == 2){

    }
    else if(randomOrder[0] == 3){

    }
    else if(randomOrder[0] == 4){

    }
}



let timesHovered = 0;

function govern0(){
    timesHovered++;
    console.log(timesHovered)
    document.getElementById('governContainerID').style.transform = "translate(" + ((Math.random() * 32) - 16) + "vw, " + ((Math.random() * 32) - 16) + "vh)"
    if(timesHovered == 10){
        for(let i = 0; i < randomOrder.length; i++){
            if(randomOrder[i] == 0){
                randomOrder.splice(i, 1);
                startNextEvent();
                document.getElementById('governButton').removeEventListener("mouseover", govern0);
                document.getElementById('governContainerID').style.transform = "none";
            }
        }
    }
}

function govern1(){
    
}