
const hoverWord= document.getElementById("special");
hoverWord.addEventListener("mouseenter", function() {
    hoverWord.classList.add("hoverEffect");
})

hoverWord.addEventListener("mouseleave", function() {
     hoverWord.classList.remove("hoverEffect");


})
const hoverImage=document.getElementById("pash");
hoverImage.addEventListener("mouseenter", function() {
    hoverImage.classList.add("hoverEffectImage"); 

});

hoverImage.addEventListener("mouseleave", function() {
    hoverImage.classList.remove("hoverEffectImage"); 
    
});

function addHoverEffects() {
    hoverWord.classList.add("hoverEffect");
    hoverImage.classList.add("hoverEffectImage");
}

// Function to remove hover effects from both elements
function removeHoverEffects() {
    hoverWord.classList.remove("hoverEffect");
    hoverImage.classList.remove("hoverEffectImage");
}

// Add event listeners to both elements
hoverWord.addEventListener("mouseenter", addHoverEffects);
hoverWord.addEventListener("mouseleave", removeHoverEffects);

hoverImage.addEventListener("mouseenter", addHoverEffects);
hoverImage.addEventListener("mouseleave", removeHoverEffects);


const video=document.getElementById("myVideo");
const playButton=document.getElementById("play-button")

playButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playButton.style.display="none";
    } else {
        video.pause();
        playButton.style.display="block"
    }

});

video.addEventListener("pause", () => {
    playButton.style.display='block';
})

video.addEventListener("ended", () => {
    playButton.style.display='block';
})

video.addEventListener("seeked", () => {
    playButton.style.display='none';
})


const stickyButton=document.getElementById("stickyCircle");
stickyButton.addEventListener("click", () => {
        window.scrollTo({top:0,left:0,behaviour:"smooth"})
})
