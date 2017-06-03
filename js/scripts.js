function getTriangleArea(a, h) {
  if ( a, h > 0 ) {
    console.log('Prawidłowe dane');
  } else if ( a, h <= 0 ) {
    console.log('Nieprawidłowe dane');
  }
    
  return a * h / 2
}

console.log( getTriangleArea(10,6) );
