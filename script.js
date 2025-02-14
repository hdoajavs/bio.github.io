// Функция для открытия/закрытия меню
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active'); // Добавляем/удаляем класс active
});

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove('active');
    }
});
