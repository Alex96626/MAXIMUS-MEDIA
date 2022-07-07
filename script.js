document.addEventListener("DOMContentLoaded",  () => {
    

    document.addEventListener('click', (event) => {
        const modalList = [...document.querySelectorAll('[data-show-modal]')]
        const modalActiveCheck = modalList.some(item => item.classList.contains('modal--active'))
        if(!modalActiveCheck) return
        const modalActive = modalList.filter(item => item.classList.contains('modal--active'))[0]
        if(!event.target.closest('.modal')) {
            modalActive.classList.remove('modal--active')
            togleOverlay ()
        }

    })
    
    document.addEventListener('click', (event) => {
        showModal(event)
        closeModal (event)
        activeTabs(event)
    })

})

function togleOverlay () {
    const body = document.querySelector('body')
    const overlay = document.querySelector('.overlay')

    overlay.classList.toggle('overlay--active')
    body.classList.toggle('body-no-overflow')
}

function showModal (event) {
    const modalList = [...document.querySelectorAll('[data-show-modal]')] // список модалок
    const targetModal = event.target.dataset.modal

    if(!targetModal) return
    modalList.find( (item) => {
        return item.dataset.showModal === targetModal
    })
    .classList.toggle('modal--active')
    
    togleOverlay ()
}

function closeModal (event) {
    
    if(!event.target.parentNode.classList.contains('modal-close')) return

    event.target.closest('.modal').classList.toggle('modal--active')

    togleOverlay()
}

function activeTabs (event) {
    if(!event.target.dataset.showTab) return
    const tabs = [...document.querySelectorAll('[data-show-tab]')]
    const tabsContent = [...document.querySelectorAll('[data-tab]')]

    tabsContent.forEach( item => item.classList.remove('tab--active'))
    tabs.forEach( item => item.classList.remove('tab__item--active'))

    tabsContent.find( (elem) => {
        return elem.dataset.tab === event.target.dataset.showTab
    })
    .classList.add('tab--active')
    event.target.classList.add('tab__item--active')
}