document.addEventListener("DOMContentLoaded", function () {

    const productos = [
        ["zamburiñas", 3.5],
        ["mejillones", 3.5],
        ["gambas", 3.5],
        ["vino blanco", 3.5],
        ["cerveza Victoria", 3.5]
    ];

    class Mesas {
        constructor(numMesas) {
            console.log("Inicializando las mesas...");
            this.mesas = [];
            this.mesasOcupadas = 0;

            for (let i = 1; i <= numMesas; i++) {
                let mesa = new Mesa(i, 0);
                this.mesas.push(mesa);
            }

            console.log("Mesas inicializadas:", this.mesas);
        }

        get MesasOcupadas() {
            console.log("Número de mesas ocupadas:", this.mesasOcupadas);
            return this.mesasOcupadas;
        }

        ocuparMesa(nMesa, nComensales) {
            console.log(`Intentando ocupar la mesa ${nMesa} con ${nComensales} comensales.`);
            
            // Validar que el número de mesa esté entre 1 y 18
            if (nMesa < 1 || nMesa > 18) {
                this.agregarMensaje("Error: El número de mesa debe estar entre 1 y 18.");
                console.log("Error: Mesa fuera de rango");
                return;
            }

            if (nComensales < 1) {
                this.agregarMensaje("Error: El número de comensales debe ser mayor que 0.");
                console.log("Error: Número de comensales inválido");
                return;
            }

            // Restar 1 al número de mesa porque los índices de los arrays comienzan desde 0
            nMesa = nMesa - 1;

            // Intentar ocupar la mesa
            if (this.mesas[nMesa].comensales === 0 || this.mesas[nMesa].comensales == "") {
                this.mesas[nMesa].NumeroClientes = nComensales;
                this.mesasOcupadas++;
                console.log(`Mesa ${nMesa + 1} ocupada con ${nComensales} comensales.`);
                this.agregarMensaje(`Mesa ${nMesa + 1} ocupada con ${nComensales} comensales.`);
                this.agregarMensaje(`Número total de mesas ocupadas: ${this.mesasOcupadas}`);
            } else {
                console.log(`La mesa ${nMesa + 1} ya está ocupada.`);
                this.agregarMensaje(`La mesa ${nMesa + 1} ya está ocupada.`);
            }
        }

        borrarMesa(nMesa) {
            console.log(`Intentando borrar la mesa ${nMesa}...`);
        
            // Validar que el número de mesa esté entre 1 y 18
            if (nMesa < 1 || nMesa > 18) {
                this.agregarMensaje("Error: El número de mesa debe estar entre 1 y 18.");
                console.log("Error: Mesa fuera de rango");
                return;
            }
        
            // Restar 1 al número de mesa porque los índices de los arrays comienzan desde 0
            nMesa = nMesa - 1;
        
            // Borrar la mesa
            if (this.mesas[nMesa].comensales > 0) {
                this.mesas[nMesa].BorrarMesa();  // Aquí es donde se llama a BorrarMesa
                this.mesasOcupadas--;
                console.log(`Mesa ${nMesa + 1} ha sido borrada.`);
                this.agregarMensaje(`La mesa ${nMesa + 1} ha sido pagada y desocupada.`);
                this.agregarMensaje(`Número total de mesas ocupadas: ${this.mesasOcupadas}`);
            } else {
                console.log(`La mesa ${nMesa + 1} ya está vacía.`);
                this.agregarMensaje(`La mesa ${nMesa + 1} ya está vacía.`);
            }
        }
        

        cambiarComensales(nMesa, nComensales) {
            console.log(`Cambiando número de comensales para la mesa ${nMesa} a ${nComensales}.`);

            // Validar que el número de mesa esté entre 1 y 18
            if (nMesa < 1 || nMesa > 18) {
                this.agregarMensaje("Error: El número de mesa debe estar entre 1 y 18.");
                console.log("Error: Mesa fuera de rango");
                return;
            }

            // Restar 1 al número de mesa porque los índices de los arrays comienzan desde 0
            nMesa = nMesa - 1;

            // Cambiar número de comensales en la mesa
            this.mesas[nMesa].NumeroClientes = nComensales;
            console.log(`Número de comensales en la mesa ${nMesa + 1} actualizado a ${nComensales}.`);
            this.agregarMensaje(`Número de comensales en la mesa ${nMesa + 1} actualizado a ${nComensales}.`);
        }
       
        verComandaMesa(nMesa) {
            console.log(`Mostrando comanda de la mesa ${nMesa}...`);
       
            // Validar que el número de mesa esté entre 1 y 18
            if (nMesa < 1 || nMesa > 18) {
                this.agregarMensaje("Error: El número de mesa debe estar entre 1 y 18.");
                console.log("Error: Mesa fuera de rango");
                return;
            }

            // Restar 1 al número de mesa porque los índices de los arrays comienzan desde 0
            nMesa = nMesa - 1;

            // Mostrar la comanda de la mesa
            let comanda = this.mesas[nMesa].ComandaMesa;
            console.log(`Comanda de la mesa ${nMesa + 1}:`, comanda);
            this.agregarMensaje(`Comanda de la mesa ${nMesa + 1}:`);
            comanda.forEach(producto => {
                console.log(`Producto: ${producto}`);
                this.agregarMensaje(producto);
            });
        }

        verComandaCliente(nMesa, idCliente) {
            console.log(`Mostrando comanda del cliente ${idCliente} en la mesa ${nMesa}...`);

            // Validar que el número de mesa esté entre 1 y 18
            if (nMesa < 1 || nMesa > 18) {
                this.agregarMensaje("Error: El número de mesa debe estar entre 1 y 18.");
                console.log("Error: Mesa fuera de rango");
                return;
            }

            // Restar 1 al número de mesa porque los índices de los arrays comienzan desde 0
            nMesa = nMesa - 1;

            // Buscar el cliente en la mesa
            let clienteEncontrado = false;
            this.mesas[nMesa].clientes.forEach(cliente => {
                if (cliente.CodigoCliente === idCliente) {
                    console.log(`Comanda del cliente ${idCliente}:`, cliente.ComandaCliente);
                    this.agregarMensaje(`Comanda del cliente ${idCliente}:`);
                    cliente.ComandaCliente.forEach(producto => {
                        console.log(`Producto: ${producto[0]}, Precio: ${producto[1]}`);
                        this.agregarMensaje(`${producto[0]}: ${producto[1]}€`);
                    });
                    clienteEncontrado = true;
                }
            });

            if (!clienteEncontrado) {
                console.log(`Cliente ${idCliente} no encontrado en la mesa ${nMesa + 1}.`);
                this.agregarMensaje(`Cliente ${idCliente} no encontrado en la mesa ${nMesa + 1}.`);
            }
        }

        agregarMensaje(mensaje) {
            const output = document.getElementById("output");
            const mensajeElemento = document.createElement("div");
            mensajeElemento.classList.add("message-box"); // Añadimos la clase de estilo
            mensajeElemento.textContent = mensaje; // Añadimos el texto al elemento

            // Insertamos el mensaje al final
            output.appendChild(mensajeElemento);

            // Desplazamos el scroll hacia abajo
            output.scrollTop = output.scrollHeight;
        }
    }

    class cliente {
        constructor(cod) {
            this.codigo = cod;
            this.comandaCliente = [];
        }

        get CodigoCliente() {
            return this.codigo;
        }

        get ComandaCliente() {
            return this.comandaCliente;
        }

        set ComandaCliente(com) {
            this.comandaCliente = com;
        }
    }

    class Mesa {
        constructor(nMesa, comens) {
            this.numMesa = nMesa;
            this.comensales = comens;
            this.clientes = [];

            console.log(`Creando mesa ${nMesa} con ${comens} comensales.`);

            if (comens > 0) {
                for (let i = 0; i < comens; i++) {
                    let nuevoCliente = new cliente(this.generarCodigoComensal(i));
                    this.clientes.push(nuevoCliente);
                }
            }
        }

        generarCodigoComensal(cod) {
            return `${this.numMesa}-${this.comensales}-${cod + 1}`;
        }

        get UbicacionMesa() {
            return "El número de la mesa es: " + this.numMesa;
        }

        set UbicacionMesa(nMesa) {
            this.numMesa = nMesa;
        }

        get NumeroClientes() {
            return this.comensales;
        }

        set NumeroClientes(nComensales) {
            if (nComensales > this.comensales) { // Añade objetos cliente al array
                for (let i = this.comensales; i < nComensales; i++) {
                    /* Coge el codigo del ultimo comensal*/
                    let nuevoCodigo = this.clientes[this.clientes.length].CodigoCliente;
                    let nuevoCliente = new cliente(nuevoCodigo);
                }
            } else { // Elimina objetos cliente del array
                for (let i = this.comensales; i > nComensales; i--) { // Elimina los objetos cliente del array
                    this.clientes.pop(); // Elimina el último elemento del array
                }
            }

            this.comensales = nComensales;
        }

        BorrarMesa() {
            console.log(`Borrando mesa ${this.numMesa}...`);
            this.comensales = 0;
            this.clientes = [];
            console.log(`Mesa ${this.numMesa} vaciada.`);
        }

        addProducto(plato, codCliente) {
            // Buscar al cliente en la mesa
            let cliente = this.clientes.find(c => c.CodigoCliente === codCliente);
        
            if (!cliente) {
                console.log(`Cliente con código ${codCliente} no encontrado en la mesa ${this.numMesa}.`);
                return 0; // Devuelve 0 si el cliente no existe
            }
        
            // Buscar el plato en el listado de productos
            const productoEncontrado = productos.find(p => p[0].toLowerCase() === plato.toLowerCase());
        
            if (!productoEncontrado) {
                console.log(`El producto '${plato}' no está disponible.`);
                return 0; // Devuelve 0 si el producto no existe
            }
        
            // Añadir el producto a la comanda del cliente
            cliente.ComandaCliente.push(productoEncontrado);
            console.log(`Producto '${productoEncontrado[0]}' añadido al cliente ${codCliente} en la mesa ${this.numMesa}.`);
            return 1; // Devuelve 1 si la operación fue exitosa
        }

        verClientes() {
            if (this.clientes.length === 0) {
                console.log(`La mesa ${this.numMesa} no tiene clientes.`);
                return `La mesa ${this.numMesa} no tiene clientes.`;
            }
        
            let resultado = `Clientes en la mesa ${this.numMesa}:`;
            this.clientes.forEach(cliente => {
                resultado += `\n- Código: ${cliente.CodigoCliente}`;
            });
        
            console.log(resultado);
            return resultado;
        }
        
    }

    // Variables, constantes y objetos
    let mesas = new Mesas(18);

    // Eventos para los botones
    document.getElementById("ocuparMesa").addEventListener("click", function () {
        let mesa = prompt("Introduce el número de mesa que quieres ocupar");
        let comensales = prompt("Introduce el número de comensales");

        console.log(`Botón 'Ocupar Mesa' presionado. Mesa: ${mesa}, Comensales: ${comensales}`);
        mesas.ocuparMesa(mesa, comensales);
    });

    document.getElementById("borrarMesa").addEventListener("click", function () {
        let mesa = prompt("Introduce el número de mesa que deseas pagar");
        console.log(`Botón 'Pagar Mesa' presionado. Mesa: ${mesa}`);
        mesas.borrarMesa(mesa);
    });

    document.getElementById("cambiarComensales").addEventListener("click", function () {
        let mesa = prompt("Introduce el número de mesa para cambiar el número de comensales");
        let comensales = prompt("Introduce el nuevo número de comensales");
        console.log(`Botón 'Cambiar Comensales' presionado. Mesa: ${mesa}, Comensales: ${comensales}`);
        mesas.cambiarComensales(mesa, comensales);
    });

    document.getElementById("verComandaMesa").addEventListener("click", function () {
        let mesa = prompt("Introduce el número de mesa para ver la comanda completa");
        console.log(`Botón 'Ver Comanda Mesa' presionado. Mesa: ${mesa}`);
        mesas.verComandaMesa(mesa);
    });

    document.getElementById("verComandaCliente").addEventListener("click", function () {
        let mesa = prompt("Introduce el número de mesa");
        let clienteID = prompt("Introduce el ID del cliente");
        console.log(`Botón 'Ver Comanda Cliente' presionado. Mesa: ${mesa}, Cliente ID: ${clienteID}`);
        mesas.verComandaCliente(mesa, clienteID);
    });


    document.getElementById("añadirPlato").addEventListener("click", function() {
        console.log("Botón 'Añadir plato' clickeado");
    
        // Pedir al usuario el número de mesa
        let mesa = prompt("Introduce el número de mesa:");
    
        // Pedir al usuario el código del cliente
        let codCliente = prompt("Introduce el código del cliente (por ejemplo, 1-3-2):");
    
        // Pedir al usuario el nombre del plato que quiere añadir
        let plato = prompt("Introduce el nombre del plato (por ejemplo, 'zamburiñas'):");
    
        // Convertir el número de mesa a entero
        mesa = parseInt(mesa);
    
        // Comprobar si el número de mesa es válido
        if (mesa < 1 || mesa > 18) {
            alert("Número de mesa no válido. Debe estar entre 1 y 18.");
            return;
        }
    
        // Llamar a la función de añadir plato en la mesa
        let resultado = mesas.mesas[mesa - 1].addProducto(plato, codCliente);
    
        // Mostrar el resultado en la interfaz
        if (resultado === 0) {
            console.log("No se pudo añadir el plato.");
            alert("No se pudo añadir el plato. Verifica que la mesa y el cliente son correctos.");
        } else {
            console.log("Plato añadido con éxito.");
            alert("Plato añadido con éxito.");
        }
    });

    document.getElementById("verClientesMesa").addEventListener("click", function () {
        let mesa = prompt("Introduce el número de la mesa para ver sus clientes:");
        mesa = parseInt(mesa);
    
        if (isNaN(mesa) || mesa < 1 || mesa > 18) {
            alert("Número de mesa no válido. Debe estar entre 1 y 18.");
            return;
        }
    
        const resultado = mesas.mesas[mesa - 1].verClientes();
        mesas.agregarMensaje(resultado);
    });
    
});