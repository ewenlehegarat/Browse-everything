const buttonOpen = document.querySelector('.icon_menu')
const buttonClose = document.querySelector('.icon_close')
const dropContent = document.querySelector('.dropdown_content')

buttonOpen.addEventListener('click', ()=>{
    buttonOpen.style.display = 'none';
    buttonClose.style.display = 'block';
    dropContent.style.display = 'flex';
})

buttonClose.addEventListener('click', ()=>{
    buttonClose.style.display = 'none';
    buttonOpen.style.display = 'block';
    dropContent.style.display = 'none';
})