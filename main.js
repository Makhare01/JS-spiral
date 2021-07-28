const matrix = (n) => {
  var array = Array.apply(null, { length: n }).map(Number.call, Number);
  var myMatrix = Array.apply(null, { length: n - 1 }).map(Number.call, Number);
  const Length = Array.apply(null, { length: n }).map(Number.call, Number);

  const results = [];

  array.map(() => {
    results.push([]);
  });
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  myMatrix.map(() => {
    var index1 = startColumn;
    Length.forEach(() => {
      results[startRow][index1] = counter;
      counter++;
      index1++;
    });
    startRow++;

    Length.pop();

    var index2 = startRow;
    Length.forEach(() => {
      results[index2][endColumn] = counter;
      counter++;
      index2++;
    });
    endColumn--;

    // Bottom row
    var index3 = endColumn;
    Length.forEach(() => {
      results[endRow][index3] = counter;
      counter++;
      index3--;
    });
    endRow--;

    Length.pop();
    var index4 = endRow;
    Length.forEach(() => {
      results[index4][startColumn] = counter;
      counter++;
      index4--;
    });
    startColumn++;
  });

  return results;
};

let images = [
  {
    download_url: "https://picsum.photos/id/0/5616/3744",
  },
  {
    download_url: "https://picsum.photos/id/1/5616/3744",
  },
  {
    download_url: "https://picsum.photos/id/10/2500/1667",
  },
  {
    download_url: "https://picsum.photos/id/100/2500/1656",
  },
  {
    download_url: "https://picsum.photos/id/1000/5626/3635",
  },
  {
    download_url: "https://picsum.photos/id/1001/5616/3744",
  },
  {
    download_url: "https://picsum.photos/id/1002/4312/2868",
  },
  {
    download_url: "https://picsum.photos/id/1003/1181/1772",
  },
  {
    download_url: "https://picsum.photos/id/1004/5616/3744",
  },
  {
    download_url: "https://picsum.photos/id/1005/5760/3840",
  },
  {
    download_url: "https://picsum.photos/id/1006/3000/2000",
  },
  {
    download_url: "https://picsum.photos/id/1008/5616/3744",
  },
  {
    download_url: "https://picsum.photos/id/1009/5000/7502",
  },
  {
    download_url: "https://picsum.photos/id/101/2621/1747",
  },
  {
    download_url: "https://picsum.photos/id/1010/5184/3456",
  },
  {
    download_url: "https://picsum.photos/id/1011/5472/3648",
  },
  {
    download_url: "https://picsum.photos/id/1012/3973/2639",
  },
  {
    download_url: "https://picsum.photos/id/1013/4256/2832",
  },
  {
    download_url: "https://picsum.photos/id/1014/6016/4000",
  },
  {
    download_url: "https://picsum.photos/id/1015/6000/4000",
  },
  {
    download_url: "https://picsum.photos/id/1016/3844/2563",
  },
  {
    download_url: "https://picsum.photos/id/1018/3914/2935",
  },
  {
    download_url: "https://picsum.photos/id/1019/5472/3648",
  },
  {
    download_url: "https://picsum.photos/id/102/4320/3240",
  },
  {
    download_url: "https://picsum.photos/id/1020/4288/2848",
  },
  {
    download_url: "https://picsum.photos/id/1021/2048/1206",
  },
  {
    download_url: "https://picsum.photos/id/1022/6000/3376",
  },
  {
    download_url: "https://picsum.photos/id/1023/3955/2094",
  },
  {
    download_url: "https://picsum.photos/id/1024/1920/1280",
  },
  {
    download_url: "https://picsum.photos/id/1025/4951/3301",
  },
];

console.log(images);

var table = document.createElement("table");
document.body.appendChild(table);

function myFunction() {
  var n = document.getElementById("dim").value;
  if (n > 25) {
    document.getElementById("error").textContent =
      "შეიყვანეთ 25-ზე ნაკლები რიცხვი!";
    return;
  }
  // var colorSlice = 100 / (n * n);
  // var color = 100;

  const Spiral = matrix(n);

  var array = Array.apply(null, { length: n }).map(Number.call, Number);

  var i = 0;
  array.map(() => {
    var tr = document.createElement("tr");
    var j = 0;

    array.map(() => {
      text = document.createTextNode(Spiral[i][j]);
      var td = document.createElement("td");
      if (n > 15)
        td.style.backgroundColor = `hsl(210, 100%, ${Spiral[i][j] * 0.1}%)`;
      else if (n > 10)
        td.style.backgroundColor = `hsl(210, 100%, ${Spiral[i][j] * 0.3}%)`;
      else if (n > 5)
        td.style.backgroundColor = `hsl(210, 100%, ${Spiral[i][j]}%)`;
      else td.style.backgroundColor = `hsl(159, 100%, ${Spiral[i][j] * 3.5}%)`;
      td.style.color = "white";
      td.style.width = "25px";
      td.style.height = "25px";
      td.appendChild(text);
      tr.appendChild(td);
      j++;
      // color = color - colorSlice;
    });

    table.appendChild(tr);
    i++;
  });
}

var index = 0;

function imageFunction() {
  var n = document.getElementById("dim").value;
  if (n > 25) {
    document.getElementById("error").textContent =
      "შეიყვანეთ 6-ზე ნაკლები რიცხვი!";
    return;
  }

  const Spiral = matrix(n);

  var array = Array.apply(null, { length: n }).map(Number.call, Number);

  var i = 0;
  array.map(() => {
    var tr = document.createElement("tr");
    var j = 0;

    array.map(() => {
      text = document.createTextNode(Spiral[i][j]);

      var image = document.createElement("img");
      var td = document.createElement("td");

      image.src = images[index].download_url;
      image.style.width = "80px";
      image.style.height = "70px";

      td.style.color = "black";
      td.style.width = "80px";
      td.style.height = "80px";

      td.appendChild(image);
      td.appendChild(text);
      tr.appendChild(td);

      index++;
      j++;
      // color = color - colorSlice;
    });

    table.appendChild(tr);
    i++;
  });
}
