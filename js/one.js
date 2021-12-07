window.addEventListener("load", function() {

});

const beginFadeIn = [1500, 2700, 3900, 5100];
const endFadeIn = [1800, 3000, 4200, 5400];
const beginFadeOut = [2300, 3500, 4700, 5900]; 
const endFadeOut = [2500, 3700, 4900, 6100];
const ele = [".example-text", ".title-text", ".list-text", ".contrast-text"]

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    for(i = 0; i < ele.length; ++i){
        if(currentScroll >= beginFadeIn[i] - 1 && currentScroll <= endFadeOut[i] + 1){
            if (currentScroll <= beginFadeIn[i]) {
                opacity = 0;
            }else{
                if(currentScroll <= beginFadeOut[i] && currentScroll >= endFadeIn[i]){
                    opacity = 1
                }else{
                    if(currentScroll <= endFadeIn[i]){
                        opacity = (currentScroll - beginFadeIn[i]) / (endFadeIn[i] - beginFadeIn[i]);
                    }else{
                        if(currentScroll >= beginFadeOut[i]){
                            if(currentScroll <= endFadeOut[i]){
                                opacity = (endFadeOut[i] - currentScroll) / (endFadeOut[i] - beginFadeOut[i])
                            }
                        }
                    }
                }
            }
        }else{
            opacity = 0;
        }
        document.querySelector(ele[i]).style.opacity = opacity;
    }
})