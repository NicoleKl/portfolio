const modal = document.querySelector('.modal');
const modalContainer = modal.querySelector('.modal--container');
const closeBtn = document.querySelector('.modal--close-btn');
document.querySelectorAll('.instagram-photo').forEach(photo => {
    photo.addEventListener('click', openModal)
});
window.onclick = closeModal;
window.addEventListener('keydown', closeModal);
closeBtn.onclick = closeModal;



function openModal(event) {
    const image = event.currentTarget.cloneNode(true);
    image.classList.add('transformed-image');
    
    modalContainer.innerHTML = "";
    modalContainer.appendChild(image);
    modalContainer.appendChild(closeBtn);
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(event) {  
    if (event.target == modal || event.key === 'Escape' || event.currentTarget === closeBtn) {
        modal.style.display = "none"; 
        document.body.style.overflow = "auto";
    }  
}