QUnit.assert.regexp = function( actual, expected, message ) {

    // Avoid unnecessary use of new RegExp for a better performance
    var re = ( expected instanceof RegExp ? expected : new RegExp( expected ) );
    var result = re.test( actual );

    this.push( result, actual, expected, message );
};
