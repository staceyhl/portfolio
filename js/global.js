window.addEventListener("load", function() {

});

const hitsBlack = 1070;
const isInBlack = 1080;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if(currentScroll >= hitsBlack){
        if(currentScroll >= isInBlack){
            color = 255;
        }else{
            color = 255 * (currentScroll - hitsBlack) / (isInBlack - hitsBlack);
        }
    }else{
        color = 0
    }
    newColor = "#"+(color).toString(16)+(color).toString(16)+(color).toString(16);
    document.getElementById("stacey").style.color = newColor;
    document.getElementById("lee").style.color = newColor;
})