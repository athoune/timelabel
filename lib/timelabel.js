var timelabel = function(start, end) {
    this.start = start;
    this.end = end;
    this.delta = end.getTime() - start.getTime();
};

(function() {
    var YEAR, MONTH, DAY, HOUR, MINUTE;
    MINUTE = 60 * 1000;
    HOUR = MINUTE * 60;
    DAY = HOUR * 24;
    MONTH = DAY * 30;
    YEAR = DAY * 365;

    timelabel.addDay = function(date, delta) {
        date.setTime(date.getTime() + delta * DAY);
        return date;
    };

    timelabel.addMonth = function(date, delta) {
        var month = date.getMonth() + delta;
        console.log(date.getMonth(), delta, month);
        var year = Math.floor(month / 12);
        date.setFullYear(date.getFullYear() + year);
        date.setMonth(month % 12 + 1);
        return date;
    };

    timelabel.addYear = function(date, delta) {
        date.setFullYear(date.getFullYear() + delta);
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
            var i = new Date(this.start.getTime());
            console.log('cpt', i);
            if (this.start.getDate() > 1) {
                i = timelabel.addMonth(i, 1);
            }
            console.log(i);
            var labels = [];
            while (i.getTime() < this.end.getTime()) {
                labels.push(i);
                i = timelabel.addMonth(i, 1);
            }
            return labels;

        }
    };
})();
