// Se debe crear una calculadora para llegar al perímetro y área de las figuras geométricas.

// Cuadrados

function perimetroCuadrado(lado) {
    return lado * 4;
}
// perimetroCuadrado(12);

function areaCuadrado (lado) {
    return lado * lado;
}

// Triángulos

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Círculos

function diametroCirculo(radio) {
    return radio * 2
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área

function areaCirculo (radio){
    return (radio * radio) * PI;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`El perímetro del cuadrado es: ${perimetro}`);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(`El área del cuadrado es: ${area}`);
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById('InputTriangulo1');
    const lado2 = document.getElementById('InputTriangulo2');
    const base = document.getElementById('InputTriangulo3');
    const valueL1 = parseInt(lado1.value);
    const valueL2 = parseInt(lado2.value);
    const valueB = parseInt(base.value);

    const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
    alert(`El perímetro del triángulo es: ${perimetro}`);
}

function calcularAreaTriangulo() {
    const altura= document.getElementById("InputTriangulo1");
    const base = document.getElementById("InputTriangulo3");
    const valueAltura = parseInt(base.value);
    const valueBase = parseInt(altura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(`El área del triángulo es: ${area}`);
}

function calcularDiametroCirculo() {
    const radio = document.getElementById('InputCirculo');
    const valueRadio = parseInt(radio.value);

    const diametro = diametroCirculo(valueRadio);
    alert(`El diámetro del círculo es: ${diametro}`);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById('InputCirculo');
    const valueRadio = parseInt(radio.value);

    const perimetro = perimetroCirculo(valueRadio);
    alert(`El perímetro del círculo es: ${perimetro}`);
}

function calcularAreaCirculo() {
    const radio = document.getElementById('InputCirculo');
    const valueRadio = parseInt(radio.value);

    const area = areaCirculo(valueRadio);
    alert(`El área del círculo es: ${area}`);
}