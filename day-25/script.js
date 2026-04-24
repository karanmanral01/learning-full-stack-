console.log("hey everyone");

setTimeout(function(){
   console.log("hlo guys");
}, 2000)

console.log("hii buddy");


function abcd(fn) {
    fn(function (fn3) {
        fn3(function (fn5) {
            fn5(function (fn7) {
                fn7(function (fn8) {
                    fn8(function (fn10) {
                        fn10();
                    });
                });
            });
        });
    });
}

abcd(function (fn2) {
    fn2(function (fn4) {
        fn4(function (fn6) {
            fn6(function (fn7) {
                fn7(function (fn9) {
                    fn9(function(){
                        console.log("hey guys");
                    });
                });
            });
        });
    });
});


function abcd(fn) {
    fn(function (fn3) {
        fn3(function (fn5) {
            fn5(function (fn7) {
                fn7(function (fn9) {
                    fn9(function () {
                        console.log("Iam hare");
                    });
                });
            });
        });
    });
}

abcd(function (fn2) {
    fn2(function (fn4) {
        fn4(function (fn6) {
            fn6(function (fn8) {
                fn8(function (fn10) {
                    fn10();
                });
            });
        });
    });
});


