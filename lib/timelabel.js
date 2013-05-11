var timelabel = function(start, end) {
    this.delta = end - start;
};

(function() {
    var YEAR, MONTH, DAY, HOUR, MINUTE;
    YEAR = 360 * 24 * 3600;
    MONTH = 30 * 24 * 3600;
    DAY = 24 * 3600;
    HOUR = 3600;
    MINUTE = 60;
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
})();
