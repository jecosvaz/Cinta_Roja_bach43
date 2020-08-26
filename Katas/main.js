/* Crea una función llamada evaluateLetter() que reciba como parámetro cualquier letra del alfabeto y verifique si es vocal o consonante. */
// !En caso de ser vocal, devolver "Vocal"
// !En caso de ser consonante, devolver "Consonante"

/* Kata 1: Crea una función llamada farenheitToCelsius() que reciba como parametro los grados farenheit y los convierta a grados centígrados.*/


function farenheitToCelsius( gradosFarenheit){
    let gradosCentigrados = (gradosFarenheit-32)*(5/9);
    return gradosCentigrados;
}

/* Kata 2: Crea una función llamada evaluateLetter() que reciba como parámetro cualquier letra del alfabeto y verifique si es vocal o consonante.
En caso de ser vocal, devolver "Vocal"
En caso de ser consonante, devolver "Consonante"*/

function evaluateLetter(letra){
    if(letra==='a'||letra==='e'||letra==='i'||letra==='o'||letra==='u'){
       letra = 'Vocal';
    }else{
        letra = 'Consonante';
            }
    return letra;
}

// console.log(evaluateLetter('r'));

/*Kata 3: Crea una función llamada decimalToBinary() que reciba como parámetro un número entero decimal y lo convierta en un número binario retornando su resultado.*/

var number = 72;

 function decimalToBinary(number){
     let binary = "";
     let temp = number;
  
     while(temp > 0){
         if(temp % 2 == 0){
             binary = "0" + binary;
         }
         else {
             binary = "1" + binary;
         }
 
         temp = Math.floor(temp / 2);
     }
 
     return binary;
 }
 
//  console.log(decimalToBinary(number));

/*Kata 4: Crea una función llamada evaluateNumber() que reciba como parámetro un número para evaluar si un número es divisible entre 5 y 11 o no lo es.
En caso de ser divisible entre 5 y 11, retornar true
En caso de no ser divisible entre 5 y 11, retornar false */

function evaluateNumber(numero){

    if(numero % 5 ==0 && numero % 11 ==0){

        return true;
    }else{
        return false;
    }

}
// console.log(evaluateNumber(55));

/* Kata Crea una función llamada palindrome() que reciba como parametro una oración, si la oración es un palíndromo la función deberá devolver true en otro caso, devolver false */

function palindrome(texto){
    // Paso la fraseUser a minusculas y quito espacios
    texto=texto.toLowerCase().replace(/\s/g,"");
    /* Creo otra frase partiendo de la de userFrase pero
    la convierto en array, le doy la vuelta al array, lo paso a string*/
    fraserReverse=texto.split("").reverse().toString();
    // Le quito las "," con un remplace dentro del for
    // Lo igualo a -1 ya que tiene una coma menos que el número total de letras
    for (var i = 0; i < ((fraserReverse.length)-1); i++) {
      fraserReverse=fraserReverse.replace(",","");
    };
    // Comparo las dos frases.
    if(texto==fraserReverse){
      // Si el resultado es positivo
      return true;
    }
    else{
      // Si el resultado es negativo
      return false;
    }
    // Muestro el el resultado
  //   document.write("Tu frase "+resultado);
  }
  // Llamo a la función comparación con el parámetro del user
//   console.log(palindrome('Anita lava la tina'));

/* Kata 6: Crea una función llamada longestCountry(), esta función recibirá de parámetro un arreglo con nombres de distintos países, la función deberá retornar el país con mayor número de letras.
Por ejemplo, del siguiente arreglo de países:
const paises = ["México", "Panamá", "Guatemala", "El Salvador"]
El Salvador es el país con mayor número de letras. */

function longestCountry(){
    // se tiene el arreglo
    const paises = ["México", "Panamá", "republica del salvador", "El Salvador"];
    // se genera un for para iterar lo que se encuentra dentro del arreglo
    for (let i=0; i<paises.length; i++){
            pais = paises[i];
            // console.log(`Estos son los paises del arreglo ${pais} y estos la cantidad de caracteres ${pais.length}`); // se imprime en cosola el pais
            tamanoPais=pais.length;    
    };

    sizePais =Math.max(pais.length);
    // console.log(`Este es el pais con el mayor nombre ${sizePais}`);
       return sizePais;
        
    }
// console.log(longestCountry())

//* kata 7: Crea una función llamada time() que calcule el tiempo necesario para que un automóvil que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km. (Tiempo = distancia/velocidad)

function time(d,v){
    v= v/1000;
    let tiempo = (d/v)
    let horas = tiempo/1
    console.log(horas) 
    return tiempo;  

}

console.log(time(120,73000));
