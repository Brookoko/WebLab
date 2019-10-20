const maxNumber = (obj) => {
  let numbers = [];
  for (let num of obj) {
    numbers.push(Number.parseInt(num.value));
  }
  numbers = numbers.filter(el => el);
  const max = Math.max(...numbers);
  numbers = numbers.filter(el => el === max);
  obj.res.value = numbers.filter(el => el === max).length;
}

const isTriangle = (obj) => {
  let numbers = [];
  for (let num of obj) {
    numbers.push(Number.parseInt(num.value));
  }
  numbers = numbers.filter(el => el);
  numbers = numbers.sort((a, b) => a - b);
  obj.res.value = numbers[0] + numbers[1] > numbers[2] ? "Так" : "Ні";
}

const coordinate = (obj) => {
  let numbers = [];
  for (let num of obj) {
    numbers.push(Number.parseInt(num.value));
  }
  numbers = numbers.filter(el => el);
  const [x, y] = numbers;
  if (x > 0 && y > 0) obj.res.value = "1";
  else if (x < 0 && y > 0) obj.res.value = "2";
  else if (x < 0 && y < 0) obj.res.value = "3";
  else if (x > 0 && y < 0) obj.res.value = "4";
  else obj.res.value = "Unknown";
}


