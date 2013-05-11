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
