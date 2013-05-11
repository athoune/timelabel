var timelabel = function(start, end) {
    this.start = start;
    this.end = end;
    this.delta = end - start;
};

(function() {
    var YEAR, MONTH, DAY, HOUR, MINUTE;
    YEAR = 360 * 24 * 3600;
    MONTH = 30 * 24 * 3600;
    DAY = 24 * 3600;
    HOUR = 3600;
    MINUTE = 60;

    timelabel.addDay = function(date, delta) {
        return date.setTime(date.getTime() + delta * DAY);
    };

    timelabel.addMonth = function(date, delta) {
        var month = date.getMonth();
        month += delta;
        var year = Math.floor(month / 12);
        date.setFullYear(date.getFullYear() + year);
        date.setMonth(month % 12 + 1);
        return date;
    };

    timelabel.prototype.period = function() {
        if (this.delta > YEAR) {
            return 'year';
        }
        if (this.delta > MONTH) {
            return 'month';
        }
        if (this.delta > DAY) {
            return 'day';
        }
        if (this.delta > HOUR) {
            return 'hour';
        }
        if (this.delta > MINUTE) {
            return 'minute';
        }
        return 'second';
    };

    timelabel.prototype.labels = function(length) {
        if (this.delta > YEAR) {
            var month = this.start.getMonth();
            var day = this.start.getDate();
            if(day > 1) { month += 1 }
        }
    };
})();
