// document.addEventListener('DOMContentLoaded', function () {
//     const openBtn = document.querySelector('.open-modal');         // Кнопка
//     const modal = document.querySelector('.modal');                // Модальное окно
//     const closeBtn = document.querySelector('.modal__close');      // Крестик
//     const overlay = document.querySelector('.modal__overlay');     // Фон
  
//     openBtn.addEventListener('click', () => {
//       modal.classList.add('active'); // Показываем окно
//     });
  
//     closeBtn.addEventListener('click', () => {
//       modal.classList.remove('active'); // Закрываем окно
//     });
  
//     overlay.addEventListener('click', () => {
//       modal.classList.remove('active'); // Закрываем по клику на фон
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('.open-modal');
    const modal = document.querySelector('.modal');                
    const closeBtn = document.querySelector('.modal__close');      
    const overlay = document.querySelector('.modal__overlay');  
    
    openBtn.addEventListener('click', function () {
        modal.classList.add('modal__content_active')
    })
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('modal__content_active')
    })
    overlay.addEventListener('click', function () {
        modal.classList.remove('modal__content_active')
    })
})