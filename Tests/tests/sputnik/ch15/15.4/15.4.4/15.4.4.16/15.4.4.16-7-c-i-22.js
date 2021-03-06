/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-7-c-i-22.js
 * @description Array.prototype.every - element to be retrieved is inherited accessor property without a get function on an Array
 */


function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return typeof val === "undefined";
        }

        try {
            Object.defineProperty(Array.prototype, "0", {
                set: function () { },
                configurable: true
            });

            return [, ].every(callbackfn) && accessed;
        } finally {
            delete Array.prototype[0];
        }

    }
runTestCase(testcase);
