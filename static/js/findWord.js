// Portuguese words dictionnary
const wordsDict2 = {'Le temps' : 'O tempo',
            'La fois' : 'A vez',
            'La chose' : 'A coisa',
            "L'homme" : 'O homem',
            'La femme' : 'A mulher',
            'La maison' : 'A casa',
            'La vie' : 'A vida',
            'La mort' : 'A morte',
            'La personne' : 'A pessoa',
            'Le pays' : 'O país',
            'La ville' : 'A cidade',
            'La région' : 'A região',
            "L'état" : 'O estado',
            'Le gouvernement' : 'O governo',
            'Le jour' : 'O dia',
            'La nuit' : 'A noite',
            'La semaine' : 'A semana',
            'Le mois' : 'O mês',
            "L'année" : 'O ano',
            "L'heure" : 'A hora',
            'La minute' : 'O minuto',
            'La seconde' : 'O segundo',
            'La forme' : 'A forma',
            'La part' : 'A parte',
            'Le cas' : 'O caso',
            'Le travail' : 'O trabalho',
            'Les gens' : 'A gente',
            'Le monde' : 'O mundo',
            'Le nom' : 'O nome',
            'Le public' : 'O público'
            
};

// Portuguese words dictionnary
const wordsDict = {"L'eau" : 'A água',
            'La nourriture' : 'A comida',
            'Le processus' : 'A processo',
            "Le système" : 'O sistema',
            'Le point' : 'O ponto',
            'Le mot' : 'A palavra',
            'La phrase' : 'A frase',
            'La fin' : 'O fim',
            'Le début' : 'O início',
            'Le nombre' : 'O número',
            'Le fait' : 'O facto',
            "L'histoire" : 'A história',
            "Le siècle" : 'O século',
            'La guerre' : 'A guerra',
            'La paix' : 'A paz',
            'Le corps' : 'O corpo',
            'Le poil' : 'O pelo',
            'La tête' : 'A cabeça',
            "Les cheveux" : 'O cabelo',
            "Le visage" : 'O cara',
            "L'oeil" : 'O olho',
            'Le nez' : 'O narriz',
            'La bouche' : 'A boca',
            "L'oreille" : 'A orelha',
            'Le menton' : 'O quiexo',
            'Le cou' : 'O pescoço',
            "L'épaule" : 'O ombro',
            'Le bras' : 'O braço',
            'Le coude' : 'O costovelo',
            'Le poignet' : 'O pulso',
            "La main" : "A mão",
            "Le torse" : "O peito",
            "L'estomac" : "A barriga",
            "As costas" : "Le dos",
            "Le fessier" : "O rabo",
            "A perna" : "La jambe",
            "Le genoux" : "O joelho",
            "La cheville" : "O tornozedo",
            "Le pied" : "O pé",
            "Le doigt/l'orteil" : "O dedo",
            "La zone" : "A área",
            "Le projet" : "O projeto",
            "La force" : "A força",
            "Le moment" : "O momento",
            "Le mec/le type" : "O tipo",
            "La place" : "O lugar",
            "Le sol/la terra" : "A terra",
            "La planète" : "O planeta",
            "L'idée" : "A ideia",
            "La valeur" : "O valor"
            
};

let animalArray  = Object.keys(wordsDict);
let randomNumber = Math.random();
let animalIndex  = Math.floor(randomNumber * animalArray.length);

let randomKey    = animalArray[animalIndex];
// This will course this will return the value of the randomKey
// instead of a fresh random value
let randomWords  = wordsDict[randomKey]; 

console.log(randomWords)
word2translate.textContent = randomKey

const input_ = document.getElementById("translation")
const addError = function() { document.getElementById("translation").classList.add('error'); setTimeout(() => {
  document.getElementById("translation").classList.remove('error');
 }, 1000)};
const addError2 = function() { document.getElementById("verificar").style.cssText += 'animation: 1.5s shake infinite alternate;'; setTimeout(() => {
  document.getElementById("verificar").style.cssText += 'animation: null;';
 }, 1000)};

const removeInp = function remove() {document.getElementById("translation").remove(); };
const newP = function () {
  
    var element = document.createElement("p");
    element.setAttribute("id", "correcto");
    element.appendChild(document.createTextNode('Certo 🤗'));
    document.getElementById('input-or-correct').appendChild(element);

};
const changeA = function () {
    document.getElementById("verificar").style.width = "200px";
    setTimeout(() => {document.getElementById("verificar").textContent = "PRÓXIMA PALAVRA";}, 100)
};
const addInp = function () {
    const p_ = document.getElementById("correcto");
    p_.remove();

    const div_ = document.getElementById("input-or-correct")
    const inp_ = document.createElement('input');
    inp_.setAttribute("id", "translation");
    div_.appendChild(inp_);

    document.getElementById("verificar").style.width = "150px";
    setTimeout(() => {document.getElementById("verificar").textContent = "VERIFICAR";}, 100)


}


function checkW () {
    const wordTranslate = wordsDict[document.getElementById("word2translate").textContent]
    const myTranslate = document.getElementById("translation").value
    
    if (myTranslate.toLowerCase() === wordTranslate.toLowerCase()) {
        removeInp(),
        newP();
        changeA();
    }   else {
        addError();
        addError2();
    }
    
}

submiT.addEventListener('click', actionOnSubmit);

function advance(event) {
    if (event instanceof MouseEvent) {
      console.log('clicked');
    } else if (event instanceof KeyboardEvent && event.keyCode === 13) {
      actionOnSubmit();
    }
  };

window.addEventListener('keypress', advance);

function actionOnSubmit() {
  if (document.getElementById("verificar").textContent === 'VERIFICAR') {
    checkW();
  } else if (document.getElementById("verificar").textContent === 'PRÓXIMA PALAVRA') {
    addInp();

    let animalArray  = Object.keys(wordsDict);
    let randomNumber = Math.random();
    let animalIndex  = Math.floor(randomNumber * animalArray.length);
    let randomKey    = animalArray[animalIndex];
    const randomWords  = wordsDict[randomKey]; 
    word2translate.textContent = randomKey
  } else {
  }
};


