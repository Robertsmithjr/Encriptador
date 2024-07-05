

document.addEventListener('DOMContentLoaded', (event) => {
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const inputText = document.getElementById('inputText');
    const outputMessage = document.getElementById('outputMessage');

    // Función para encriptar texto
    function encryptText(text) {
        try {
            return btoa(text);
        } catch (e) {
            return "Error al encriptar el mensaje";
        }
    }

    // Función para desencriptar texto
    function decryptText(text) {
        try {
            return atob(text);
        } catch (e) {
            return "Error al desencriptar el mensaje";
        }
    }

    // Evento al hacer clic en el botón "Encriptar"
    encryptBtn.addEventListener('click', function() {
        if (inputText.value) {
            let encryptedText = encryptText(inputText.value);
            outputMessage.textContent = encryptedText;
            decryptBtn.disabled = false; // Habilitar el botón de desencriptar
        } else {
            outputMessage.textContent = "Ningún mensaje fue encontrado";
            decryptBtn.disabled = true; // Deshabilitar el botón de desencriptar si no hay texto para encriptar
        }
    });

    // Evento al hacer clic en el botón "Desencriptar"
    decryptBtn.addEventListener('click', function() {
        if (outputMessage.textContent && outputMessage.textContent !== "Ningún mensaje fue encontrado" && outputMessage.textContent !== "Error al encriptar el mensaje") {
            let decryptedText = decryptText(outputMessage.textContent);
            outputMessage.textContent = decryptedText;
        } else {
            outputMessage.textContent = "Ningún mensaje fue encontrado";
        }
    });

    // Evento para deshabilitar el botón de desencriptar si no hay texto
    inputText.addEventListener('input', function() {
        if (!inputText.value) {
            decryptBtn.disabled = true;
            outputMessage.textContent = "Ningún mensaje fue encontrado";
        }
    });

    // Inicializar el estado del botón de desencriptar
    decryptBtn.disabled = true;
});

