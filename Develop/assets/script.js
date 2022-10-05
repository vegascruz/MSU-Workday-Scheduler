$(document).ready(function(){

    var todaysDate = moment().format("dddd, MMMM Do");
    //console.log(todaysDate);
    $('#currentDay').text(todaysDate);

    $('.hour').each(function(){
        var time = moment(this.innerText, "HH:mm a");;
        var currentTime = moment();

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

    
    $('.saveBtn').each(function(){
        var id = $(this).attr('id');
        var event = localStorage.getItem(id);

        $(this).siblings('textarea').val(event);
    });

    $('.saveBtn').on('click', function(){
        var id = $(this).attr('id');
        var event = $(this).siblings('textarea').val();
        
        if(event != ""){
            localStorage.setItem(id, event);
            $('#confirmation').removeClass('hide');
            $('#confirmationClear').addClass('hide');
        }

    });

    $('.clearBtn').on('click',function(){
        localStorage.clear();
        $('textarea').each(function(){
            $(this).val(""); 
        });

        $('#confirmationClear').removeClass('hide');
        $('#confirmation').addClass('hide');
    });

    $('textarea').on('click', function() {
        $('#confirmationClear').addClass('hide');
        $('#confirmation').addClass('hide');
    });
    //var events = $('#description').val();
    //console.log(events);

});