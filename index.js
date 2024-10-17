
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