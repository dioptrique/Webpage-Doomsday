/*dragon*/var b=sX=sY=oT=oL=0;document.addEventListener("click",function(a){a.preventDefault()});document.addEventListener("mousedown",c);document.addEventListener("touchstart",c);function c(a){a.preventDefault();a.target!==document.documentElement&&a.target!==document.body&&(b=Date.now(),a.target.setAttribute("data-d",b),a.target.style.position="relative",oT=a.target.style.top.split("px")[0]||0,oL=a.target.style.left.split("px")[0]||0);sX=a.clientX||a.touches[0].clientX;sY=a.clientY||a.touches[0].clientY}document.addEventListener("mousemove",d);document.addEventListener("touchmove",d);function d(a){if(""!==b){var e=document.querySelector('[data-d="'+b+'"]');e.style.top=parseInt(oT)+parseInt((a.clientY||a.touches[0].clientY)-sY)+"px";e.style.left=parseInt(oL)+parseInt((a.clientX||a.touches[0].clientX)-sX)+"px"}}document.addEventListener("mouseup",f);document.addEventListener("touchend",f);function f(){b=""};
