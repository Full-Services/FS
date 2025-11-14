const filtro = document.getElementById('filtro');
const personas = document.querySelectorAll('.persona');

filtro.addEventListener('change', () => {
    const base = filtro.value;
    
    personas.forEach(persona => {
    if (base === 'todas' || persona.dataset.base === base) {
        persona.style.display = 'block';
    } else {
        persona.style.display = 'none';
    }
    });
});
