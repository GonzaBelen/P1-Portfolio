function ejercicio1(){
  const num1 = parseInt(document.getElementById("ejercicio1Num1").value);
  const num2 = parseInt(document.getElementById("ejercicio1Num2").value);
  const num3 = parseInt(document.getElementById("ejercicio1Num3").value);
  const numMayor = document.getElementById("ejercicio1Nmayor");
  const numMenor = document.getElementById("ejercicio1Nmenor");

  let mayor = Math.max(num1, num2, num3),
      menor = Math.min(num1, num2, num3);

  numMayor.textContent = mayor;
  numMenor.textContent = menor;
};

// ${} insertar una variable como un string
// var usuario = juan
// ´hola ${usuario}´

function ejercicio2(){
  const num1 = parseInt(document.getElementById("ejercicio2Num1").value);
  const num2 = parseInt(document.getElementById("ejercicio2Num2").value);
  const ejercicio2Resultado = document.getElementById("ejercicio2Resultado");

  ejercicio2Resultado.value = num1 + num2;
  
};

function ejercicio3(){
  const palabra = document.getElementById("ejercicio3Palabra").value;
  const num = document.getElementById("ejercicio3Num").value;
  const resultado = document.getElementById("ejercicio3Resultado");

  for (let i = 0; i < num; i++){
    resultado.textContent = resultado.innerHTML + " " + palabra;
  }
};

function ejercicio4(){
  const gradosC = document.getElementById("ejercicio4Gc").value;
  const gradosF = document.getElementById("ejercicio4Gf").value;
  const resultado = document.getElementById("ejercicio4Resultado");
  let res = 0;

  if (gradosC != 0) {
    res = gradosC * (9 / 5) + 32;
    resultado.textContent = "los grados celcius " + gradosC + " °C a fahrengeit son " + res + " °F";
  }else{
    res = (gradosF - 32) / 1.8;
    resultado.textContent = "los grados fahrenheit " + gradosF + " °F a celcius son " + res + " °C";
  }
}

function ejercicio5(){
  const palabra = document.getElementById("ejercicio5Palabra").value;
  const resultado = document.getElementById("ejercicio5Resultado");
  resultado.textContent = "La palabra " + palabra + " tiene " + palabra.length + " letras"
}

function ejercicio6(){
  const num = parseInt(document.getElementById("ejercicio6Num").value);
  const resultado = document.getElementById("ejercicio6Resultado");
  const resto = (num % 2);
  if (resto == 0){
    resultado.textContent = "El numero ingresado es par";
  }else{
    resultado.textContent = "El numero ingresado es impar";
  }
}

function ejercicio7(){
  const num1 = parseInt(document.getElementById("ejercicio7Num1").value);
  const num2 = parseInt(document.getElementById("ejercicio7Num2").value);
  const resultado = document.getElementById("ejercicio7Resultado");

 
  resultado.textContent = "";
  
  if(num1 < num2){
    for(let i=num1+1; i < num2; i++){
      let resto1 = (i % 3);
      if (resto1 == 0){
        resultado.textContent = resultado.innerHTML + " | " + i;
      }
    }
  }else{
    for(let i=num1+1; i < num1; i++){
      let resto2 = (i % 3);
      if(resto2 == 0){
        resultado.textContent = resultado.innerHTML + " | " + i;
      }
    }
  }
}

function ejercicio8(){
  const num1 = parseInt(document.getElementById("ejercicio8Num").value);
  const resultado = document.getElementById("ejercicio8Resultado");

  const esPrimo = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
      return true;
    }
  }
  for (let x = 0; x <= num1; x++) {
    esPrimo(x) && (resultado.textContent = resultado.innerHTML + " | " + x);
  }
}

function ejercicio9(){
  const nombre = document.getElementById("ejercicio9Nombre").value;
  const apellido = document.getElementById("ejercicio9Apellido").value;
  const edad = parseInt(document.getElementById("ejercicio9Edad").value);
  const ciudad = document.getElementById("ejercicio9Ciudad").value;
  const resultado = document.getElementById("ejercicio9Resultado");

  resultado.textContent = "Mi nombre es " + nombre + " " + apellido + " , tengo " + edad + " años. Nací en la ciudad de " + ciudad;
}

function ejercicio10(){
  const num1 = parseInt(document.getElementById("ejercicio10Num1").value);
  const num2 = parseInt(document.getElementById("ejercicio10Num2").value);
  const resultado = document.getElementById("ejercicio10Resultado");

  if(num1 < num2){
    for(let i=num1+1; i < num2; i++){
        resultado.textContent = resultado.innerHTML + " | " + i;
      }
  }else{
    for(let i=num1+1; i < num1; i++){
      resultado.textContent = resultado.innerHTML + " | " + i;
    }
  }
}
