const wordsDict = {'Le temps' : 'O tempo',
              'La fois' : 'A vez'};

const animalArray  = Object.keys(wordsDict);
const randomNumber = Math.random();
const animalIndex  = Math.floor(randomNumber * animalArray.length);

const randomKey    = animalArray[animalIndex];
// This will course this will return the value of the randomKey
// instead of a fresh random value
const randomWords  = wordsDict[randomKey]; 

console.log(randomWords)
word2translate.textContent = randomKey

const input_ = document.getElementById("translation")
const addError = function() { input_.classList.add('error'); setTimeout(() => {
    input_.classList.remove('error');
 }, 1000)};
const removeError = function() { input_.classList.remove('error'); };
const removeInp = function remove() {input_.remove(); };
const newP = function () {

    var element = document.createElement("p");
    element.appendChild(document.createTextNode('Correcto 🤗'));
    document.getElementById('input-or-correct').appendChild(element);

};
const changeA = function () {
    document.getElementById("verificar").style.width = "200px";
    setTimeout(() => {document.getElementById("verificar").textContent = "PRÓXIMA PALAVRA";}, 100)
};


function checkW () {
    const randomWords  = wordsDict[randomKey]; 
    let myTranslate = document.getElementById("translation").value
    
    
    if (myTranslate.toLowerCase() === randomWords.toLowerCase()) {
        removeInp(),
        newP();
        changeA();
    }   else {
        addError();
        console.log("wrong")
    }
    
}

submiT.addEventListener('click', checkW);

function advance(event) {
    if (event instanceof MouseEvent) {
      console.log('clicked');
    } else if (event instanceof KeyboardEvent && event.keyCode === 13) {
      console.log('enter');
      checkW();
    }
  };

window.addEventListener('keypress', advance);


