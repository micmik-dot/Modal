const modal = document.getElementById('modal');
const botonAbrir = document.getElementById('btnAbrir');
const botonGenial = document.getElementById('btnGenial');


botonAbrir.addEventListener('click', () => {
    modal.style.display = 'flex';
});

    botonGenial.addEventListener('click', () => {
        modal.style.display = 'none';
    });
