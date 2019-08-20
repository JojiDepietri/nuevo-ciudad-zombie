/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover: function(tecla, movX, movY) {
    if (tecla == 'izq' || tecla == 'der') {
      this.ancho = 30;
      this.alto = 15;
    } else {
      this.ancho = 15;
      this.alto = 30;
    };

    switch (tecla) {
      case 'izq': this.sprite = 'imagenes/auto_rojo_izquierda.png';
      break;
      case 'der': this.sprite = 'imagenes/auto_rojo_derecha.png';
      break;
      case 'arriba': this.sprite = 'imagenes/auto_rojo_arriba.png';
      break;
      default: this.sprite = 'imagenes/auto_rojo_abajo.png';
      break;
    };

    this.x += movX;
    this.y += movY;
  },
  perderVidas: function(potencia) {
    this.vidas -= potencia;
    console.log('Al jugador le quedan' + this.vidas + 'vidas');
  }
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
