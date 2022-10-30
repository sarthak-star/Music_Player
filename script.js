console.log("welcome to spotify")
index=1;

//initialize the variables

let songindex=0;
let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let backward=document.getElementById('backward');
let forward=document.getElementById('forward');
let myprogressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let nowplaying=document.getElementById('currentsong');

let songs=[
    {songname:"Legion",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Trap",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"They Mad",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Plug Walk",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"e",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Safety Dance",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"Back It Up",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"h",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"Clay Orange",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
    {songname:"True Love",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},
]
const resetallplays=()=>{
    
    songitems.forEach(element => {
        element.style.transform="scale(1)";
        element.style.transition="0.3s ease-in-out";
    });
}


songitems.forEach((element,i ) => {
    
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("name")[0].innerText=songs[i].songname;
    
    
    
    element.addEventListener('click',()=>{
        resetallplays();
        index=parseInt(element.id);
        audioelement.src='songs/'+index+'.mp3';
        console.log(audioelement.src);
        audioelement.currentTime=0;
        masterplay.click();
        element.style.transform="scale(1.1)";
        element.style.transition="0.3s ease-in-out";
        nowplaying.innerText=songs[index-1].songname;
        
    })
    
    
});

//audioelement.play()

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;

    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
    }

})
forward.addEventListener('click',()=>{
    resetallplays();
    if(index<10){
        index=index+1;
        audioelement.src='songs/'+(index)+'.mp3';
        audioelement.currentTime=0;
        masterplay.click();
    }
    else if(index==10){
        index=1;
        audioelement.src='songs/'+(index)+'.mp3';
        audioelement.currentTime=0;
        masterplay.click();
    }
    nowplaying.innerText=songs[index-1].songname;
    
    
    
})

backward.addEventListener('click',()=>{
    resetallplays();
    if(index>1){
        index=index-1;
        audioelement.src='songs/'+(index)+'.mp3';
        audioelement.currentTime=0;
        masterplay.click();
    }
    else if(index==1){
        index=10;
        audioelement.src='songs/'+(index)+'.mp3';
        audioelement.currentTime=0;
        masterplay.click();
    }
    nowplaying.innerText=songs[index-1].songname;
    
})

//listen to events
audioelement.addEventListener('timeupdate',()=>{
    
    
    Progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=Progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})