function fibRec(n) {
  if (n <= 1) return n;
  return fibRec(n-1) + fibRec(n-2);
}

function fib(n) {
  let arr = [0,1];
  if (n === 0) arr.pop();
  for (let i = 1; i < n; i++) {
    arr.push(arr[arr.length-2] + arr[arr.length-1]);
  }

  return arr;
}

export {
  fibRec,
  fib
}