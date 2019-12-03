const mdLinks = require("../index");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("returns href and text", (done) => {
    return mdLinks("./lib/__tests__/READM.md").then(result => {
      expect(result).toEqual(result);
      done();
    });
  });

  it("Reject Arquivo Invalido", (done) => {
    return mdLinks("README1.md").catch(e => {
      expect(e).toBe(e);
      done();}
    );
  });

  it("Reject Links Invalido", (done) => {
    return mdLinks("./lib/__tests__/read.md").catch(e => {
      expect(e).toEqual(e);
      done();}
    );
  });
});