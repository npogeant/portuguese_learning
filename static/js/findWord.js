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

function checkW () {
    const randomWords  = wordsDict[randomKey]; 
    let myTranslate = document.getElementById("translation").value
    if (myTranslate === randomWords) {
        feedback.textContent = "Correcto !"
    }   else {
        feedback.textContent = "Não é correcto"
    }
    console.log(randomWords)
}

submiT.addEventListener('click', checkW)