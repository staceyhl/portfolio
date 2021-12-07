window.addEventListener("load", function() {

});

const beginFadeIn = [1300, 3000, 4100, 5200];
const endFadeIn = [1600, 3300, 4400, 5500];
const beginFadeOut = [2700, 3800, 4900, 6000]; 
const endFadeOut = [2900, 4000, 5100, 6200];
const ele = [".sketches-text", ".grid-text", ".middle-left-text", ".top-right-text"]

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