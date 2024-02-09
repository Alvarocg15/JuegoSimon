const botonVerde = document.querySelector('.boton-izq-sup');
const botonRojo = document.querySelector('.boton-dcha-sup');
const botonAmarillo = document.querySelector('.boton-izq-inf');
const botonAzul = document.querySelector('.boton-dcha-inf');

const secuencia = [
    botonVerde,
    botonRojo,
    botonAmarillo,
    botonAzul
];

const flash = (boton) => {
    return new Promise((resolve, reject) => {
        console.log(boton);
        if (boton == botonVerde) {
            boton.className += 'activoVerde';
        } else if (boton == botonRojo) {
            boton.className += 'activoRojo';
        } else if (boton == botonAmarillo) {
            boton.className += 'activoAmarillo';
        } else if (boton == botonAzul) {
            boton.className += 'activoAzul';
        } else {
            console.log('Algo ha fallado en la activación del botón');
        }

        setTimeout(() => {
            if (boton == botonVerde) {
                boton.className = boton.className.replace(
                    'activoVerde',
                    ''
                );
            } else if (boton == botonRojo) {
                boton.className = boton.className.replace(
                    'activoRojo',
                    ''
                );
            } else if (boton == botonAmarillo) {
                boton.className = boton.className.replace(
                    'activoAmarillo',
                    ''
                );
            } else if (boton == botonAzul) {
                boton.className = boton.className.replace(
                    'activoAzul',
                    ''
                );
            } else {
                console.log('Algo ha fallado en la desactivación del botón');
            }
            resolve();
        }, 1000);
    });
};

const main = async () => {
    for (const boton of secuencia) {
        await flash(boton);
    }
};

main();