const play = document.querySelector('.play');
const previous = document.querySelector('.prev');
const next = document.querySelector('.next');

const trackImage = document.querySelector('.track-image');
const title = document.querySelector('.title');
const artist = document.querySelector('.artist');

const currentTrackTime = document.querySelector('.current-time');
const trackDuration = document.querySelector('.duration-time');
const slider = document.querySelector('.duration-slider');

const currentVolume = document.querySelector("#volume");
const showVolume = document.querySelector("#show-volume");
const volumeIcon = document.querySelector("#volume-icon");

const autoPlayBtn = document.querySelector('.play-all');

const hamBurger = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');

const musicPlaylist = document.querySelector('.music-playlist');
const pDiv = document.querySelector('.playlist-div');
const playList = document.querySelector('.playlist');

let timer;
let autoplay = 0;
let indexTrack = 0;
let songIsPlaying = false;
let track = document.createElement('audio');

play.addEventListener('click', justPlay);
next.addEventListener('click', nextSong);
previous.addEventListener('click', prevSong);
autoPlayBtn.addEventListener('click', autoPlayToggle);
volumeIcon.addEventListener('click', muteSound);
currentVolume.addEventListener('change', changeVolume);
slider.addEventListener('change', changeDuration);
track.addEventListener('timeupdate', songTimeUpdate);
hamBurger.addEventListener('click', showPlayList);
closeIcon.addEventListener('click', hidePlayList);

function loadTrack(indexTrack) {
    clearInterval(timer);
    resetSlider();
    track.src = trackList[indexTrack].path;
    title.innerHTML = trackList[indexTrack].name;
    trackImage.src = trackList[indexTrack].img;
    artist.innerHTML = trackList[indexTrack].singer;

    track.load();
    timer = setInterval(updateSlider, 1000);
}

loadTrack(indexTrack);

function justPlay(){
    if(songIsPlaying == false){
        playSong();
    } else {
        pauseSong();
    }
}

function playSong(){
    track.play();
    songIsPlaying = true;
    play.innerHTML = '<i class="fas fa-pause"></i>'
}

function pauseSong(){
    track.pause();
    songIsPlaying = false;
    play.innerHTML = '<i class="fas fa-play"></i>'
}

function nextSong(){
    if(indexTrack < trackList.length - 1){
        indexTrack++;
        loadTrack(indexTrack);
        playSong();
    } else {
        indexTrack = 0;
        loadTrack(indexTrack);
        playSong();
    }
}

function prevSong(){
    if(indexTrack > 0){
        indexTrack--;
        loadTrack(indexTrack);
        playSong();
    } else {
        indexTrack = trackList.length - 1;
        loadTrack(indexTrack);
        playSong();
    }
}

function muteSound(){
    track.volume = 0;
    showVolume.innerHTML = 0;
    currentVolume.value = 0;
}

function changeVolume(){
    showVolume.value = currentVolume.value;
    track.volume = currentVolume.value / 100;
}

function autoPlayToggle(){
    if (autoplay == 0) {
        autoplay = 1;
        autoPlayBtn.style.background = "#db6400";
    } else {
        autoplay = 0;
        autoPlayBtn.style.background = "#ccc";
    }
}

function changeDuration(){
    let sliderPosition = track.duration * (slider.value / 100);
    track.currentTime = sliderPosition;
}

function resetSlider() {
    slider.value = 0;
}

function updateSlider(){
    let position = 0;

    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    if (track.ended){
        play.innerHTML = '<i class="fas fa-play"></i>';
        if (autoplay == 1 && indexTrack < trackList.length - 1){
            indexTrack++;
            loadTrack(indexTrack);
            playSong();
        } else if (autoplay == 1 && indexTrack == trackList.length - 1){
            indexTrack = 0;
            loadTrack(indexTrack);
            playSong();
        }
    }
}

function songTimeUpdate() {
    if(track.duration) {
        let curmins =  Math.floor(track.currentTime / 60);
        let cursecs =  Math.floor(track.currentTime - curmins * 60);
        let durmins =  Math.floor(track.duration / 60);
        let dursecs =  Math.floor(track.duration - durmins * 60);

        if (dursecs < 10){
            dursecs = "0" + dursecs;
        }
        if (durmins < 10){
            durmins = "0" + durmins;
        }
        if (curmins < 10){
            curmins = "0" + curmins;
        }
        if (cursecs < 10){
            cursecs = "0" + cursecs;
        }
    currentTrackTime.innerHTML = curmins + ":" + cursecs;    
    trackDuration.innerHTML = durmins + ":" + dursecs;    
    } else {
        currentTrackTime.innerHTML = "00" + ":" + "00";    
        trackDuration.innerHTML = "00" + ":" + "00";  
    }
     
    
} 

function showPlayList(){
    musicPlaylist.style.transform = "translateX(0)"
}

function hidePlayList(){
    musicPlaylist.style.transform = "translateX(-100%)"
}

let counter = 1;

function displayTracks(){
    for (let i = 0; i < trackList.length; i++){
        let div = document.createElement("div");
        div.classList.add("playlist");
        div.innerHTML = `
            <span class="song-index">${counter++}</span>
            <p class="single-song">${trackList[i].name}</p>
        `;
        pDiv.appendChild(div);
    }

    playFromPlayList();
}

displayTracks();

function playFromPlayList(){
    pDiv.addEventListener('click', (e) => {
        if(e.target.classList.contains("single-song")){
            // alert(e.target.innerHTML);
            const indexNum = trackList.findIndex((item, index) => {
                if(item.name === e.target.innerHTML){
                    return true;
                }
            });
            loadTrack(indexNum);
            playSong();
            hidePlayList();
        }


    })
}