// Alternância do Modo de Alto Contraste para Acessibilidade
const btnContraste = document.getElementById('btn-contraste');
let altoContraste = false;

if (btnContraste) {
    btnContraste.addEventListener('click', () => {
        altoContraste = !altoContraste;
        
        if (altoContraste) {
            document.documentElement.style.setProperty('--bg-color', '#000000');
            document.documentElement.style.setProperty('--card-bg', '#000000');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            document.documentElement.style.setProperty('--primary-blue', '#00ffff'); // Azul Neon
            alert('Modo de Alto Contraste Ativado!');
        } else {
            document.documentElement.style.setProperty('--bg-color', '#0b0d12');
            document.documentElement.style.setProperty('--card-bg', '#161a23');
            document.documentElement.style.setProperty('--text-color', '#f0f4f8');
            document.documentElement.style.setProperty('--primary-blue', '#0088ff');
            alert('Modo Normal Ativado!');
        }
    });
}
