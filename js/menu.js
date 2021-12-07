//Creamos una variable para guardar
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');

//addEdventListener, detecta el evento click    
btnMenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
});