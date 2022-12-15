const quote=document.getElementById('quote');
const anime=document.getElementById('anime');
const character=document.getElementById('character');
function Fetch(){
    fetch("https://animechan.vercel.app/api/random")
          .then((response) => response.json())
          .then((data) =>change(data));
}
const t=setInterval(Fetch, 5000);
function change(data){
    quote.innerHTML='"'+data.quote+'"';
    anime.innerHTML="Anime: " +'"'+data.anime+'"';
    character.innerHTML="Character: " +'"'+data.character+'"';
}

