function randomArray(size) {
  var container = document.getElementById("console");
  for (var i = 0; i < size; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var value = Math.ceil(Math.random() * 100);

    // Creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // Adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.width = `${1000 / (11 * size - 1)}%`;
    array_ele.style.transform = `translate(${i * 110}%)`;

    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
    
  }
}

function descendingArray(size) {
  var container = document.getElementById("console");
  var prev = null;
  for (var i = 0; i < size; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var value = null;
    if (i == 0) {
      value = Math.ceil(Math.random() * 20 + 120);
      prev = value;
    } else {
      value = prev - Math.ceil(Math.random());
      prev = value;
    }
    // Creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // Adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.width = `${1000 / (11 * size - 1)}%`;
    array_ele.style.transform = `translate(${i * 110}%)`;

    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

function nearlySortedArray(size) {
  var remaining = size;
  var added = 0;
  while (remaining > 0) {
    var chunkSize = Math.floor(Math.random() * remaining + 1);
    for (var i = 0; i < chunkSize; i++) {
      var container = document.getElementById("console");
      var prev = null;
      for (var i = 0; i < chunkSize; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var value = null;
        if (i == 0) {
          value = Math.ceil(Math.random() * 50);
          prev = value;
        } else {
          value = prev + (Math.random() * size/ 50);
          prev = value;
        }
        // Creating element div
        var array_ele = document.createElement("div");
        // Adding class 'block' to div
        array_ele.classList.add("block");

        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.width = `${1000 / (11 * size - 1)}%`;
        array_ele.style.transform = `translate(${added * 110}%)`;
        added = added + 1;

        // Creating label element for displaying
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
      }
      remaining = remaining - chunkSize;
    }
  }
}

function nsa(size)
{
  var done = 0;
  var container = document.getElementById("console");
  while(done != size)
  {
    var value = Math.ceil(Math.random() * 100);
    while(done != size && value <= 100)
    {
      
      var array_ele = document.createElement("div");

      // Adding class 'block' to div
      array_ele.classList.add("block");

      // Adding style to div
      array_ele.style.height = `${value * 3}px`;
      array_ele.style.width = `${1000 / (11 * size - 1)}%`;
      array_ele.style.transform = `translate(${done * 110}%)`;
      var increment = Math.ceil(Math.random() * 50);
      var array_ele_label = document.createElement("label");
      array_ele_label.classList.add("block_id");
      array_ele_label.innerText = value;
      // Appending created elements to index.html
      array_ele.appendChild(array_ele_label);
      container.appendChild(array_ele);
      value = value + Math.ceil(Math.random() * increment);
      done = done + 1;
    }
  }
}
export { randomArray, descendingArray, nearlySortedArray, nsa};
