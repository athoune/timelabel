var timelabel = function(start, end) {
    this.start = start;
    this.end = end;
    this.delta = end.getTime() - start.getTime();
};

(function() {
    var MINUTE = 60 * 1000,
        HOUR = MINUTE * 60,
        DAY = HOUR * 24,
        MONTH = DAY * 30,
        YEAR = DAY * 365;

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

    timelabel.prototype.labels = function(max) {
        var step = this.delta / max,
            i = moment(this.start),
            end = moment(this.end),
            labels = [];

        if (step > YEAR) {
            if (this.start.getMonth() > 0 || this.start.getDate() > 1) {
                i.add('year', 1);
            }
            i.date(1).month(0);
            while (i < end) {
                labels.push(moment(i));
                i.add('year', 1);
            }
            return labels;
        }

        if (step > MONTH) {
            if (this.start.getDate() > 1) {
                i.add('month', 1);
            }
            i.date(1);
            while (i < end) {
                labels.push(moment(i));
                i.add('month', 1);
            }
            return labels;
        }
    };
})();
