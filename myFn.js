/**
 * Created by macbook on 2016-09-29.
 */

//C#*2 C#*2 C#*2 C#*2 C#*2
// D#*2 D#*2 D#*2 D#*2 D#*2


var play_begining = function () {
    $('#play').html('playing....');
    $('#play').prop('disabled', true);
    $('#play').attr('disabled', true);
    $('#play').slideUp();

};

var play_finishing = function () {
    $('#play').slideDown();
    $('#play').html('play');
    $('#play').attr('disabled', false);

    $('#songName').html("Enter a song to play");

    //clear the Ul>li name
    //beacse the li is appedning afterward, so has to use delegate
    // $('ul').on('click','li',function () {
    //     $(this).remove();
    // })

};


$(document).ready(function () {

    var notes_arr = [];

    //just for test
    // var notes_arr = [['a', 'C#*2 C#*2 C#*2 C#*2 C#*2'], ['b', 'D#*2 D#*2 D#*2 D#*2 D#*2', 'E#*2 E#*2 E#*2 E#*2 E#*2']];

    $("form").on("submit", function (evt) {
        //get the val from input text
        var input_note = $('input[id=note]').val();
        var input_name = $('input[id=name]').val();

        //create a li inside ul
        // $('ul').append('<li>Song name ' + input_name + ' ' + input_note + '</li>');
        $('ul').append('<li>Song name ' + input_name);

        //fade in your note when your mouse over the li
        $("ul").on("mouseenter", "li", function () {

            //get the index of li insode the ul
            var index = $(this).index();
            //fetch the li's note
            $('#show-note').html(notes_arr[index][1]).fadeIn(1000);

        });

        //fade out note when mouse moves out
        $("ul").on("mouseleave", "li", function () {
            $('#show-note').fadeOut(1000);

        });

        //clear the input arear
        $('input[id=note]').val("");
        $('input[id=name]').val("");

        //push note into a array
        notes_arr.push([input_name, input_note]);


        //not jump to a new page, stay in the same page
        evt.preventDefault();


    });


    $('#play').on('click', function () {
        play_begining();
        // var input = prompt("give me your song");

        console.log(notes_arr);

        // playSong(parseSong(notes_arr[0]), 400, playSong(parseSong(notes_arr[1]),400));

        //notes_arr[0][0] the first 0 is the first song, the second 0 is the 0 argument

        //show the song's name when playing
        $('#songName').html('Now playing ' + notes_arr[0][0]);


        playSong(parseSong(notes_arr[0][1]), 400, playNext);

        var i = 0;

        function playNext() {
            i++;


            //play the next song
            if (i < notes_arr.length) {

                //show the next song's name
                $('#songName').html("Now playing " + notes_arr[i][0]);
                //play the song
                playSong(parseSong(notes_arr[i][1]), 400, playNext);

            } else {

                //if n=notes_arr.length
                play_finishing();
            }

        }


    });


});



