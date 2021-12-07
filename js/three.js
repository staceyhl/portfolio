window.addEventListener("load", function() {

});

const beginFadeIn = [1300, 2400, 3500];
const endFadeIn = [1600, 2700, 3800];
const beginFadeOut = [2100, 3200, 4300]; 
const endFadeOut = [2300, 3400, 4500];
const ele = [".home-text", ".footnote-text", ".tictactoe-text"]

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