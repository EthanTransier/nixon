document.getElementById('nixonButton').addEventListener("click", nixonVoted)

function nixonVoted(){
    document.getElementById('nixonVotedID').classList.add('active');
    setTimeout(closeVoted, 5000)
}

function closeVoted() {
    document.getElementById('nixonVotedID').classList.remove('active');
}

let randomOrder = [];

for(let i = 0; i < randomOrder.length + 1; i++){
    let randomNum = Math.floor(Math.random() * 5)
    if(randomOrder.includes(randomNum)){
        
    }
}
