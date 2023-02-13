//recup element du dom

let cases = [...document.getElementsByClassName("case")];
let joueur = document.getElementById("joueur")
let score1 = document.getElementById("Score1")
let score2 = document.getElementById("Score2")
let scoreNul = document.getElementById("scoreNul")


let state = {
    jouerEnCours : 1,
    scoreJ1: 0,
    scoreJ2:0,
    c1:0,
    c2:0,
    c3:0,
    c4:0,
    c5:0,
    c6:0,
    c7:0,
    c8:0,
    c9:0,
};

const resetState =() =>{
    jouerEnCours = 1;
    state.c1 = 0;
    state.c2 = 0;
    state.c3 = 0;
    state.c4 = 0;
    state.c5 = 0;
    state.c6 = 0;
    state.c7 = 0;
    state.c8 = 0;
    state.c9 = 0;
}

//la variable pour verifier les conditions de victoires
const verifierVictoire = () =>{
    if (
        (state.c1 === state.c2 && state.c2 === state.c3 && state.c1 >0) ||
        (state.c4 === state.c5 && state.c5 === state.c6 && state.c4 >0) ||
        (state.c7 === state.c8 && state.c8 === state.c9 && state.c7 >0) ||
        (state.c1 === state.c4 && state.c4 === state.c7 && state.c1 >0) ||
        (state.c2 === state.c5 && state.c5 === state.c8 && state.c2 >0) ||
        (state.c3 === state.c6 && state.c6 === state.c9 && state.c3 >0) ||
        (state.c1 === state.c5 && state.c5 === state.c9 && state.c1 >0) ||
        (state.c3 === state.c5 && state.c5 === state.c7 && state.c3 >0)
    ){
        return true;
    }else if(
        state.c1!==0 &&
        state.c2!==0 &&
        state.c3!==0 &&
        state.c4!==0 &&
        state.c5!==0 &&
        state.c6!==0 &&
        state.c7!==0 &&
        state.c8!==0 &&
        state.c9!==0
    ){
        return null
    }else{
        return false;
    }
}

const jouerCase = (e) =>{
    let idCase = e.target.id;
    //console.log(idCase)
    if (state[idCase]!== 0)
        return;
    state[idCase] = state.jouerEnCours;
    let isVictoire = verifierVictoire();

    if (isVictoire === true){
        alert("Le gagnant est le Joueur" + state.jouerEnCours)
        if (state.jouerEnCours === 1){
            state.scoreJ1++;
            score1.textContent = state.scoreJ1;
        }else {
            state.scoreJ2++;
            score2.textContent = state.scoreJ2
        }
        resetState();
        cases.forEach((c) => (c.textContent =""));
    }else if(isVictoire === null) {
        alert("Match nul")
        state.scoreNul++;
        scoreNul.textContent = state.scoreNul;
        resetState();
        cases.forEach((c) => (c.textContent = ""));
    }else if (isVictoire === false){
        if (state.jouerEnCours === 1) {
            e.target.textContent = "X";
            state.jouerEnCours = 2;
            joueur.textContent = "2";
        }else{
            e.target.textContent = "O";
            state.jouerEnCours = 1;
            joueur.textContent = "1";
        }
    }
}

cases.forEach((el) =>{
    el.addEventListener("click", jouerCase);
})