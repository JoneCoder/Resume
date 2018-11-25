var dotData = ['College','University','School'];
var index =0;
function dotSlide() {
        $('#dot').text(dotData[index]);
        index++;
        if (index >= dotData.length){
            index =0;
        }
};
setInterval(dotSlide, 6000);
