/* /* function nprimos(num) {
  
  for (i = 2; i < num; i++) {
    return i;
  }
}

//numeros divisibles solo por si mismos

nprimos(10);

 */
/* 
function primo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
      
    }
  }

  return numero !== 1;
}

console.log(primo(17)); */

/* function primo(numero) {
  console.log("Has pasado el numero: " + numero);
  console.log("Inicio bucle desde 2 hasta " + (numero - 1));

  for (var i = 2; i < numero; i++) {
    console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));

    if (numero % i === 0) {
      console.log(i + " es un multiplo de " + numero);
      console.log(
        numero + " no es un numero primo porque " + i + " es un multiplo"
      );
      return false;
    }
  }

  if (numero === 1) {
    console.log(
      "Me has pasado el numero 1, recuerda que NO es un numero primo"
    );
  } else {
    console.log(
      "Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo."
    );
  }

  console.log("-------------------------------------");
}

primo(2);
primo(4);
primo(5);
primo(10);  */

var i;
var j;
var primo;

for (i = 4; i <= 100; i++) {
  primo = 0;
  for (j = 2; j < i; j++) {
    if (i % j == 0) primo = 1;
  }
  if (primo == 0) {
    console.log(i);
  }
}

//Mostrar 10 numeros aleatorios

function mostrar10(num) {
  for (num = 1; num < 10; num++) {
    min = 5;
    max = 10;
    function aleatorios(min, max) {
      return Math.floor(Math.random() * (1 + max - min)) + min;
    }
    console.log(aleatorios(min, max));
  }
}

mostrar10();
