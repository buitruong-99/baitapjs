
//Bài 11
let b11 = " Hello  world";
let dem = 0;
for (let i = 0; i < b11.length; i++) {
  if (b11[i] === " ") {
    dem++;
  }
}

console.log("Bài 11", dem);

//Bài 12
let b12 = "	Hello world   ";
console.log("Bài 12", b12.replace(/ /g, "").trim());

//Bài 13
let b13 = "This is a beautiful day";
result = b13
  .split(" ")
  .reverse()
  .map((word) => {
    return word.split("");
  });

reverseString = result.map((word) => {
  return word.reverse().join("");
});

console.log("Bài 13", reverseString.join(" "));

//Bài 14
let b14 = "This is a beautiful day";
let findString = "is";

console.log("Bài 14", b14.indexOf(findString));

//Bài 15
let b15 = "NguyeN THI tho tHu hA";
result = b15.split(" ").map((word) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
});

console.log("Bài 15", result.join(" "));

//Bài 16
let b16 = "https://www.facebook.com/ngothucdat";
result = b16.slice(b16.lastIndexOf("/") + 1);

console.log(result);

//Bài 21
let b21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let total = b21.reduce((prev, next) => {
  return prev + next;
}, 0);
console.log("Bài 21", total);

//Bài 22
let b22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let max = b22[0];
let min = b22[0];
for (let i = 0; i < b22.length; i++) {
  if (max < b22[i]) {
    max = b22[i];
  }
  if (min > b22[i]) {
    min = b22[i];
  }
}
console.log("Bài 22", max, min, (max + min) / 2);

//Bài 23
let b23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let result = b23.sort((a, b) => {
  return a - b;
});
let a = 0;
max = 0;
let index = 0;
let frequency = 0;
while (a < b23.length) {
  frequency = 1;
  while (b23[a] == b23[a + 1]) {
    frequency++;
    a++;
  }
  if (max < frequency) {
    max = frequency;
    index = a;
  }
  a++;
}

console.log("Bài 23", b23[index], max);

//Bài 24
let b24 = [1, 2, 3, 2, 3, 4, 6, 7];
function checkSNT(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

result = b24.filter((value) => {
  return checkSNT(value);
});

console.log("Bài 24", result);

//Bài 25
let b25 = [1, 2, 3, 2, 3, 4, 6, 7];
result = b25.map((value) => {
  return Math.pow(value, 2);
});

console.log("Bài 25", result);

//Bài 26
let b26 = [1, 2, 3, 4, 6, 7];
let k = 5;
let result2 = [];
for (let i = 0; i < b26.length; i++) {
  if (k > b26[b26.length - 1]) {
    result2.push(b26[b26.length - 1]);
    break;
  } else if (k < b26[0]) {
    result2.push(b26[0]);
    break;
  } else if (b26[i] - 1 === k || b26[i] + 1 === k) {
    result2.push(b26[i]);
  }
}

console.log("Bài 26", result2);

//Bài 27
let students = [
  {
    id: "T3HXX1",
    firstName: "NgAN",
    lastName: "Duong Thuy",
  },
  {
    id: "T3HXX2",
    firstName: "Ha",
    lastName: "Do Thi Thu",
  },
  {
    id: "T3HXX5",
    firstName: "Minh",
    lastName: "Nguyen Nhat",
  },
  {
    id: "T3HXX6",
    firstName: "Minh",
    lastName: "Do Nguyen Nhat",
  },
];

result = students.map((student) => {
  return {
    id: student.id,
    firstName:
      student.firstName.slice(0, 1) + student.firstName.slice(1).toLowerCase(),
    lastName: student.lastName,
  };
});

console.log("Bài 27", result);

//Bài 28
result = students.filter((student) => {
  return student.lastName.slice(0, 2) === "Do";
});

console.log("Bài 28", result);

//Bài 29
result = students.sort((s1, s2) => {
  if (s1.firstName > s2.firstName) return 1;
  else if (s1.firstName < s2.firstName) return -1;
  else return 0;
});

console.log("Bài 29", result);

//Bài 30
let b30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let b30 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
max = b30[0];
let max2 = b30[0];

for (let i = 0; i < b30.length; i++) {
  if (b30[i] > max) {
    max = b30[i];
  }
}

for (let i = 0; i < b30.length; i++) {
  if (b30[i] < max && b30[i] > max2) {
    max2 = b30[i];
  } else if (max2 === max) {
    max2 = -1;
  }
}

console.log("Bài 30 ", max2);

//Bài 31
let b31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
k = 26;
function checkToTal() {
  for (let i = 0; i < b31.length - 2; i++) {

  }
}

if (checkToTal()) {
  console.log("Bài 31: YES");
} else {
  console.log("Bài 31: NO");
}

//Bài 32
let b32 = [1, 3, 6, 9, 11, 20];
k = 13;
result = b32.sort((n1, n2) => n1 - n2);
function timViTri(n) {
  if (k < result[0]) {
    return 0;
  }
  if (k > result[n - 1]) {
    return n;
  }
  for (let i = 0; i < n; i++) {
    if (result[i] >= k) {
      return i;
    }
  }
}

function chenViTri(pos) {
  for (let i = result.length - 1; i > pos; i--) {
    result[i] = result[i - 1];
  }
  result[pos] = k;
}

chenViTri(timViTri(result.length - 1));
console.log("Bài 32", result);

//Bài 33
let b33 = [9, 8, 7, 6, 4, 5, 3, 2, 1];
for (let i = 0; i < b33.length; i++) {
  for (let j = i + 1; j < b33.length; j++) {
    if (b33[j] < b33[i]) {
      let tg = b33[j];
      b33[j] = b33[i];
      b33[i] = tg;
    }
  }
}

console.log("Bài 33", b33);