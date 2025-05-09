document.addEventListener('DOMContentLoaded', function () {
    const tabHeaders = document.querySelectorAll('.choose__tab-h');
    const tabContents = document.querySelectorAll('.choose__block');

    tabHeaders.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Убираем активный класс у всех табов
            tabHeaders.forEach(t => t.classList.remove('choose__tab-h_active'));
            tabContents.forEach(c => c.classList.remove('choose__block_active'));

            // Добавляем активный класс к выбранному табу и контенту
            tab.classList.add('choose__tab-h_active');
            tabContents[index].classList.add('choose__block_active');
        });
    });
})