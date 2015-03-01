/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-147-1.js
 * @description Object.defineProperty - 'Attributes' is the JSON object that uses Object's [[Get]] method to access the 'value' property of prototype object  (8.10.5 step 5.a)
 */


function testcase() {
        var obj = {};

        try {
            Object.prototype.value = "JSON";

            Object.defineProperty(obj, "property", JSON);

            return obj.property === "JSON";
        } finally {
            delete Object.prototype.value;
        }
    }
runTestCase(testcase);