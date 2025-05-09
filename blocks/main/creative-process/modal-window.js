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