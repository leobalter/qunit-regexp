global.QUnit = require( "qunitjs" );

module.exports = QUnit.done;

require( "qunit-reporter-stdout" )( QUnit, { output: "minimal" } );

require ( "../lib/index.js" );

QUnit.module( "RegExp" );

QUnit.test( "tests", function( assert ) {
    assert.regexp( "Cheers!", "^Cheers!$", "accepts a string" );
    assert.regexp( "Cheers!", /^cheers!$/i, "accepts a regexp with flags" );
    assert.regexp( "Cheers!", /^Cheers!$/, "accepts a regexp" );
} );

QUnit.load();
