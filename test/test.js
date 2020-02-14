describe("resolveDiscriminant", function(a, b, c) {
  D = b * b - 4 * a * c;

  it("check 1", function() {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
  });

  it("check 2", function() {
    x2 = (-b - Math.sqrt(D)) / (2 * a);
  });
  it("check 3", function() {
    x1 = -b / (2 * a);
  });
});
