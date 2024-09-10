$(document).ready(function() {
    $("#formulario-operaciones").on("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario recargue la página

        // Obtener los valores del formulario
        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());
        let operacion = $("#operacion").val();
        let resultado;

        // Realizar la operación aritmética
        switch (operacion) {
            case "sumar":
                resultado = num1 + num2;
                break;
            case "restar":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = "Error: División por cero";
                }
                break;
            default:
                resultado = "Operación no válida";
        }

        // Mostrar el resultado en la página
        $("#valor-resultado").text(resultado);
    });
});
