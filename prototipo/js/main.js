/**
 * @file main.js
 * @description Arquivo principal de JavaScript para o Projeto (UC15).
 * @author Gabriel Machado Phiilomena
 * @version 4.0.0
 */

const formulario = document.querySelector('form');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        const nome = document.querySelector('#nome').value;
        
        if (nome === '') {
            alert('Por favor, preencha o formulário antes de enviar!');
            evento.preventDefault(); // Impede o envio se estiver vazio
        } else {
            alert('Mensagem enviada com sucesso!');
        }
    });
}