document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
  
    if (usuario === 'admin' && senha === '1234') {
      alert('Login bem-sucedido!');

      window.location.href = 'dashboard.html';
    } else {
      alert('Usuário ou senha inválidos.');
    }
  });
  
