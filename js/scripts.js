function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    return a * h / 2
  }
  return 'Nieprawidłowe dane';
}

console.log(getTriangleArea(0, 6));

var triangle1Area = getTriangleArea(5, 5);
var triangle2Area = getTriangleArea(7, 8);
var triangle3Area = getTriangleArea(12, 14);

console.log(triangle1Area, triangle2Area, triangle3Area);