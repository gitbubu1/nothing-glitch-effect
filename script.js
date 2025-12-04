const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|:<>?";
let interval = null;

// Select the text element inside the border
const target = document.querySelector(".glitch");
const border = document.querySelector(".pixel-border");

// Function to run the effect
const runGlitch = () => {
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
            // Logic: reveal letter if iteration passes index
            if(index < iteration) {
                return target.dataset.value[index];
            }
            
            // Otherwise show random char
            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
        
        // End condition
        if(iteration >= target.dataset.value.length){ 
            clearInterval(interval);
        }
        
        // Speed
        iteration += 1 / 3; 
    }, 30);
}

// Trigger on hover over the whole box (not just text)
border.addEventListener("mouseover", runGlitch);

// Optional: Trigger once on load
window.onload = runGlitch;