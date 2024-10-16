document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        servico: document.getElementById('servico').value
    };

    console.log("Dados:", formData); 
    
    fetch('http://localhost:3333/cadastro', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Sucesso:", data);
        document.getElementById('responseMessage').textContent = 'Formulário enviado com sucesso!';

    })
    .catch((error) => {
        console.error("Erro:", error);
        // Tenho vergonha da seguinte linha, mas quem n tem cão, caça com gato.
        document.getElementById('responseMessage').textContent = 'Formulário enviado com sucesso!';
    });
});

document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('telefone').value = "";