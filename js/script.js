$(document).ready(function(){
  var trueRed = [];
  var trueBlue = [];
  var trueGreen = [];
  var tempChoice0;
  var tempChoice1;
  var tempChoice2;
  var tempArr;
  var redChoice0;
  var redChoice1;
  var redChoice2;
  var greenChoice0;
  var greenChoice1;
  var greenChoice2;
  var blueChoice0;
  var blueChoice1;
  var blueChoice2;
  var dropCheck = 0;
  var dropedRed = 0;
  var dropedBlue = 0;
  var dropedGreen = 0;
  var count = 1;
  var maxColors;


  getColors();
  redChoices(0);
  greenChoices(0);
  blueChoices(0);
  setGoal(0);

  $('#red0').data({
    'topRed0': $('#red0').css('top'),
    'leftRed0': $('#red0').css('left')
  });

  $(function() {
    $( ".draggable" ).draggable({ 
      revert: 'invalid',
      stack: '.draggable' 
    });
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        var draggableId = ui.draggable.attr("id");
        $('#' + draggableId).css('visibility', 'hidden');
        $("#draggable").css('left');
        switch (draggableId) {
          case 'red0':
            dropedRed = redChoice0;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("red");
            break;
          case 'red1':
            dropedRed = redChoice1;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("red");
            break;
          case 'red2':
            dropedRed = redChoice2;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("red");
            break;
          case 'green0':
            dropedGreen = greenChoice0;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("green");
            break;
          case 'green1':
            dropedGreen = greenChoice1;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("green");
            break;
          case 'green2':
            dropedGreen = greenChoice2;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("green");
            break;
          case 'blue0':
            dropedBlue = blueChoice0;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("blue");
            break;
          case 'blue1':
            dropedBlue = blueChoice1;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("blue");
            break;
          case 'blue2':
            dropedBlue = blueChoice2;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("blue");
            break;
        }
      }
    });
  });
  function redChoices(number) {
    tempChoice0 = trueRed[number];
    tempChoice1 = trueRed[number] + 85;
    if (tempChoice1 > 255) {
      tempChoice1 -= 256;
    }
    tempChoice2 = tempChoice1 + 85;
    if (tempChoice2 > 255) {
      tempChoice2 -= 256;
    }
    tempArr = [tempChoice0, tempChoice1, tempChoice2];
    tempArr = tempArr.sort(CompareForSort);
    console.log("sort: " + tempArr[0]);
    redChoice0 = tempArr[0];
    redChoice1 = tempArr[1];
    redChoice2 = tempArr[2];
    tempArr.length = 0;
    $('#red0').css('background-color', 'rgb('+redChoice0+',0,0)');
    $('#red1').css('background-color', 'rgb('+redChoice1+',0,0)');
    $('#red2').css('background-color', 'rgb('+redChoice2+',0,0)');
  }
  function greenChoices(number) {
    tempChoice0 = trueGreen[number];
    tempChoice1 = trueGreen[number] + 85;
    if (tempChoice1 > 255) {
      tempChoice1 -= 256;
    }
    tempChoice2 = tempChoice1 + 85;
    if (tempChoice2 > 255) {
      tempChoice2 -= 256;
    }
    tempArr = [tempChoice0, tempChoice1, tempChoice2];
    tempArr = tempArr.sort(CompareForSort);
    console.log("sort: " + tempArr[0]);
    greenChoice0 = tempArr[0];
    greenChoice1 = tempArr[1];
    greenChoice2 = tempArr[2];
    tempArr.length = 0;
    $('#green0').css('background-color', 'rgb(0,'+greenChoice0+',0)');
    $('#green1').css('background-color', 'rgb(0,'+greenChoice1+',0)');
    $('#green2').css('background-color', 'rgb(0,'+greenChoice2+',0)');
  }
  function blueChoices(number) {
    tempChoice0 = trueBlue[number];
    tempChoice1 = trueBlue[number] + 85;
    if (tempChoice1 > 255) {
      tempChoice1 -= 256;
    }
    tempChoice2 = tempChoice1 + 85;
    if (tempChoice2 > 255) {
      tempChoice2 -= 256;
    }
    tempArr = [tempChoice0, tempChoice1, tempChoice2];
    tempArr = tempArr.sort(CompareForSort);
    console.log("sort: " + tempArr[0]);
    blueChoice0 = tempArr[0];
    blueChoice1 = tempArr[1];
    blueChoice2 = tempArr[2];
    tempArr.length = 0;
    $('#blue0').css('background-color', 'rgb(0,0,'+blueChoice0+')');
    $('#blue1').css('background-color', 'rgb(0,0,'+blueChoice1+')');
    $('#blue2').css('background-color', 'rgb(0,0,'+blueChoice2+')');
  }

  function lockChoices(color) {
    $('.' + color).draggable('disable').css("opacity", "0.2");
    dropCheck++;
    if (dropCheck == 3) {
      $('#redResult').html(dropedRed);
      $('#greenResult').html(dropedGreen);
      $('#blueResult').html(dropedBlue);
      $('#feedback').show();

    }
  }
  // Sorts array elements in ascending order numerically.
  function CompareForSort(first, second) {
    if (first == second)
      return 0;
    if (first < second)
      return -1;
    else
      return 1; 
  }

  function setGoal(number) {
    $('#goal').css('background-color', 'rgb('+trueRed[number]+','+trueGreen[number]+','+trueBlue[number]+')');
  }

  function playAgain() {
    $('#droppable').css('background-color', "transparent");
    dropedRed = 0;
    dropedGreen = 0;
    dropedBlue = 0;
    $('#red0').css({
      'top': $('#red0').data('topRed0'),
      'left': $('#red0').data('leftRed0')
    });
    $('.draggable').draggable('enable').css({"opacity":"1", "visibility":"visible"});
    redChoices(count);
    greenChoices(count);
    blueChoices(count);
    setGoal(count);
    count++;
    if (count == maxColors) {
      count = 0;
    }
  }

  $('#play-again').click(function() {
    playAgain();
  });
  
  function getColors() {
    $.ajax({
      url: 'data/color.json',
      async: false,
      dataType: 'json',
      success: function(data) {
        maxColors = data.Color.length;
        var getRandomNum;
        var randomNum
        console.log(maxColors);
        var randomColorArr= [];
        for (var i = 0; i < maxColors; i++) {
          getRandomNum = true;
          do {
            randomNum = Math.floor(Math.random() * maxColors);
            if (randomColorArr.indexOf(randomNum) === -1) {
              randomColorArr[i] = randomNum;
              console.log(randomColorArr[i]);
              getRandomNum = false;
            }
          } while (getRandomNum);
          trueRed[i] = data.Color[randomColorArr[i]].Red;
          trueGreen[i] = data.Color[randomColorArr[i]].Green;
          trueBlue[i] = data.Color[randomColorArr[i]].Blue;
        }
      }
    });
  } 
});