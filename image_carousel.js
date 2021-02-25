window.onload=function(){
    var total_length_of_image_carousel=0;
    for(i=0;i<document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes.length;i++){
        if(i%2){
            total_length_of_image_carousel = total_length_of_image_carousel + document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes[i].clientWidth + document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes[i].clientWidth*0.02;
        }
    }
    total_length_of_image_carousel = parseInt(total_length_of_image_carousel);
    document.getElementsByClassName("image_carousel")[0].childNodes[1].style.width=total_length_of_image_carousel+"px";
}