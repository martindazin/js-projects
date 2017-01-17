
QUnit.module('I convert euro to usd',{
    beforeEach: function() {
        this.currency = 'USD';
    }
});
QUnit.test('1€ should return 1,06$', function(assert) {
    assert.strictEqual(convertEuro(1, this.currency), 1.06, 'succeed !');
});
QUnit.test('1€ should return 2,12$', function(assert) {
    assert.strictEqual(convertEuro(2, this.currency), 2.12, 'succeed !');
});



QUnit.module('I convert euro to gbp',{
    beforeEach: function() {
        this.currency = 'GBP';
    }
});
QUnit.test('1€ should return 0,87£', function(assert) {
    assert.strictEqual(convertEuro(1, this.currency), 0.87, 'succeed !');
});
QUnit.test('2€ should return 1,74£', function(assert) {
    assert.strictEqual(convertEuro(2, this.currency), 1.74, 'succeed !');
});


QUnit.module('I convert euro to jpy',{
    beforeEach: function() {
        this.currency = 'JPY';
    }
});
QUnit.test('1€ should return 120,78¥', function(assert) {
    assert.strictEqual(convertEuro(1, this.currency), 120.78, 'succeed !');
});
QUnit.test('2€ should return 241,56¥', function(assert) {
    assert.strictEqual(convertEuro(2, this.currency), 241.56, 'succeed !');
});


QUnit.module('I try with currency not handled by the function');
QUnit.test('I try with NZD', function(assert) {
    assert.throws(
        function() {
            convertEuro(1, 'NZD');
        },
        /Currency not handled/,
        "throws error Currency not handled"
    );
});
