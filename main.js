const hoursContainer = document.querySelector("#hours-container");
const hoursSelected = document.querySelector("#hours-selected")
const hoursOptionList = document.querySelectorAll("#hour-option");

hoursSelected.addEventListener('click', ()=>{
  hoursContainer.classList.toggle('active');
  hoursSelected.classList.toggle('rotate');
})
hoursOptionList.forEach( minOption => {//em cada opt
  minOption.addEventListener('click', a => {//click para cada opt
    hoursSelected.innerHTML = minOption.querySelector('label').innerHTML;//selecionado = opt clicada
    hoursContainer.classList.remove('active');//fecha lista
  })
})
///////////////////////////////////////////////
const minutesContainer = document.querySelector("#minutes-container");
const minutesSelected = document.querySelector("#minutes-selected")
const minutesOptionList = document.querySelectorAll("#minute-option");

minutesSelected.addEventListener('click', ()=>{
  minutesContainer.classList.toggle('active');
  minutesSelected.classList.toggle('rotate');
})
minutesOptionList.forEach( minOption => {//em cada opt
  minOption.addEventListener('click', a => {//click para cada opt
    minutesSelected.innerHTML = minOption.querySelector('label').innerHTML;//selecionado = opt clicada
    minutesContainer.classList.remove('active');//fecha lista
  })
})
//////////////////////////////////////////////////////////
const secondsContainer = document.querySelector("#seconds-container");
const secondsSelected = document.querySelector("#seconds-selected");
const secondsOptionList = document.querySelectorAll("#second-option");

secondsSelected.addEventListener('click', () => {//click no selecionado
  secondsContainer.classList.toggle('active');//abre a lista
  secondsSelected.classList.toggle('rotate');
});

secondsOptionList.forEach( secOption => {//em cada opt
  secOption.addEventListener('click', () => {//click para cada opt
    secondsSelected.innerHTML = secOption.querySelector('label').innerHTML;//selecionado = opt clicada
    secondsContainer.classList.remove('active');//fecha lista
  })
})
//++++++++++++++++++++++++++++++++++++++++++++++++++