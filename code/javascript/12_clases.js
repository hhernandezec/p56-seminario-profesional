class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        if (this.altura > 1.70) {
            console.log(`Mi altura es ${this.altura} y soy alto`);
        } else {
            console.log(`Mi altura es ${this.altura} y no soy alto`);
        }
    }
}

obj1 = new Persona('Xavier', 'Hernandez', 1.70);
obj1.saludar();
obj1.soyAlto();

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy deportista`);
    }
}
obj2 = new Deportista('Xavier', 'Hernandez', 1.70);
//obj2.altura = 1.70
obj2.saludar()