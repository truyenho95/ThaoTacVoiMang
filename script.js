var arr = new Array();
var isAdded = false;
var addingTimes = 0;

document.getElementById('add').addEventListener('click', () => {
  arr.push(document.getElementById('nhapMang').value);
  isAdded = true;
  addingTimes++;
});

document.getElementById('display').addEventListener('click', () => {
  if (isAdded) {
    for (var i=1; i<=addingTimes; i++) {
      var p = document.createElement('p');
      p.innerHTML = `Element ${arr[arr.length-i]}`;
      document.getElementById('list').appendChild(p);
    }
    isAdded = false;
    addingTimes = 0;
  }
});