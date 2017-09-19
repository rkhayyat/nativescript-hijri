var Hijri = require("nativescript-hijri").Hijri;
var hijri = new Hijri();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(hijri.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(hijri.functionname()).toEqual(jasmine.any(Promise));
  });
});