document.getElementById('nixonButton').addEventListener("click", nixonVoted)

function nixonVoted(){
    document.getElementById('nixonVotedID').classList.add('active');
    setTimeout(closeVoted, 5000)
}

function closeVoted() {
    document.getElementById('nixonVotedID').classList.remove('active');
}

const randomOrder = [1, 2, 3, 4, 5]
