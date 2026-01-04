document.addEventListener('DOMContentLoaded', () => {
    // 1. Textos dinámicos en el subtítulo
    const subtitle = document.querySelector('.subtitle');
    const frases = [
        "Revisando los niveles de aceite...",
        "Ajustando los asientos de piel...",
        "Poniendo a punto el motor...",
        "Limpiando las llantas para ti...",
        "Casi listos para arrancar."
    ];
    
    let index = 0;
    setInterval(() => {
        subtitle.style.opacity = 0; // Efecto desvanecer
        setTimeout(() => {
            subtitle.textContent = frases[index];
            subtitle.style.opacity = 1;
            index = (index + 1) % frases.length;
        }, 500);
    }, 3500);

    // 2. Manejo del Formulario
    const form = document.getElementById('notify-form');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        // Simulación de envío exitoso
        form.innerHTML = "<p style='color: #ff6600; font-weight: bold;'>¡Registrado con éxito! Te avisaremos pronto.</p>";
        console.log("Nuevo suscriptor para Velis.es:", email);
    });
});