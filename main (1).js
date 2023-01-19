
//itinerario de viaje//
 const inputVal = document.getElementsByClassName('inputVal')[0];

 const addTaskBtn = document.getElementsByClassName('btn')[0];
 

addTaskBtn.addEventListener('click', function (){
  
if(inputVal.value.trim()!=0){
       let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = []

    }else{
        taskList = localItems;
    }
    taskList.push(inputVal.value)
    localStorage.setItem('localItem', JSON.stringify(taskList)); 
}

    showItem()
})

function showItem(){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = []

    }else{
        taskList = localItems;
    }


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
    

    html += `
    <div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">x</button>
    </div>
    `
})
itemShow.innerHTML = html;
}
showItem()

function deleteItem(index){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask(){
    
localStorage.clear()
showItem()
}
//fin de itinerario de viaje//

//modificar h1//
let h1 = (document.querySelector("h1").textContent = "Viajalo");

//creando storage//
localStorage.setItem
sessionStorage.setItem();
let elemento = sessionStorage.getItem();
console.log();
let listaElementos = elementos.split(",");
console.log

//Calculadora de viaje//

function limpiar(){
    document.getElementById("alojamiento").value = null;
    document.getElementById("comida").value = null;
    document.getElementById("tourOCircuitos").value = null;
    document.getElementById("transporte").value = null;
    document.getElementById("resultado").value = null;
  }
  
  function calcular(){
    
    let resultado;
    let alojamiento = +document.getElementById("alojamiento").value;
    let comida = +document.getElementById("comida").value;
    let tourOCircuitos = +document.getElementById("tourOCircuitos").value;
    let transporte = +document.getElementById("transporte").value;
    
    let operacion = document.getElementById("operacion").value;
  
    console.log("DATOS A CALCULAR:");
    console.log("alojamiento = " + alojamiento);
    console.log("comida = " + comida);
    console.log("tourOCircuitos = " + tourOCircuitos);
    console.log("transporte = " + transporte);
    console.log("Operación = " + operacion);
  
    switch(operacion){
        case "+":
            resultado = alojamiento + comida + tourOCircuitos + transporte
            console.log("resultado = " + resultado);
            document.getElementById("resultado").value = resultado;
            break;
  
        case "-":
            resultado = alojamiento - comida - tourOCircuitos - transporte
            console.log("resultado = " + resultado);
            document.getElementById("resultado").value = resultado;
            break;
    }    
  }

  

