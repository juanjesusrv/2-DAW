<?php
/**
 * Clase para representar una mesa en el restaurante.
 */

class Mesa{
    /**
     * Número de la mesa.
     * @var int
     */
    public int $numero;

    /**
     * Capacidad de la mesa.
     * @var int
     */
    public int $capacidad;

    /**
     * Indica si la mesa está disponible.
     * @var bool
     */
    public bool $disponible;
    

    /**
     * Constructor de la clase.
     * @param int $numero Número de la mesa.
     * @param int $capacidad Capacidad de la mesa.
     */
    public function __construct($numero, $capacidad){
        $this->numero = $numero;
        $this->capacidad = $capacidad;
        $this->disponible = true;
    }


    /**
     * Reserva la mesa.
     * @return void
     */
    public function reservar(){
        $this->disponible = false;
    }


    /**
     * Libera la mesa.
     * @return void.
     */
    public function liberar(){
        $this->disponible = true;
    }

    /**
     * Comprueba si la mesa está disponible.
     * @return bool. True si la mesa está disponible, false en caso contrario.
     */
    public function estaDisponible(){
        return $this->disponible;
    }

}

/**
 * Clase para representar un cliente del restaurante.
 */
class Cliente{
    
    /**
     * Nombre del cliente.
     * @var string.
     */
    public string $nombre;

    /**
     * Teléfono del cliente.
     * @var string.
     */
    public string $telefono;

    /**
     * Constructor de la clase.
     * @param string $nombre Nombre del cliente.
     * @param string $telefono Teléfono del cliente.
     */
    public function __construct($nombre, $telefono){
        $this->nombre = $nombre;
        $this->telefono = $telefono;
    }

    /**
     * Devuelve una representación textual del cliente.
     * @return string. Representación textual del cliente.
     */
    public function __toString()
    {
        return "El cliente " . $this->nombre . " con teléfono " . $this->telefono;
    }
}

/**
 * Clase para representar una reserva en el restaurante.
 */
class Reserva {

    /**
     * Cliente que ha realizado la reserva.
     * @var Cliente
     */
    public Cliente $cliente;

    /**
     * Mesa reservada.
     * @var Mesa
     */
    public Mesa $mesa;

    /**
     * Fecha y hora de la reserva.
     * @var DateTime
     */
    public DateTime $fechaHora;

    /**
     * Constructor de la clase.
     * @param Cliente $cliente Cliente que ha realizado la reserva.
     * @param Mesa $mesa Mesa reservada.
     * @param DateTime $fechaHora Fecha y hora de la reserva.
     */
    public function __construct(Cliente $cliente, Mesa $mesa, DateTime $fechaHora) {
        $this->cliente = $cliente;
        $this->mesa = $mesa;
        $this->fechaHora = $fechaHora;
    }

    /**
     * Devuelve una representación textual de la reserva.
     * @return string. Representación textual de la reserva.
     */
    public function __toString() {
        return "Reserva para " . $this->cliente . " en la mesa " . $this->mesa . " el " . $this->fechaHora->format('Y-m-d H:i:s');
    }
}

/**
 * Clase para representar un restaurante.
 */
class Restaurante {

    /**
     * Nombre del restaurante.
     * @var string
     */
    public string $nombre;

    /**
     * Mesas del restaurante.
     * @var array
     */
    public array $mesas;

    /**
     * Reservas del restaurante.
     * @var array
     */
    public array $reservas;

    /**
     * Constructor de la clase.
     * @param string $nombre Nombre del restaurante.
     */
    public function __construct($nombre) {
        $this->nombre = $nombre;
        $this->mesas = [];
        $this->reservas = [];
    }

    /**
     * Agrega una mesa al restaurante.
     * @param Mesa $mesa Mesa a agregar.
     * @return void
     */
    public function agregarMesa(Mesa $mesa) {
        $this->mesas[] = $mesa;
    }

    /**
     * Muestra las mesas disponibles del restaurante.
     * @return array. Mesas disponibles.
     */
    public function mostrarMesasDisponibles() {
        $disponibles = array_filter($this->mesas, function($mesa) {
            return $mesa->estaDisponible();
        });
        return $disponibles;
    }

    /**
     * Realiza una reserva en el restaurante.
     * @param Cliente $cliente Cliente que realiza la reserva.
     * @param int $capacidadRequerida Capacidad requerida para la reserva.
     * @param DateTime $fechaHora Fecha y hora de la reserva.
     * @return Reserva. Reserva realizada.
     */
    public function hacerReserva(Cliente $cliente, $capacidadRequerida, DateTime $fechaHora) {
        foreach ($this->mesas as $mesa) {
            if ($mesa->estaDisponible()) {
                $mesa->disponible = false;
                $reserva = new Reserva($cliente, $mesa, $fechaHora);
                $this->reservas[] = $reserva;
                return $reserva;
            }
        }
        return null; // No hay mesas disponibles
    }
}
?>