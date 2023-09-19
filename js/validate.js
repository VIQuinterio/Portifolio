document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Simulando um envio de formulário
        setTimeout(function () {
            contactForm.reset();
            successMessage.style.display = 'block';

            // Esconder a mensagem de sucesso após 3 segundos
            setTimeout(function () {
                successMessage.style.display = 'none';
            }, 3000);
        }, 1000);
    });
});
