const express = require('express');
const app = express();
const PORT = 3000;

// Lista de links
const links = [
    'https://www.e-konomista.pt/intercooler/',
    'https://blog.hipervarejo.com.br/turbina-motor-afinal-para-que-serve-essa-peca/',
    'https://www.noticiasautomotivas.com.br/o-que-e-e-para-que-serve-o-carburador/',
    'https://mundoeducacao.uol.com.br/fisica/enetendendo-motor-um-carro.htm'
];

// Rota para obter a lista de links
app.get('/links', (req, res) => {
    res.json(links);
});

// Rota para redirecionar para um link aleatório
app.get('/abrir-link', (req, res) => {
    // Seleciona um link aleatório da lista
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    
    // Redireciona para o link selecionado
    res.redirect(randomLink);
});

// Inicie o servidor
app.listen(PORT, () => {
    console.log("Servidor iniciado na porta " + PORT);
});
