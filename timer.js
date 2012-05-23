var count;
var timerId;

init()

function init()
{
  reset();
  $('#pause').on('click', pause)
  $('#start').on('click', start)
  $('#reset').on('click', reset)
}

function timer()
{
  if (count <=0)
    clearInterval(timerId);
  else
    count--;

  displayTime(count);
}

function displayTime(seconds)
{
  var time = toMinutes(seconds);
  $('#timer').html(time[0] + ':' + addZero(time[1]));
}

function toMinutes(seconds)
{
  var time = [];
  time[0] = Math.floor(seconds/60)
  time[1] = seconds - time[0] * 60
  return time;
}

function addZero(num)
{
  return (String(num).length < 2) ? "0" + num :  num;
}

function pause()
{
  $('#pause').fadeOut(200, function () {
    $('#start').fadeIn();
  });

  clearInterval(timerId);
}

function start()
{
  $('#start').fadeOut(200, function () {
    $('#pause').fadeIn();
  });

  timerId = setInterval(timer, 1000);
}

function reset()
{
  count = 15 * 60;

  $('#timer').fadeOut(200, function () {
    displayTime(count);
    $(this).fadeIn();
  })
}
