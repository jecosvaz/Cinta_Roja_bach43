// objetos literales

let persona = {
    // atributos
    // llave: valor
    nombre: 'Mauricio',
    Apellido: 'Ochoa',
    edad: 21,
    pais: 'México',

    // metodos
    saludo () {
        console.log('que hay man');

    },
// ECMA 5
    despedir(){
        console.log('Adios vaquero');
    },
// ECMA 6 vanila
    gritar: function(){

        console.log('estoy gritando');
    },

// ECMA 6
    correr:() =>{
        console.log('estoy corriendo');
    },


};

console.log(persona);
console.log(persona.Apellido);
console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.pais);
console.log(persona.despedir());

let perrito ={
    // atributos
    raza:'Mestizo',
    Nombre: 'Pechocho',
    pelo:'Corto',

    // metodos

    Trucos:()=>{
        console.log('Da la pata')
     
    },

    ladrar:()=>{

        
    }


}