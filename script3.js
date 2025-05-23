const cocteles = [
    ["Mojito", ["Ron blanco", "Hojas de menta", "Lima", "Azúcar", "Agua con gas"], "Mezcla en un vaso el azúcar y el jugo de lima. Añade las hojas de menta y machácalas ligeramente. Agrega el ron y el agua con gas. Remueve bien y sirve con hielo. Decora con una ramita de menta y una rodaja de lima."],
    ["Piña Colada", ["Ron blanco", "Crema de coco", "Zumo de piña", "Hielo"], "Mezcla en una licuadora el ron, la crema de coco, el zumo de piña y el hielo. Bate hasta obtener una mezcla suave y homogénea. Sirve en un vaso alto y decora con una rodaja de piña y una cereza en un palillo."],
    ["Daiquiri de Fresa", ["Ron blanco", "Zumo de limón", "Jarabe de fresa", "Fresas frescas", "Hielo"], "Tritura las fresas en una licuadora. Añade el ron, el zumo de limón, el jarabe de fresa y el hielo. Bate hasta obtener una mezcla suave. Sirve en una copa de cóctel y decora con una fresa en el borde del vaso."],
    ["Margarita", ["Tequila", "Triple sec", "Zumo de lima", "Sal", "Hielo"], "Humedece el borde de una copa de cóctel y pásala por sal para escarcharla. En una coctelera, mezcla el tequila, el triple sec, el zumo de lima y el hielo. Agita bien y cuela la mezcla en la copa preparada. Decora con una rodaja de lima en el borde."]
];

function buscarCoctelPorNombre() {
    let nombre = document.getElementById("nombreCoctel").value.toLowerCase();
    let encontrado = false;
    let resultado = document.getElementById("resultado");

    // Buscar el cóctel en el array
    for (let i = 0; i < cocteles.length; i++) {
        if (cocteles[i][0].toLowerCase() === nombre) {
            // Si encuentra el cóctel, mostrar el nombre, ingredientes e instrucciones
            resultado.innerHTML = `<strong>Nombre:</strong> ${cocteles[i][0]}<br>
                                    <strong>Ingredientes:</strong><ul><li>${cocteles[i][1].join("</li><li>")}</li></ul>
                                    <strong>Instrucciones:</strong> ${cocteles[i][2]}`;
            console.log(`Nombre: ${cocteles[i][0]}`);
            console.log(`Ingredientes: ${cocteles[i][1].join(", ")}`);
            console.log(`Instrucciones: ${cocteles[i][2]}`);
            encontrado = true;
            break;
        }
    }

    // Si no encuentra el cóctel, mostrar un mensaje indicando que no está disponible
    if (!encontrado) {
        resultado.textContent = "Lo siento, el cóctel no está disponible.";
        console.log("Lo siento, el cóctel no está disponible.");
    }
}
