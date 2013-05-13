test("periods", function() {
    var start, end, t;
    end = new Date(2013, 4, 11);
    start = new Date(2013, 4, 9);
    t = new timelabel(start, end);
    equal(t.period(), 'day');
    start = new Date(2013, 3, 10);
    t = new timelabel(start, end);
    equal(t.period(), 'month');
    start = new Date(2012, 4, 10);
    t = new timelabel(start, end);
    equal(t.period(), 'year');
});

test("add", function() {
    // December is 11, thank you js.
    var d = new Date(2013, 11, 24);
    equal(d.getMonth(), 11);
    var dd = timelabel.addMonth(d, 2);
    equal(dd.getMonth(), 1);
    equal(dd.getFullYear(), 2014);
    dd = timelabel.addDay(d, 8);
    equal(dd.getFullYear(), 2014);
    equal(dd.getMonth(), 0); //january
    equal(dd.getDate(), 1, 'The first');
    dd = timelabel.addYear(d, 2);
    equal(dd.getFullYear(), 2015);
});

test("labels", function() {
    var delta = new timelabel(new Date(1984, 11, 13), new Date(2013, 5, 11));
    var l = delta.labels();
    equal(l.length, 341);
});
