/*class Album {
title: string;
songs: string[];
constructor (title,songs:string[]) {
this.title = title;
this.songs = songs;
} 
}



class Banda {
    members: string [];
    albums: Album [];
    constructor(members: string[], albums: Album []) {
        this.members= members;
        this.albums = albums;
    }

}


function main () {
const unAlbum = new Album ("album de Lucas",[] );
const unaBanda = new Banda (["lucas"],[unAlbum,unAlbum]);
console.log(unaBanda.members);
console.log(unaBanda.albums);
}

main(); 1- Edificio, que debe tener:

un constructor que reciba un array de Piso y lo guarde en una propiedad.
un método addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento) que reciba 
un Departamento y lo ubique en el piso con el nombre indicado, si no existe un piso 
con ese nombre debe mostrar un error.
un método getDepartamentosByPiso(nombreDePiso:string) que devuelva todos los Departamento(s)
 de un piso.
2- Piso, que debe tener:

un constructor debe recibir el nombre de ese piso con formato de texto. Por ejemplo: "primer piso" y guardarlo en una propiedad nombre para poder usarla posteriormente.
un método pushDepartamento y getDepartamentos para agregar departamentos y obtener el listado completo de los departamentos de ese piso (ambos usan una propiedad interna departamentos para guardar y leer).
3- Departamento:

el constructor debe recibir el nombre de ese departamento con formato de texto. Por ejemplo: "mi depto".
debe tener un método getName() que devuelva el nombre del departamento.*/


class Departamento {
  nombre:string;
  constructor (nombre) {
    this.nombre = nombre
  }
  
  getName() {
    return this.nombre;
  }

}

class Piso {
  nombre: string;
  dptos: Departamento [];
constructor (nombre:string) {
  this.nombre = nombre;
  this.dptos = [];
}
pushDepartamento(dpto:Departamento) {
  return this.dptos.push(dpto)
}
getDepartamentos () {
return this.dptos;
}
}


class Edificio {
  pisos: Piso [];
  constructor (pisos:Piso []){
    this.pisos= pisos;
  }
  addDepartamentoToPiso (nombreDepiso:string, departamento: Departamento) {
    const pisoEncontrado = this.pisos.find(p=> p.nombre == nombreDepiso);
    return pisoEncontrado.pushDepartamento(departamento);

  }
  getDepartamentosByPiso (nombreDelPiso:string) {
    const pisoEncontrado = this.pisos.find(p=> p.nombre == nombreDelPiso);
    return pisoEncontrado.getDepartamentos()
  }
}

function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();

