var todaysDate = moment().format("dddd, MMMM Do");
//console.log(todaysDate);
$('#currentDay').text(todaysDate);

var $row = $('.row');

$('.hour').each(function(){
    var time = moment(this.innerText, "HH:mm a");;
    var currentTime = moment();

    console.log(currentTime.hour());
    //Determines if time slot is before or after
    if(time.hour() < currentTime.hour()){
        //console.log(time.toString());
        $(this).parent().siblings('textarea').removeClass().addClass('past');
    }else if(time.hour() > currentTime.hour()){
        $(this).parent().siblings('textarea').removeClass().addClass('future');
    }else{
        $(this).parent().siblings('textarea').removeClass().addClass('present');
    }
});