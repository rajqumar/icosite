function getTimezoneName() {
    timezone = jstz.determine()
    return timezone.name();
}

Date.daysBetween = function( date1 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Calculate the difference in milliseconds
  var difference_ms = date1;
  //take out milliseconds
  difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24); 
  
  //return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
    if(days < 10)
        days='0'+days;
    if(hours < 10)
        hours='0'+hours;
    if(minutes < 10)
        minutes='0'+minutes;
    
    if(seconds < 10)
        seconds='0'+seconds;
    

    /*$('#days').html(days);
    $('#hours').html(hours);
    $('#minutes').html(minutes);
    $('#seconds').html(seconds);*/

    $('#days').html('00');
    $('#hours').html('00');
    $('#minutes').html('00');
    $('#seconds').html('00');
    

}

$(function(){
    // function timer(settings){
    //     var config = {
    //         endDate: '2017-11-15 13:30:00',
    //         timeZone: 'IST',
    //         hours: $('#hours'),
    //         minutes: $('#minutes'),
    //         seconds: $('#seconds'),
    //         newSubMessage: 'and should be back online in a few minutes...'
    //     };
    //     function prependZero(number){
    //         return number < 10 ? '0' + number : number;
    //     }
    //     $.extend(true, config, settings || {});
    //     var currentTime = moment();
    //     //console.log(currentTime);
    //     var endDate = moment.tz(config.endDate, config.timeZone);
    //     var diffTime = endDate.valueOf() - currentTime.valueOf();
        
    //     var duration = moment.duration(diffTime, 'milliseconds');

    //     //console.log(diffTime)
    //     var days = parseInt(duration.asDays());
    //     //console.log(days)
    //     var interval = 1000;
    //     var subMessage = $('.sub-message');
    //     var clock = $('.clock');
    //     if(diffTime < 0){
    //         endEvent(subMessage, config.newSubMessage, clock);
    //         return;
    //     }
    //     if(days > 0){
    //         $('#days').text(prependZero(days));
    //         $('.days').css('display', 'inline-block');
    //     }
    //     var intervalID = setInterval(function(){
    //         duration = moment.duration(duration - interval, 'milliseconds');
    //         var hours = duration.hours(),
    //             minutes = duration.minutes(),
    //             seconds = duration.seconds();
    //         days = parseInt(duration.asDays());
    //         if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
    //             clearInterval(intervalID);
    //             endEvent(subMessage, config.newSubMessage, clock);
    //             window.location.reload();
    //         }
    //         if(days === 0){
    //             $('.days').hide();
    //         }
    //         $('#days').text(prependZero(days));
    //         config.hours.text(prependZero(hours));
    //         config.minutes.text(prependZero(minutes));
    //         config.seconds.text(prependZero(seconds));
    //     }, interval);
    // }
    // function endEvent($el, newText, hideEl){
    //     $el.text(newText);
    //     hideEl.hide();
    // }
    // timer();



    

    
    function getCounter(){    
        var timeZone=getTimezoneName();
        //document.cookie = 'timezoneName='+timeZone;
        var now = moment.utc();
        // get the zone offsets for this time, in minutes
        var Current_tz_offset = moment.tz.zone(timeZone).offset(now); 
        var HongKong_tz_offset = moment.tz.zone("Asia/Hong_Kong").offset(now);
        // calculate the difference in hours
        diff = (HongKong_tz_offset - Current_tz_offset) / 60;

        var endTime = new Date('2018-01-05T21:00:00');

        min = 0;
        
        if(eval(diff) < 0)
        {
            endTime.setHours(endTime.getHours() + diff);

            if(diff%1==-0.5)
            {
                min = 30;
            }
            
            endTime.setMinutes(endTime.getMinutes() + min);
        }
        else
        {
            endTime.setHours(endTime.getHours() + diff);
            if(diff%1==.5)
            {
                min = 30;
            }
            endTime.setMinutes(endTime.getMinutes() + min);
        }

        var currentTime = new Date().getTime();
        var hourDiff = endTime-currentTime; //in ms
        Date.daysBetween(hourDiff)


    }

    setInterval(getCounter, 1000);
        



});