function hola(nombre, fn_cb) {
    setTimeout(function() {
        console.log(`Hola soy ${nombre}.`)
        fn_cb(nombre)
    }, 3000);
}

function hablar(fn_cb) {
    setTimeout(() => {
        console.log(`blaaaaaa....`)
        fn_cb()
    }, 1000);
}

function adios(nombre) {
    console.log(`Adios ${nombre} !`);
    console.log(`Finalizando la conversación con ${nombre} !`);
}

function dialogar(nombre, numVeces) {

    if (numVeces > 0) {
        hablar(function() {
            dialogar(nombre, --numVeces);
        })
    } else {
        adios(nombre);
    }
}

console.log('Inicializando conversación...');
//Funcion tipo expresiva
hola('Xavier', function(nombre) {
    dialogar(nombre, 4);
})

//funcion Flecha
//hola('Xavier', () => console.log('Finalizando conversación.'))