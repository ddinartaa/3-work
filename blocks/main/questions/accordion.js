document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.questions__accordion')
    

    accordions.forEach(acc => {
        const head = acc.querySelector('.questions__accordion-head')

        head.addEventListener('click', function () {
            const contentP = acc.querySelector('.questions__accordion-p')
            contentP.classList.toggle('questions__accordion-p_active')
            const arrowBack = acc.querySelector('.questions__arrow')
            arrowBack.classList.toggle('questions__arrow_back')
        })
    })
})