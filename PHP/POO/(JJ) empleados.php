<?php
abstract class Empleado {
    
    private String $nombre;
    private int $edad;
    private float $salario;

    public function __construct($nom, $eda, $sal) {
        $this->nombre = $nom;
        $this->edad = $eda;
        $this->salario = $sal;
    }

    public function mostrarDetalles() {
        echo "Nombre: " . $this->nombre . "<br>";
        echo "Edad: " . $this->edad . "<br>";
        echo "Salario: " . $this->salario . "<br>";
    }

    abstract public function trabajar();

    public function getNombre() {
        return $this->nombre;
    }

    public function getEdad() {
        return $this->edad;
    }

    public function getSalario() {
        return $this->salario;
    }

    public function setNombre($nom) {
        $this->nombre = $nom;
    }

    public function setEdad($eda) {
        $this->edad = $eda;
    }

    public function setSalario($sal) {
        $this->salario = $sal;
    }
}

class EmpleadoRemoto extends Empleado {
    
    private int $horasConexion;

    public function __construct($nom, $eda, $sal, $hc) {
        parent::__construct($nom, $eda, $sal);
        $this->horasConexion = $hc;
    }

    public function trabajar() {
        echo "El empleado remoto " . $this->getNombre() . " trabaja " . $this->horasConexion . " horas.<br>";
    }

    public function mostrarDetalles() {
        parent::mostrarDetalles();
        echo "Horas de conexión: " . $this->horasConexion . "<br>";
    }

    public function getHorasConexion() {
        return $this->horasConexion;
    }

    public function setHorasConexion($hc) {
        $this->horasConexion = $hc;
    }
}

class EmpleadoPresencial extends Empleado {
    
    private int $horasTrabajadas;

    public function __construct($nom, $eda, $sal, $ht) {
        parent::__construct($nom, $eda, $sal);
        $this->horasTrabajadas = $ht;
    }

    public function trabajar() {
        echo "El empleado presencial " . $this->getNombre() . " trabaja " . $this->horasTrabajadas . " horas.<br>";
    }

    public function mostrarDetalles() {
        parent::mostrarDetalles();
        echo "Horas trabajadas: " . $this->horasTrabajadas . "<br>";
    }

    public function getHorasTrabajadas() {
        return $this->horasTrabajadas;
    }

    public function setHorasTrabajadas($ht) {
        $this->horasTrabajadas = $ht;
    }
}

$empleado1 = new EmpleadoRemoto("Juan", 30, 1000, 10);
$empleado1->mostrarDetalles();
echo "<br>";
$empleado1->trabajar();

echo "<hr><br>";

$empleado2 = new EmpleadoPresencial("Ana", 25, 1200, 8);
$empleado2->mostrarDetalles();
echo "<br>";
$empleado2->trabajar();

?>