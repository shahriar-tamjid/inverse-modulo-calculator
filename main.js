function outcome() {
  const x = Number(document.getElementById("num-one").value);
  const y = Number(document.getElementById("num-two").value);

  // Calculating the Inverse Modulo
  const result = modInverse(x, y);

  document.getElementById("resultArea").innerHTML =
    " The Inverse Modulo is =  " + String(result);
}

/////////////////// Actual Operation //////////////////////
function modInverse(a, m) {
  // validate inputs
  [a, m] = [Number(a), Number(m)];
  if (Number.isNaN(a) || Number.isNaN(m)) {
    return NaN; // invalid input
  }
  a = ((a % m) + m) % m;
  if (!a || m < 2) {
    return NaN; // invalid input
  }
  // find the gcd
  const s = [];
  let b = m;
  while (b) {
    [a, b] = [b, a % b];
    s.push({ a, b });
  }
  if (a !== 1) {
    return NaN; // inverse does not exists
  }
  // find the inverse
  let x = 1;
  let y = 0;
  for (let i = s.length - 2; i >= 0; --i) {
    [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)];
  }
  return ((y % m) + m) % m;
}

// Tests
console.log(modInverse(15, 26)); // = 7
