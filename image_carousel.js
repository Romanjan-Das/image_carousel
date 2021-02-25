window.onload=function(){
    console.log(document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes[1].clientWidth + document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes[1].clientWidth*0.02);
    console.log(document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes);
    var total_length_of_image_carousel=0;
    for(i=0;i<document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes.length;i++){
        if(i%2){
            console.log(i);
            console.log(document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes[i].clientWidth + document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes[i].clientWidth*0.02);
            total_length_of_image_carousel = total_length_of_image_carousel + document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes[i].clientWidth + document.getElementsByClassName("image_carousel")[0].childNodes[1].childNodes[i].clientWidth*0.02;
        }
    }
    total_length_of_image_carousel = parseInt(total_length_of_image_carousel);
    console.log(total_length_of_image_carousel);
    console.log(document.getElementsByClassName("image_carousel")[0].childNodes[1]);
    document.getElementsByClassName("image_carousel")[0].childNodes[1].style.width=total_length_of_image_carousel+"px";
    console.log(document.getElementsByClassName("image_carousel")[0].childNodes[1].style.width);
}