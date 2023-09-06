function mergeSort(arr) {
  if (arr.length < 2) return arr;
  else {
    let left = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    let right = mergeSort(arr.slice(Math.floor(arr.length/2)));

    arr.splice(0);
    let li = 0;
    let ri = 0;
    while (li < left.length && ri < right.length) {
      if (left[li] <= right[ri]) {
        arr.push(left[li]);
        ++li;
      }
      else {
        arr.push(right[ri]);
        ++ri;
      }
      
      if (left.length === li) arr = arr.concat(right.slice(ri));
      if (right.length === ri) arr = arr.concat(left.slice(li));
    }
    return arr;
  }
}

export {
  mergeSort
};