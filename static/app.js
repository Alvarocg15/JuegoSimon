const botonVerde = document.querySelector('.boton-izq-sup');
const botonRojo = document.querySelector('.boton-dcha-sup');
const botonAmarillo = document.querySelector('.boton-izq-inf');
const botonAzul = document.querySelector('.boton-dcha-inf');


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
        } else if (boton === botonRojo) {
            boton.className += 'activoRojo';
        } else if (boton === botonAmarillo) {
            boton.className += 'activoAmarillo';
        } else if (boton === botonAzul) {
            boton.className += 'activoAzul';
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
        }, 1000);
    });
};

let juega = false;
let marcador = 0;
const botonPulsado = botonPulsado => {
    if(!juega) return;
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
        alert('¡¡¡Has Perdido!!! \nTu resultado ha sido:'+ marcador);
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
    empiezaRonda();
}