//requireds
const fs = require('fs');
const colors = require('colors');

//propia de nodejs

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base}no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });
    });
}

let listarTabla = (base, limite = 10) => {

    console.log('========================='.green);
    console.log('Tabla multiplicar'.red);
    console.log('========================='.blue);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}\n`);
        }

    });
}

//otra forma cuando hay muchas funciones
module.exports = {
    crearArchivo,
    listarTabla
}