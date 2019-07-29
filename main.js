
let tID; //going to use this variable when we clear/stop the animation

function stopAnimation() {
    clearInterval(tID); 
}


function animateScript() {

    let position = 150;//start position for img slicer
    const interval = 100;//100ms of interval for the setInterval()
    const diff = 150;

    tID = setInterval (() => {
        
        document.getElementById("twitterSprite").style.backgroundPosition=`-${position}px 0px`
        //inserting position here, height 0px stays the same
        
        if (position < 1800) {
            position = position + diff; //increment position by this much (a frame) each time, so loops through them
        }
        else {
            position = 150; //reset position to one frame
        }
    
    
    }, interval); 
    
}
//animateScript()


