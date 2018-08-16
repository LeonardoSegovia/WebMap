export default class WebMap {
    constructor (nombreMapa) {
      this.nombre = nombreMapa
    }
  
    initialize () {
      console.log(`Initializing ${this.nombre}`)
    }
}