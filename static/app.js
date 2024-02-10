const botonVerde = document.querySelector('.boton-izq-sup');
const botonRojo = document.querySelector('.boton-dcha-sup');
const botonAmarillo = document.querySelector('.boton-izq-inf');
const botonAzul = document.querySelector('.boton-dcha-inf');

var select = document.getElementById('dificultad');
var velocidad;

select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
    velocidad = selectedOption.value;
  });

const getBotonAleatorio = () => {
    const botones = [
        botonVerde,
        botonRojo,
        botonAmarillo,
        botonAzul
    ];
    return botones[parseInt(Math.random() * botones.length)];
}

const secuencia = [
    getBotonAleatorio()
];
let secuenciaAAdivinar = [...secuencia];

const flash = boton => {
    return new Promise((resolve) => {
        if (boton === botonVerde) {
            boton.className += 'activoVerde';
            let audio = document.getElementById('audioVerde');
            audio.play();
        } else if (boton === botonRojo) {
            boton.className += 'activoRojo';
            let audio = document.getElementById('audioRojo');
            audio.play();
        } else if (boton === botonAmarillo) {
            boton.className += 'activoAmarillo';
            let audio = document.getElementById('audioAmarillo');
            audio.play();
        } else if (boton === botonAzul) {
            boton.className += 'activoAzul';
            let audio = document.getElementById('audioAzul');
            audio.play();
        } else {
            console.log('Algo ha fallado en la activación del botón');
        }

        setTimeout(() => {
            if (boton === botonVerde) {
                boton.className = boton.className.replace(
                    'activoVerde',
                    ''
                );
            } else if (boton === botonRojo) {
                boton.className = boton.className.replace(
                    'activoRojo',
                    ''
                );
            } else if (boton === botonAmarillo) {
                boton.className = boton.className.replace(
                    'activoAmarillo',
                    ''
                );
            } else if (boton === botonAzul) {
                boton.className = boton.className.replace(
                    'activoAzul',
                    ''
                );
            } else {
                console.log('Algo ha fallado en la desactivación del botón');
            }
            setTimeout(() => {
                resolve();
            },250);
        }, velocidad);
    });
};

let juega = false;
let marcador = 0;
const botonPulsado = botonPulsado => {
    if(!juega) return;
    if (botonPulsado === botonVerde) {
        botonPulsado.className += 'activoVerde';
        let audio = document.getElementById('audioVerde');
        audio.play();
    } else if (botonPulsado === botonRojo) {
        botonPulsado.className += 'activoRojo';
        let audio = document.getElementById('audioRojo');
        audio.play();
    } else if (botonPulsado === botonAmarillo) {
        botonPulsado.className += 'activoAmarillo';
        let audio = document.getElementById('audioAmarillo');
        audio.play();
    } else if (botonPulsado === botonAzul) {
        botonPulsado.className += 'activoAzul';
        let audio = document.getElementById('audioAzul');
        audio.play();
    } else {
        console.log('Algo ha fallado en la activación del botón');
    }

    setTimeout(() => {
        if (botonPulsado === botonVerde) {
            botonPulsado.className = botonPulsado.className.replace(
                'activoVerde',
                ''
            );
        } else if (botonPulsado === botonRojo) {
            botonPulsado.className = botonPulsado.className.replace(
                'activoRojo',
                ''
            );
        } else if (botonPulsado === botonAmarillo) {
            botonPulsado.className = botonPulsado.className.replace(
                'activoAmarillo',
                ''
            );
        } else if (botonPulsado === botonAzul) {
            botonPulsado.className = botonPulsado.className.replace(
                'activoAzul',
                ''
            );
        } else {
            console.log('Algo ha fallado en la desactivación del botón');
        }
        },250);

    const botonAAdivinar = secuenciaAAdivinar.shift();
    if (botonAAdivinar === botonPulsado) {
        if (secuenciaAAdivinar.length === 0){
            secuencia.push(getBotonAleatorio());
            secuenciaAAdivinar = [...secuencia];
            setTimeout(() =>{
                empiezaRonda();
            },1000);
            marcador++;
        } 
    } else {
        confirm('¡¡¡Has Perdido!!! \nTu resultado ha sido:'+ marcador);
        // secuencia.length = 0;
    }
};
 
const empiezaRonda = async () => {
    juega = false;
    for (const boton of secuencia) {
        await flash(boton);
    }
    juega = true;
};

const empiezaJuego = async () => {
    if (velocidad === undefined){
        alert("ERROR. Selecciona una dificultad antes de empezar a jugar.")
    } else {
        empiezaRonda();
        console.log(velocidad);
    }
    console.log(dificultad);
    console.log(velocidad);
}