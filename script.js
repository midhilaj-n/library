const addBtn = document.querySelector('.add-btn');
const formContainer = document.querySelector('.form-container');
const overlay = document.getElementById('overlay');

addBtn.addEventListener('click', () => {
    if(formContainer.style.display === "none"){
        formContainer.style.display = "block";
        overlay.style.display = "block";
    }else{
        formContainer.style.display = "none"
    }
})


overlay.addEventListener('click', () => {
    formContainer.style.display = "none";
    overlay.style.display = "none";
})