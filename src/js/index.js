const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");
const modal = document.querySelector(".modal");

const lickDoVidio = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=>{
    alternarModal()
    video.setAttribute("src", lickDoVidio);
});

botaoFecharModal.addEventListener("click", ()=>{
    alternarModal()
   video.setAttribute("src", "");
});