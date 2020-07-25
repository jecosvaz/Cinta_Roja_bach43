class Animal{
    constructor(cantidadOjos, especie, edad){
        this.cantidadOjos=cantidadOjos;
        this.especie=especie;
        this.edad=edad;

    };
    comunicar(){
        return console.log('Me estoy comunicando');
    };

    alimentar(){
        return console.log('Me estoy alimentando');
    }

};

let animalBasico1=new Animal(2,'ave',2);

class Mascota{
    constructor(cantidadOjos, especie, duenio, direccion, estaVacunado){
     this.cantidadOjos=cantidadOjos;
     this.especie=especie;
     this.duenio=duenio;
     this.direccion=direccion;
     this.estaVacunado=estaVacunado;   
    };
    
}