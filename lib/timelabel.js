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

    var LOG10 = Math.log(10);
    function log10(x) {
        return Math.log(x) / LOG10;
    }

    timelabel.prototype.labels = function() {
        var step = this.delta,
            i = moment(this.start),
            end = moment(this.end),
            labels = [];

        if (step > YEAR) {
            var year = step / YEAR;
            var incr = Math.pow(10, Math.floor(log10(year)));
            if (this.start.getMonth() > 0 || this.start.getDate() > 1) {
                i.add('year', 1);
            }
            i.date(1).month(0);
            while (i < end) {
                labels.push(moment(i));
                i.add('year', incr);
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

        if (step > DAY) {
            i.hour(0).minute(0);
            while (i < end) {
                labels.push(moment(i));
                i.add('day', 1);
            }
            return labels;
        }
        //FIXME sub day
    };
})();
