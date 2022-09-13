async function merger(low, high, mid) {
  if (low < high) {
    var blocks = document.querySelectorAll(".block");
    var p = [];
    var i = low;
    var j = mid + 1;
    while (i <= mid && j <= high) {
      if (
        Number(blocks[i].childNodes[0].innerHTML) <
        Number(blocks[j].childNodes[0].innerHTML)
      ) {
        p.push(blocks[i]);
        i = i + 1;
      } else {
        p.push(blocks[j]);
        j = j + 1;
      }
    }
    while (i <= mid) {
      p.push(blocks[i]);
      i = i + 1;
    }
    while (j <= high) {
      p.push(blocks[j]);
      j = j + 1;
    }
    for (var i = low; i <= high; i++) {
      blocks[i] = p[i - low];
      blocks = document.querySelectorAll(".block");
    }
  }
}

async function mergeSort(low, high) {
  if (low < high) {
    var mid = Math.floor(low + (high - low + 1) / 2);
    mergeSort(low, mid);
    mergeSort(mid + 1, high);
    merger(low, high, mid);
  }
}
