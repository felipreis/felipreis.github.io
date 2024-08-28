
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