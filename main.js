function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(timeleft + ' <span>sek</span>');
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    } else {
        $element.find('div').remove(timeleft)
    }
};

progress(180, 180, $('#progressBar1'));
progress(60, 60, $('#progressBar2'));