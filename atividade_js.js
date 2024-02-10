var hora = 20;
var msg = '';

function retornarMsg(msgRetorno) {
  console.log(msg, hora);
}

function verificarHora() {
  
  if (hora < 12) {
    msg = 'Bom dia!';
    retornarMsg(msg);
  }
  if (hora >= 12 && hora < 18) {
    msg = 'Boa tarde!';
    retornarMsg(msg);
  }
  if (hora >= 18) {
    msg = 'Boa noite!';
    retornarMsg(msg);
  }
}

verificarHora();