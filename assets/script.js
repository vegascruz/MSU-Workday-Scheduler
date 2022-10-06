$(document).ready(function(){

    // this variable formats the current date, and then changes the currentDay text on our page
    var todaysDate = moment().format("dddd, MMMM Do");
    //console.log(todaysDate);
    $('#currentDay').text(todaysDate);

    //this function is run on each hour block to determine if it is past, present or in the future. Based on this, the colors will change
    $('.hour').each(function(){
        //this moment.js format filter allows for us to input each hour such as "8pm" or "8am", etc...
        var time = moment(this.innerText, "HH:mm a");;
        var currentTime = moment();

        //Determines if time slot is before or after... which then will add classes that will change color based on past, present or future
        if(time.hour() < currentTime.hour()){
            //console.log(time.toString());
            $(this).parent().siblings('textarea').removeClass().addClass('past');
        }else if(time.hour() > currentTime.hour()){
            $(this).parent().siblings('textarea').removeClass().addClass('future');
        }else{
            $(this).parent().siblings('textarea').removeClass().addClass('present');
        }
    });

    //for each save button, this function will run. Basically just saves the value of textarea to localstorage
    $('.saveBtn').each(function(){
        var id = $(this).attr('id');
        var event = localStorage.getItem(id);

        $(this).siblings('textarea').val(event);
    });

    //after the save button is clicked, the 'hide' class will be removed from the confirmation messages. This also sets the local storage key
    //to whatever time block is in the same row. 
    $('.saveBtn').on('click', function(){
        var id = $(this).attr('id');
        var event = $(this).siblings('textarea').val();
        
        if(event != ""){
            localStorage.setItem(id, event);
            $('#confirmation').removeClass('hide');
            $('#confirmationClear').addClass('hide');
        }

    });

    //this function will run when the clear button is clicked. wipes out all localstorage and empties all the textarea's 
    $('.clearBtn').on('click',function(){
        localStorage.clear();
        $('textarea').each(function(){
            $(this).val(""); 
        });

        $('#confirmationClear').removeClass('hide');
        $('#confirmation').addClass('hide');
    });

    //when we click on the text area, if there was a confirmation message... that will remove so we can confirm it after they hit save again
    $('textarea').on('click', function() {
        $('#confirmationClear').addClass('hide');
        $('#confirmation').addClass('hide');
    });

});