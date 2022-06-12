var video, playpause,playpause1,videoplay=false,seekbar,seekslide,redDot
function player() {
    video= document.getElementById('videomain')
    playpause= document.getElementById('play1')
    playpause1= document.getElementById('play2')
    seekbar= document.getElementById('seek')
    seekslide= document.getElementById('red')
    redDot= document.getElementById('dot')

    playpause.addEventListener('click',playbtn)
    playpause1.addEventListener('click',playbtn1,false)
    seekbar.addEventListener('change',seekupdate,false)
    video.addEventListener('timeupdate',seekTimeUpdate,false)
}
window.onload= player

function playbtn(){
    if(!videoplay){
        video.play()
        videoplay=true;
        playpause.innerHTML = '<i class="fa fa-pause"></i>';
        playpause1.innerHTML = '<i class="fa fa-pause"></i>';
    }else{
        video.pause()
        videoplay=false;
        playpause.innerHTML = '<i class="fa fa-play"></i>';
        playpause1.innerHTML = '<i class="fa fa-play"></i>';
    }
}
function playbtn1(){
    if(!videoplay){
        video.play()
        videoplay=true;
        playpause.innerHTML = '<i class="fa fa-pause"></i>';
        playpause1.innerHTML = '<i class="fa fa-pause"></i>';
    }else{
        video.pause()
        videoplay=false;
        playpause.innerHTML = '<i class="fa fa-play"></i>';
        playpause1.innerHTML = '<i class="fa fa-play"></i>';
    }
}
function seekupdate(){
    var seekto  = video.duration * (seekbar.value / 100)
    video.currentTime =seekto
}
function seekTimeUpdate(){
    var n = video.currentTime* (100/video.duration)
    seekbar.value =n;
    seekslide.style.width = n +'%';
    redDot.style.display = "unset"
    redDot.style.left = 4*(100/video.duration) +'%';
    if(Math.round(seekbar.value)==Math.round(4*(100/video.duration))){
        document.getElementsByClassName('video')[0].id="video-wrapper";
    }else if(Math.round(seekbar.value)==Math.round(60*(100/video.duration))){
        document.getElementsByClassName('video')[0].id='video'
    }else if(video.ended){
        playpause.innerHTML = '<i class="fa fa-play"></i>';
        playpause1.innerHTML = '<i class="fa fa-play"></i>';
    }

}

module.exports =player