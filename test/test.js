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

test("labels", function() {
    var delta = new timelabel(new Date(1984, 11, 13), new Date(2013, 5, 11)),
        l = delta.labels();
    equal(l.length, 3);

    delta = new timelabel(new Date(2013, 0, 2), new Date(2013, 3, 15));
    l = delta.labels();
    equal(l.length, 4);

    delta = new timelabel(new Date(1976, 0, 2), new Date(2013, 3, 15));
    l = delta.labels();
    equal(l.length, 4);
    delta = new timelabel(new Date(1903, 0, 2), new Date(2013, 3, 15));
    l = delta.labels();
    equal(l.length, 2);
});
