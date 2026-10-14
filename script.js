var bouton = document.getElementById('ouvrir');
var lettre = document.getElementById('lettre');
bouton.addEventListener('click', function (){
    lettre.classList.add('ouverte');
    lettre.scrollIntoView({behavior: 'smooth', block: 'start'});
});