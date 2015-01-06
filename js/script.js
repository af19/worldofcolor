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
  var count = 0;
  var maxColors;
  var newGame;

  var dropedRedID;
  var dropedGreenID;
  var dropedBlueID;


  getColors();
  redChoices(0);
  greenChoices(0);
  blueChoices(0);
  setGoal(0);
  
  dragDrop();

  function dragDrop() {
    $(".draggable").draggable({ 
      revert: 'invalid',
      stack: '.draggable',
    });
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        var draggableId = ui.draggable.attr("id");
        $('#' + draggableId).css('visibility', 'hidden');
        switch (draggableId) {
          case 'red0':
            dropedRed = redChoice0;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("red");
            $('#red0').remove();
            dropedRedID = 0;
            break;
          case 'red1':
            dropedRed = redChoice1;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("red");
            $('#red1').remove();
            dropedRedID = 1;
            break;
          case 'red2':
            dropedRed = redChoice2;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("red");
            $('#red2').remove();
            dropedRedID = 2;
            break;
          case 'green0':
            dropedGreen = greenChoice0;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("green");
            $('#green0').remove();
            dropedGreenID = 0;
            break;
          case 'green1':
            dropedGreen = greenChoice1;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("green");
            $('#green1').remove();
            dropedGreenID = 1;
            break;
          case 'green2':
            dropedGreen = greenChoice2;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("green");
            $('#green2').remove();
            dropedGreenID = 2;
            break;
          case 'blue0':
            dropedBlue = blueChoice0;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("blue");
            $('#blue0').remove();
            dropedBlueID = 0;
            break;
          case 'blue1':
            dropedBlue = blueChoice1;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("blue");
            $('#blue1').remove();
            dropedBlueID = 1;
            break;
          case 'blue2':
            dropedBlue = blueChoice2;
            $('#droppable').css('background-color', "rgb("+dropedRed+","+dropedGreen+","+dropedBlue+")");
            lockChoices("blue");
            $('#blue2').remove();
            dropedBlueID = 2;
            break;
        }
      }
    });
  }
  
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
    blueChoice0 = tempArr[0];
    blueChoice1 = tempArr[1];
    blueChoice2 = tempArr[2];
    tempArr.length = 0;
    $('#blue0').css('background-color', 'rgb(0,0,'+blueChoice0+')');
    $('#blue1').css('background-color', 'rgb(0,0,'+blueChoice1+')');
    $('#blue2').css('background-color', 'rgb(0,0,'+blueChoice2+')');
  }

  function lockChoices(color) {
    $('.' + color).draggable('destroy').css("opacity", "0.2");
    dropCheck++;
    if (dropCheck == 3) {
      $('#redResult').html(dropedRed);
      $('#greenResult').html(dropedGreen);
      $('#blueResult').html(dropedBlue);
      $('#feedback').show();
      if ( ($('#droppable').css('background-color')) == ($('#goal').css('background-color')) ) {
        newGame = true;
        $('#play-again').show();
      } else {
        $('#try-again').show();
      }
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


  function resetGame() {
    $('#droppable').css('background-color', "transparent");
    dropedRed = 0;
    dropedGreen = 0;
    dropedBlue = 0;
    dropCheck = 0;
    $('.draggable').css({"opacity":"1", "visibility":"visible"});
    if (dropedRedID == 0) {
      $('.container').eq(0).append('<div class="center draggable red" id="red0"></div>');
    }
    if (dropedRedID == 1) {
      $('.container').eq(1).append('<div class="center draggable red" id="red1"></div>');
    }
    if (dropedRedID == 2) {
      $('.container').eq(2).append('<div class="center draggable red" id="red2"></div>');
    }
    if (dropedGreenID == 0) {
      $('.container').eq(3).append('<div class="center draggable green" id="green0"></div>');
    }
    if (dropedGreenID == 1) {
      $('.container').eq(4).append('<div class="center draggable green" id="green1"></div>');
    }
    if (dropedGreenID == 2) {
      $('.container').eq(5).append('<div class="center draggable green" id="green2"></div>');
    }
    if (dropedBlueID == 0) {
      $('.container').eq(6).append('<div class="center draggable blue" id="blue0"></div>');
    }
    if (dropedBlueID == 1) {
      $('.container').eq(7).append('<div class="center draggable blue" id="blue1"></div>');
    }
    if (dropedBlueID == 2) {
      $('.container').eq(8).append('<div class="center draggable blue" id="blue2"></div>');
    }


    if (newGame == true) {
      count++;
      if (count == maxColors) {
        count = 0;
      }
      newGame = false; 
    }
    
    redChoices(count);
    greenChoices(count);
    blueChoices(count);
    setGoal(count);

    dragDrop();
    
  }

  $('#play-again').click(function() {
    resetGame();
    $('#feedback, #play-again').hide();
  });

  $('#try-again').click(function() {
    resetGame();
    $('#feedback, #try-again').hide();
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