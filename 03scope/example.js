test( "scope tests", function() {

    ok(true, "|----- BEFORE OUTER -----|");
    ok(typeof outer === 'function', "outer() is in scope");
    ok(typeof inner === 'function', "inner() is in scope");
    ok(typeof a === 'number', "a is in scope");
    ok(typeof b === 'number', "b is in scope");
    ok(typeof c === 'number', "c is in scope");

    function outer() {
        ok(true, "|----- INSIDE OUTER, BEFORE a -----|");
        ok(typeof outer === 'function', "outer() is in scope");
        ok(typeof inner === 'function', "inner() is in scope");
        ok(typeof a === 'number', "a is in scope");
        ok(typeof b === 'number', "b is in scope");
        ok(typeof c === 'number', "c is in scope");
        var a = 1;
        ok(true, "|----- INSIDE OUTER, AFTER a -----|");
        ok(typeof outer === 'function', "outer() is in scope");
        ok(typeof inner === 'function', "inner() is in scope");
        ok(typeof a === 'number', "a is in scope");
        ok(typeof b === 'number', "b is in scope");
        ok(typeof c === 'number', "c is in scope");
        function inner() {
            var d = 7;
            ok(true, "|----- INSIDE INNER, AFTER d -----|");
            ok(typeof d === 'number', "d is in scope");
        }
        var b = 2;
        ok(true, "|----- INSIDE OUTER, AFTER inner() and b -----|");
        ok(typeof outer === 'function', "outer() is in scope");
        ok(typeof inner === 'function', "inner() is in scope");
        ok(typeof a === 'number', "a is in scope");
        ok(typeof b === 'number', "b is in scope");
        ok(typeof c === 'number', "c is in scope");
        ok(typeof d === 'number', "d is in scope");
        if (a == 1) {
            var c = 3;
            ok(true, "|----- INSIDE OUTER, INSIDE if -----|");
            ok(typeof outer === 'function', "outer() is in scope");
            ok(typeof inner === 'function', "inner() is in scope");
            ok(typeof a === 'number', "a is in scope");
            ok(typeof b === 'number', "b is in scope");
            ok(typeof c === 'number', "c is in scope");
        }
        ok(true, "|----- INSIDE OUTER, OUTSIDE if -----|");
        ok(typeof outer === 'function', "outer() is in scope");
        ok(typeof inner === 'function', "inner() is in scope");
        ok(typeof a === 'number', "a is in scope");
        ok(typeof b === 'number', "b is in scope");
        ok(typeof c === 'number', "c is in scope");
        inner();
    }
    outer();
    ok(true, "|----- AFTER OUTER -----|");
    ok(typeof outer === 'function', "outer() is in scope");
    ok(typeof inner === 'function', "inner() is in scope");
    ok(typeof a === 'number', "a is in scope");
    ok(typeof b === 'number', "b is in scope");
    ok(typeof c === 'number', "c is in scope");
});
