function testcase() {
        var errObj = new Error();
        var preCheck = Object.isExtensible(errObj);
        Object.preventExtensions(errObj);

        errObj[0] = 12;
		console.log(preCheck);
        return preCheck && !errObj.hasOwnProperty("0");
    }
console.log(testcase());