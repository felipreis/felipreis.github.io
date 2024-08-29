
const sobreMim = document.getElementById("btnsobremim");
const projetos = document.getElementById("btnprojetos");
const tecnologias = document.getElementById("btntecnologias");
const certificados = document.getElementById("btncertificados");
const contato = document.getElementById("btncontato");



sobreMim.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementById('top-sobremim').offsetTop,
        behavior:"smooth"
    })
})

projetos.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementById('top-projects').offsetTop,
        behavior:"smooth"
    })
})

tecnologias.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementById('top-tecnologias').offsetTop,
        behavior:"smooth"
    })
})

contato.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementById("top-contato").offsetTop,
        behavior:"smooth"
    })
})

certificados.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementById("top-certificados").offsetTop,
        behavior:"smooth"
    })
})

const btnDownload = document.querySelector(".resume-download");
const imgDownload = document.querySelector(".resume-download-img")

btnDownload.addEventListener("mouseover",() =>{
        imgDownload.src = 'https://icongr.am/clarity/download.svg?size=25&color=ffffff';
})

btnDownload.addEventListener("mouseout", () => {
    imgDownload.src = 'https://icongr.am/clarity/download.svg?size=25&color=currentColor'; 
});



const swiper = new Swiper('.slider-wrapper', {
    direction: 'horizontal',
    loop: true,
    grabCursor:true,
    spaceBetween:40,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView:1
        },
        720: {
            slidesPerView:2
        },
        1024: {
            slidesPerView:3
        }
    }
  });