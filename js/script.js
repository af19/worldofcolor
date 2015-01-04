$(document).ready(function(){
  var trueRed;
  var trueBlue;
  var trueGreen;
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


  getColor();
  redChoices();
  greenChoices();
  blueChoices();

  $(function() {
    $( ".draggable" ).draggable({ 
      revert: 'invalid',
      stack: '.draggable' 
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
  function redChoices() {
    tempChoice0 = trueRed;
    tempChoice1 = trueRed + 85;
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
  function greenChoices() {
    tempChoice0 = trueGreen;
    tempChoice1 = trueGreen + 85;
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
  function blueChoices() {
    tempChoice0 = trueBlue;
    tempChoice1 = trueBlue + 85;
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
    $('.' + color).draggable('destroy').css("opacity", "0.2");
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
  
  function getColor() {
    $.ajax({
      url: 'data/color.json',
      async: false,
      dataType: 'json',
      success: function(data) {
        trueRed = data.Color[0].Red;
        trueGreen = data.Color[0].Green;
        trueBlue = data.Color[0].Blue;
        $('#goal').css('background-color', 'rgb('+trueRed+','+trueGreen+','+trueBlue+')');
      }
    });
  } 
});