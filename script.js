document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4

  let button = document.querySelector(".submit");
  let display = document.querySelector(".display");
  let age = document.querySelector(".age");
  let food = document.querySelector(".food");
  let instrument = document.querySelector(".instrument");

  // task 5
  
  let imgSrc;
  let character;
  let ageScore;
  let foodScore;
  let instrumentScore;


  button.onclick = function() {

    // task 6
    
    let userAge = age.value;
    let userFood = food.value.toLowerCase();
    let userInstrument = instrument.value.toLowerCase();


    //task 7
    
    if (userAge > 17) {
      ageScore = 1;
    } else if (userAge > 15 && userAge <= 17) {
      ageScore = 2;
    } else if (userAge === 15) {
      ageScore = 3;
    } else {
      ageScore = 0;
    }


    //task 8
    
    if (userFood === "burger") {
      foodScore = 1;
    } else if (userFood === "salad") {
      foodScore = 2;
    } else if (userFood === "fishsticks") {
      foodScore = 3;
    } else {
      foodScore = 0;
    }


    //task 9

    if (userInstrument === "violin") {
      instrumentScore = 1;
    } else if (userInstrument === "clarinet") {
      instrumentScore = 2;
    } else if (userInstrument === "guitar") {
      instrumentScore = 3;
    } else {
      instrumentScore = 0;
    }



    //task 10
    let totalScore = ageScore + foodScore + instrumentScore;


    //task 11

    if (totalScore > 7) {
      character = "SpongeBob SquarePants";
      imgSrc = "https://media3.giphy.com/media/nDSlfqf0gn5g4/giphy.gif";
      display.innerHTML = `<h2>You are clearly ${character}!</h2></br><img src="${imgSrc}">`;
    } else if (totalScore > 4 && totalScore <= 7) {
      character = "Sandy Cheeks";
      imgSrc = "https://i.pinimg.com/originals/08/4b/49/084b498edaa7abb3dd2c8f49e3cf1c0f.gif"
      display.innerHTML = `<h2>You are clearly ${character}!</h2></br><img src="${imgSrc}">`;
    } else if (totalScore > 1 && totalScore <= 4) {
      character = "Plankton";
      imgSrc = "https://c.tenor.com/N3IatRdrIN0AAAAC/spongebob-plankton.gif";
      display.innerHTML = `<h2>You are clearly ${character}!</h2></br><img src="${imgSrc}">`;
    } else {
      display.innerHTML = `<h2>Make sure to answer all of the questions. We want to make sure we get this right!</h2>`;
    }



  };
};