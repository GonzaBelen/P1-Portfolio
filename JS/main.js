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
  console.log((document.getElementById("ejercicio2Num1")))
  const num1 = parseInt(document.getElementById("ejercicio2Num1").value);
  const num2 = parseInt(document.getElementById("ejercicio2Num2").value);
  const ejercicio2Resultado = document.getElementById("ejecicio2Resultado");

  //ejercicio2Resultado.value = num1 + num2;
  
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

  if (gradosC > 0) {
    res = gradosC * (9 / 5) + 32;
    resultado.textContent = `Los grados celsius (${gradosC}°C) a fahrenheit son: ${res}`;
  } else{
    res = (gradosF - 32) / 1.8;
    resultado.textContent = `Los grados fahrenheit (${gradosF}°F) a celsius son: ${res}`;
  }
  
}