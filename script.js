document.addEventListener("DOMContentLoaded",  () => {
    const body = document.querySelector('body')
    const overlay = document.querySelector('.overlay')
    
    document.addEventListener('click', (event) => {
        const modalList = [...document.querySelectorAll('[data-show-modal]')]
        const modalActiveCheck = modalList.some(item => item.classList.contains('modal--active'))
        if(!modalActiveCheck) return
        const modalActive = modalList.filter(item => item.classList.contains('modal--active'))[0]
        if(!event.target.closest('.modal')) {
            modalActive.classList.remove('modal--active')
            overlay.classList.toggle('overlay--active')
            body.classList.toggle('body-no-overflow')
        }
       

    })
    
    // открытие модалки
    document.addEventListener('click', (event) => {
        const modalList = [...document.querySelectorAll('[data-show-modal]')] // список модалок
        const targetModal = event.target.dataset.modal

        if(!targetModal) return
        modalList.filter( (item) => {
            return item.dataset.showModal === targetModal
        })[0]
        .classList.toggle('modal--active')
        
        overlay.classList.toggle('overlay--active')
        body.classList.toggle('body-no-overflow')
    })

    // закрытие модалки

    document.addEventListener('click', (event) => {
        console.log(event.target)
        if(!event.target.parentNode.classList.contains('modal-close')) return
        event.target.closest('.modal').classList.toggle('modal--active')
        overlay.classList.toggle('overlay--active')
        body.classList.toggle('body-no-overflow')
    })

    // tab

    document.addEventListener('click', (event) => {
        
        if(!event.target.dataset.showTab) return
        const tabs = [...document.querySelectorAll('[data-show-tab]')]
        const tabsContent = [...document.querySelectorAll('[data-tab]')]

        tabsContent.forEach( item => item.classList.remove('tab--active'))
        tabs.forEach( item => item.classList.remove('tab__item--active'))

        tabsContent.filter( (elem) => {
            return elem.dataset.tab === event.target.dataset.showTab
        })
        [0].classList.add('tab--active')
        event.target.classList.add('tab__item--active')
    })
})