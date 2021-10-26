import "./style.scss";

let btnn = document.querySelectorAll('.btnn').forEach(el => {
    el.addEventListener("click",( ) => {
        
        console.log(el.id);
        var audio = new Audio(el.src);
        console.log(audio);
        audio.play();
    });
   
}); 

       
       
        
      

