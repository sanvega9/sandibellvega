//typing effects 
const typedText= document.querySelector(".typed-text");
const words=["Sandibell Vega","an AI Engineer", "a Robotics Engineer", "a Programmer"];
let i=0;
let j=0;
let currentWord="";
let isDeleting=false;
function type(){
    currentWord = words[i];
    if(!isDeleting){
        typedText.textContent = currentWord.substring(0,j++);
        if(j > currentWord.length){
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
        }else{
            typedText.textContent = currentWord.substring(0, j--);
        if(j<0) {
            isDeleting = false;
            i = (i+1) %words.length;
        }
    }
    setTimeout(type,isDeleting ? 80:150);
        
}
type();