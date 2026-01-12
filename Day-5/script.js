const btn = document.getElementById("btn");
const gen = document.getElementById("gen");

const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const low = "abcdefghijklmnopqrstuvwxyz";
const nums = "1234567890";
const sym = "!@#$%^&*()_-+=";

btn.onclick = function(){
    let allowed = "";
    let password = "";

    const upper = document.getElementById("upper").checked;
    const lower = document.getElementById("lower").checked;
    const numb = document.getElementById("numb").checked;
    const symbol = document.getElementById("symbol").checked;
    const size = document.getElementById("size");

    if (!(size.value > 0)){
        gen.textContent = "Please enter a valid size greater than 0";
        return;
    } 
    
    if (!upper && !lower && !numb && !symbol){
        gen.textContent = "Please select at least one option";
    } else {
        allowed += upper ? upp : "";
        allowed += lower ? low : "";
        allowed += numb ? nums : "";
        allowed += symbol ? sym : "";

        const len = size.value;
        
        for (let i=0; i<len; i++){
            const ch = Math.floor(Math.random() * allowed.length);
            password += allowed[ch];
        }

        gen.textContent = password;
    }
    
}
