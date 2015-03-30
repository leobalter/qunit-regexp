# qunit-regexp

A QUnit plugin to assert regexp tests. The advantage of using it is the fail output showing the string and the regexp values.

## Install

This module requires the original QUnit (on npm as `qunitjs`) in order to run.

```
npm install --save-dev qunitjs qunit-regexp
```

## Usage

```js
QUnit.test( "RegExps", function( assert ) {
    assert.regexp( "Cheers!", "^Cheers!$", "accepts a string" );
    assert.regexp( "Cheers!", /^cheers!$/i, "accepts a regexp with flags" );
    assert.regexp( "Cheers!", /^Cheers!$/, "accepts a regexp" );
});
```
