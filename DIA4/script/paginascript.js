// ###################################
// ######### QUIZ #####
// ###################################

let ingredientes = 
[ 
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]


let hamburguesas =
[
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

let chefs =
[
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]



let categorias =
[
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]





let gastos = [];
let boleanito = true;
while (boleanito ==true) {
    let menu = prompt (`
======================================== 
Bienvenido al simulador de gastos de la cafetería
========================================
     1. Menu de hamburguesas
     2. Añadir
     3. Listar
     4. Eliminar
     5. Actualizar
     6. Consultar
     7. Salir

     
     seleccione una opcion:

`)

console.log ("Bienvenido al simulador de gastos de la cafetería")
console.log ("1. Menu de hamburguesas")
console.log ("2. Añadir")
console.log ("3. Listar")
console.log ("4. Eliminar")
console.log ("5. Actualizar")
console.log ("6. Consultar")
console.log ("7. Salir")




let opcion= prompt ("seleccione una opcion:")

if (opcion == "1") {

let menudehamburguesa = prompt(`
=============================================
      Menu de Hamburguesas
=============================================
     1.Hamburguesa Clasica
      nombre: Clásica
      categoria:  Clásica
      ingredientes: Pan, Carne de res, Queso cheddar, Lechuga, Tomate, Cebolla, Mayonesa, Ketchup.
      precio: 10
      chef: ChefA
=============================================
     2.Hamburguesa Vegetariana
      nombre: Vegetariana,
      categoria: Vegetariana,
      ingredientes: Pan integral,Hamburguesa de lentejas, Queso suizo, Espinacas, Cebolla morada, Aguacate, Mayonesa vegana.
      precio: 8
      chef: ChefB
=============================================
     3.Hamburguesas Premium

      nombre: Doble Carne
      categoria: Gourmet
      ingredientes: Pan de sésamo, Doble carne de res, Queso cheddar, Bacon, Lechuga, Cebolla caramelizada, Salsa BBQ.
      precio: 12,
      chef:  ChefC

    
   `)

   console.log(menudehamburguesa);

    let opcion = prompt("Escoje tu hamburguesa");
    


} else if (opcion == "2") {

    // Añadir una nueva hamburguesa

    let Añadir = prompt(`

            1.hamburguesas
            2.Ingredientes
            3.Chefs
            4.Categorías
        
        `);

       
    let hamburguesa = prompt("Ingrese el nombre de la hamburguesa: ");
    let categoria = prompt("Ingrese la categoría de la hamburguesa: ");
    let ingredientes = prompt("Ingrese los ingredientes de la hamburguesa (separados por comas): ");
    let precio = parseFloat(prompt("Ingrese el precio de la hamburguesa: "));
    let chef = prompt("Ingrese el nombre del chef que preparó la hamburguesa: ");
    
    let dic ={
        "nombre": hamburguesa,
        "categoria": categoria,
        "ingredientes": ingredientes.split(",").map(ing => ing.trim()),
        "precio": precio,
        "chef": chef
    }
   

      gastos.push(dic);

    
      // Añadir un nuevo ingrediente

      let ingrediente = prompt("Ingrese el nombre del ingrediente: ");
      let descripcion = prompt("Ingrese la descripción del ingrediente: ");
      let precioIngrediente = parseFloat(prompt("Ingrese el precio del ingrediente: "));
      let stock = parseInt(prompt("Ingrese el stock del ingrediente: "));
      
      
      let dicIngrediente = {
            "nombre": ingrediente,
            "descripcion": descripcion,
            "precio": precioIngrediente,
            "stock": stock
        };

        gastos.push(dicIngrediente);


        // Añadir un nuevo chef

        let nombreChef = prompt("Ingrese el nombre del chef: ");
        let especialidad = prompt("Ingrese la especialidad del chef: ");

        let dicChef = {
            "nombre": nombreChef,
            "especialidad": especialidad
        };

        gastos.push(dicChef);
    

        // Añadir una nueva categoría

        let nombreCategoria = prompt("Ingrese el nombre de la categoría: ");
        let descripcionCategoria = prompt("Ingrese la descripción de la categoría: ");
        let dicCategoria = {
            "nombre": nombreCategoria,
            "descripcion": descripcionCategoria
        };

        gastos.push(dicCategoria);

    }else if opcion == "3" 

let eliminar = prompt(`

 Eliminar
=============================================
    A continuacion ingrese una opcion: 
    
    1. Ingrediente
    2. Categoria
    3. Hamburguesa
    4. Chef
    5. Regresar
=============================================`)
            /* SUBOPCION 1 */
            if (opcionEliminar == 1) {
                let eliminarIngredientes = `=============================================\n`;
                eliminarIngredientes += `Eliminar Ingredientes:\n`;
                eliminarIngredientes += `=============================================\n`;
                eliminarIngredientes += `A continuacion vera la lista de ingredientes: \n`;
                for (let i = 0; i < JSONIngredientes.length; i++) {
                    eliminarIngredientes += `- ${i + 1} \n Nombre: ${JSONIngredientes[i].nombre} \n Descripcion: ${JSONIngredientes[i].descripcion} \n Precio: ${JSONIngredientes[i].precio} \n Stock: ${JSONIngredientes[i].stock} \n _____________________________________________ \n `;
                };
                alert(eliminarIngredientes)
                let ingredienteEliminar = prompt(`Ingrese el nombre del ingrediente a eliminar: `)
                for (let i = 0; i < JSONIngredientes.length; i++) {
                    if (ingredienteEliminar === JSONIngredientes[i].nombre) {
                        JSONIngredientes.splice(i, 1);
                        alert("Ingrediente eliminado correctamente.");
                        encontrado = true
                    }
                }
                if (encontrado === false) {
                    alert("Ingrediente no encontrado.");
                };
            }
            /* SUBOPCION 2 */
            else if (opcionEliminar == 2) {
                let eliminarCategoria = `=============================================\n`;
                eliminarCategoria += `Eliminar Categoria:\n`;
                eliminarCategoria += `=============================================\n`;
                eliminarCategoria += `A continuacion vera la lista de categorias: \n`;
                for (let i = 0; i < JSONCategorias.length; i++) {
                    eliminarCategoria += `- ${i + 1} \n Nombre: ${JSONCategorias[i].nombre} \n Descripcion: ${JSONCategorias[i].descripcion}\n _____________________________________________ \n `;
                };
                alert(eliminarCategoria)
                let categoriaEliminar = prompt(`Ingrese el nombre del ingrediente a eliminar: `)
                for (let i = 0; i < JSONCategorias.length; i++) {
                    if (categoriaEliminar === JSONCategorias[i].nombre) {
                        JSONCategorias.splice(i, 1);
                        alert("Categoria eliminado correctamente");
                        encontrado = true
                    }
                }
                if (encontrado === false) {
                    alert("Categoria no encontrada");
                };
            }
            /* SUBOPCION 3 */
            else if (opcionEliminar == 3) {
                let eliminarHamburguesas = `=============================================\n`;
                eliminarHamburguesas += `Eliminar Hamburguesa:\n`;
                eliminarHamburguesas += `=============================================\n`;
                eliminarHamburguesas += `A continuacion vera la lista de categorias: \n`;
                for (let i = 0; i < JSONHamburguesas.length; i++) {
                    eliminarHamburguesas += `- ${i + 1} \n Nombre: ${JSONHamburguesas[i].nombre} \n Categoria: ${JSONHamburguesas[i].categoria}\n Ingredientes: ${JSONHamburguesas[i].ingredientes}\n Precio: ${JSONHamburguesas[i].precio}\n Chef: ${JSONHamburguesas[i].chef}\n _____________________________________________ \n `;
                };
                alert(eliminarHamburguesas)
                let HamburguesaEliminar = prompt(`Ingrese el nombre del ingrediente a eliminar: `)
                for (let i = 0; i < JSONHamburguesas.length; i++) {
                    if (HamburguesaEliminar === JSONHamburguesas[i].nombre) {
                        JSONHamburguesas.splice(i, 1);
                        alert("Hamburguesa eliminada correctamente");
                        encontrado = true
                    }
                }
                if (encontrado === false) {
                    alert("Hamburguesa no encontrada");
                };
            }
            /* SUBOPCION 4 */
            else if (opcionEliminar == 4) {
                let eliminarChefs = `=============================================\n`;
                eliminarChefs += `Eliminar Chef:\n`;
                eliminarChefs += `=============================================\n`;
                eliminarChefs += `A continuacion vera la lista de categorias: \n`;
                for (let i = 0; i < JSONChefs.length; i++) {
                    eliminarChefs += `- ${i + 1} \n Nombre: ${JSONChefs[i].nombre} \n Especialidad: ${JSONChefs[i].especialidad}\n  _____________________________________________ \n `;
                };
                alert(eliminarChefs)
                let chefEliminar = prompt(`Ingrese el nombre del ingrediente a eliminar: `)
                for (let i = 0; i < JSONChefs.length; i++) {
                    if (chefEliminar === JSONChefs[i].nombre) {
                        JSONChefs.splice(i, 1);
                        alert("Chef eliminado correctamente.");
                        encontrado = true
                    }
                }
                if (encontrado === false) {
                    alert("Chef no encontrado");
                };
            }
            /* SUBOPCION 5 */
            else if (opcionEliminar == 5) {
                alert(`Regresando...`)
                opcion = false
            }
            /* SUBOPCION  */
            else {
                alert(`Verifique la opcion ingresada...`)
                continue
            }
        
    
   

    

} else if (opcion == "4") {
    
    let categoria = prompt ("Ingrese la categoria de la hamburguesa: clásica, vegetariana, premium")

    let descripcion = prompt ("Ingrese la descripcion de la hamburguesa: ")

    let dic = {
        "categoria": categoria,
        "descripcion": descripcion
    };

    gastos.push(dic);









} else if (opcion == "5") {
    
    let actualizar = prompt("¿Desea actualizar su pedido? (si/no)");

    if (actualizar.toLowerCase() === "si") {
        let nuevoPedido = prompt("Ingrese los nuevos detalles de su pedido: ");
        console.log(`Pedido actualizado: ${nuevoPedido}`);
    } else {
        console.log("Pedido no actualizado.");
    }









} else if (opcion == "6") {
    
    
    let consultar = prompt (`

 1. Encontrar todos los ingredientes con stock menor a 400.
 2. Encontrar todas las hamburguesas de la categoría “Vegetariana”.
 3. Encontrar todos los chefs que se especializan en “Carnes”.
 4. Aumentar en 1.5 el precio de todos los ingredientes.
 5. Encontrar todas las hamburguesas preparadas por “ChefB”.
 6. Encontrar el nombre y la descripción de todas las categorías.
 7. Eliminar todos los ingredientes que tengan un stock de 0.
 8. Agregar un nuevo ingrediente a la hamburguesa “Clásica”.
 9. Encontrar todas las hamburguesas que contienen “Pan integral” como ingrediente.
 10. Cambiar la especialidad del “ChefC” a “Cocina Internacional”.
 11. Encontrar el ingrediente más caro.
 12. Encontrar las hamburguesas que no contienen “Queso cheddar” como ingrediente.
 13. Incrementar el stock de “Pan” en 100 unidades.
 14. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra “clásico”.
 15. Listar las hamburguesas cuyo precio es menor o igual a $9.
 16. Contar cuántos chefs hay en la base de datos.
 17. Encontrar todas las categorías que contienen la palabra “gourmet” en su descripción.
 18. Eliminar las hamburguesas que contienen menos de 5 ingredientes.
 19. Agregar un nuevo chef a la colección con una especialidad en “Cocina Asiática”.
 20. Listar las hamburguesas en orden ascendente según su precio.
 21. Encontrar todos los ingredientes cuyo precio sea entre $2 y $5.
 22. Actualizar la descripción del “Pan” a “Pan fresco y crujiente”.
 23. Encontrar todas las hamburguesas que contienen “Tomate” o “Lechuga” como ingredientes.
 24. Listar todos los chefs excepto “ChefA”.
 25. Incrementar en $2 el precio de todas las hamburguesas de la categoría “Gourmet”.
 26. Listar todos los ingredientes en orden alfabético.
 27. Encontrar la hamburguesa más cara.
 28. Agregar “Pepinillos” a todas las hamburguesas de la categoría “Clásica”.
 29. Eliminar todos los chefs que tienen una especialidad en “Cocina Vegetariana”.
 30. Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes.
 31. Encontrar la hamburguesa más cara que fue preparada por un chef especializado en “Gourmet”.
 32. Listar todos los ingredientes junto con el número de hamburguesas que los contienen.
 33. Listar los chefs junto con el número de hamburguesas que han preparado.
 34. Encuentra la categoría con la mayor cantidad de hamburguesas.
 35. Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado.
 36. Encontrar todos los ingredientes que no están en ninguna hamburguesa.
 37. Listar todas las hamburguesas con su descripción de categoría.
 38. Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total.
 39. Encontrar el precio promedio de las hamburguesas en cada categoría.
 40. Listar los chefs y la hamburguesa más cara que han preparado.

`)

console.log("1. Encontrar todos los ingredientes con stock menor a 400.")
console.log("2. Encontrar todas las hamburguesas de la categoría “Vegetariana”.")
console.log("3. Encontrar todos los chefs que se especializan en “Carnes”.")
console.log("4. Aumentar en 1.5 el precio de todos los ingredientes.")
console.log("5. Encontrar todas las hamburguesas preparadas por “ChefB”.")
console.log("6. Encontrar el nombre y la descripción de todas las categorías.")
console.log("7. Eliminar todos los ingredientes que tengan un stock de 0.")
console.log("8. Agregar un nuevo ingrediente a la hamburguesa “Clásica”.")
console.log("9. Encontrar todas las hamburguesas que contienen “Pan integral” como ingrediente.")
console.log("10. Cambiar la especialidad del “ChefC” a “Cocina Internacional”.")
console.log("11. Encontrar el ingrediente más caro.")
console.log("12. Encontrar las hamburguesas que no contienen “Queso cheddar” como ingrediente.")
console.log("13. Incrementar el stock de “Pan” en 100 unidades.")
console.log("14. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra “clásico”.")
console.log("15. Listar las hamburguesas cuyo precio es menor o igual a $9.")
console.log("16. Contar cuántos chefs hay en la base de datos.")
console.log("17. Encontrar todas las categorías que contienen la palabra “gourmet” en su descripción.")
console.log("18. Eliminar las hamburguesas que contienen menos de 5 ingredientes.")
console.log("19. Agregar un nuevo chef a la colección con una especialidad en “Cocina Asiática”.")
console.log("20. Listar las hamburguesas en orden ascendente según su precio.")
console.log("21. Encontrar todos los ingredientes cuyo precio sea entre $2 y $5.")
console.log("22. Actualizar la descripción del “Pan” a “Pan fresco y crujiente”.")
console.log("23. Encontrar todas las hamburguesas que contienen “Tomate” o “Lechuga” como ingredientes.")
console.log("24. Listar todos los chefs excepto “ChefA”.")
console.log("25. Incrementar en $2 el precio de todas las hamburguesas de la categoría “Gourmet”.")
console.log("26. Listar todos los ingredientes en orden alfabético.")
console.log("27. Encontrar la hamburguesa más cara.")
console.log("28. Agregar “Pepinillos” a todas las hamburguesas de la categoría “Clásica”.")
console.log("29. Eliminar todos los chefs que tienen una especialidad en “Cocina Vegetariana”.")
console.log("30. Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes.")
console.log("31. Encontrar la hamburguesa más cara que fue preparada por un chef especializado en “Gourmet”.")
console.log("32. Listar todos los ingredientes junto con el número de hamburguesas que los contienen.")
console.log("33. Listar los chefs junto con el número de hamburguesas que han preparado.")
console.log("34. Encuentra la categoría con la mayor cantidad de hamburguesas.")
console.log("35. Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado.")
console.log("36. Encontrar todos los ingredientes que no están en ninguna hamburguesa.")
console.log("37. Listar todas las hamburguesas con su descripción de categoría.")
console.log("38. Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total.")
console.log("39. Encontrar el precio promedio de las hamburguesas en cada categoría.")
console.log("40. Listar los chefs y la hamburguesa más cara que han preparado.")

}else if (opcion == "7") {
    console.log("Gracias por usar el simulador de gastos de la cafetería. ¡Hasta luego!");
    boleanito = false;
} else
    console.log("Opción no válida. Por favor, intente nuevamente.")
}