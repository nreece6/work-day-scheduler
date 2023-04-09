// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs()
var calendarBlockEl = document.querySelector('.container')


// Display Current Day/Time Refreshing every second
setInterval(function() {
  $('#currentDay').text(dayjs().format('[Today is ] MMM D, YYYY'))
  $('#currentTime').text(dayjs().format('[The time is ] hh:mm:ss'))
  ,1000})

  //Listener for save button click - uses jQuery to get nearby values, grab parent ID and save to localStorage
  $('.saveBtn').on('click', function() {
    var textValue = $(this).siblings('.description').val()
    var timeValue = $(this).parent().attr('id')
    localStorage.setItem(timeValue, textValue)
  })

  // gets values for each hour from local storage
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  //main function to determine current time and switch classes depending on relation to current time
function checkTime() {
  var currentTime = today.format('H')
  console.log(currentTime)

  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour-")[1]);
    console.log(timeId)

    // if the time Id attribute is before the current hour, add the past class
    if (timeId < currentTime) {
      $(this).addClass('past');
    } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeId == currentTime) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
})
}

checkTime()


 