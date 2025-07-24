// Mostrar / ocultar video
const btn = document.getElementById('btnVideo');
const wrapper = document.getElementById('videoWrapper');
btn.addEventListener('click', () => {
  const hidden = wrapper.style.display === '' || wrapper.style.display === 'none';
  wrapper.style.display = hidden ? 'block' : 'none';
  btn.textContent = hidden ? 'Ocultar video' : 'Ver video explicativo';
});

// Alternar modo oscuro y cambiar texto del botón
const btnModo = document.getElementById("modoOscuro");
btnModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    btnModo.textContent = "Modo claro";
  } else {
    btnModo.textContent = "Modo oscuro";
  }
});
