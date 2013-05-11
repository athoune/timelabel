test("periods", function() {
    var start, end, t;
    end = new Date(2013, 4, 10);
    start = new Date(2013, 4, 9);
    t = new timelabel(start, end);
    ok(t.period(), 'day');
    start = new Date(2013, 3, 10);
    t = new timelabel(start, end);
    ok(t.period(), 'month');
});


test("add", function() {
    var d = new Date(2013, 12, 24);
    var dd = timelabel.addMonth(d, 2);
    ok(2, dd.getMonth());
    ok(2014, dd.getFullYear());
    var ddd = timelabel.addDay(d, 7)
});
