(function(){
    emailjs.init("QSXUvoJ4BsXKk8EhD");
})();

// Adiciona o evento de envio ao formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Envia o formulário com o EmailJS
    emailjs.sendForm('service_hvggihb', 'template_udsu6r8', this)
        .then(function() {
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            alert('Erro ao enviar a mensagem: ' + JSON.stringify(error));
        });
});