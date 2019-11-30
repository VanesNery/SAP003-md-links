const mdLinks = require('../index');

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("returns href and text", (done) => {
    return mdLinks('./README.md').then(result => {
      expect(result).toEqual(result)
      done()
    });
  });

  it("returns reject", () => {
    return mdLinks('./READM.md').catch(e => expect(e).toEqual(e));
  });
})
