/**
 * Created by macbook on 2016-09-29.
 */

//C#*2 C#*2 C#*2 C#*2 C#*2

var play_finishing = function () {
    $('#play').html('play');
    $('#play').attr('disabled',false);


};


var play_begining = function () {
    $('#play').html('playing....');
    // $('#play').prop('disabled',true);
    $('#play').attr('disabled',true);

};


$(document).ready(function () {


    $('#play').on('click', function () {
        play_begining();
        var input = prompt("give me your song");
        playSong(parseSong(input), 400, play_finishing);


    });


});



