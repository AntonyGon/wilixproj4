const dscount = (arr) => {
  let counter = 0;
  arr[0] = arr[0].toLowerCase();
  for (i = 0; i < arr[0].length - 1; i++) {
    if (`${arr[0][i] + arr[0][i + 1]}` == `${arr[1] + arr[2]}`) {
      counter++;
    }
  }
  return counter;
  //return arr[0].toLowerCase().split(`${arr[1] + arr[2]}`).length-1; не работает :(
};
const test = (callback, arr, n) => {
  if (callback(arr) === n) console.log("It's work!");
  else console.log("That was an ERROR!");
};
test(dscount, ["ab___ab__", "a", "b"], 2);
test(dscount, ["___cd____", "c", "d"], 1);
test(dscount, ["de_______", "d", "e"], 1);
test(dscount, ["12_12__12", "1", "2"], 3);
test(dscount, ["_ba______", "a", "b"], 0);
test(dscount, ["_a__b____", "a", "b"], 0);
test(dscount, ["-ab-аb-ab", "a", "b"], 2);
test(dscount, ["aAa", "a", "a"], 2);
const checkSyntax = (string) => {
  let brackets = "{}[]<>()";
  let k;
  let arr = [];
  let flag = 0;
  string.split("").forEach((el) => {
    k = brackets.indexOf(el);
    if (k !== -1) {
      if (k % 2 === 0) {
        arr.push(k + 1);
      } else {
        if (arr.pop() !== k) {
          flag = 1;
        }
      }
    }
  });
  if (arr.length === 0 && flag === 0) return 0;
  else return 1;
};
console.log("---(++++)---- " + checkSyntax("---(++++)----"));
console.log(" " + checkSyntax(""));
console.log(
  "before ( middle []) after " + checkSyntax("before ( middle []) after ")
);
console.log(") ( " + checkSyntax(") ("));
console.log("} { " + checkSyntax("} {"));
console.log("<(   >) " + checkSyntax("<(   >)"));
console.log("(  [  <>  ()  ]  <>  ) " + checkSyntax("(  [  <>  ()  ]  <>  )"));
console.log("   (      [) " + checkSyntax("   (      [)"));
class Pancake {
  preparedSides = 0;
  static taste = "Наконец-то, нормальная блин еда!";
  prepareOneSide() {
    this.preparedSides++;
  }
}
const cookPancakes = (countOfPancakes) => {
  let cookTime = 0;
  let pancakes = [];
  for (i = 0; i < countOfPancakes; i++) {
    pancakes[i] = new Pancake();
  }
  let k = 0;
  console.log(pancakes);
  switch (true) {
    case countOfPancakes == 1: {
      for (i = 0; i < countOfPancakes + 1; i++) {
        pancakes[k].prepareOneSide();
        cookTime++;
      }
      break;
    }
    case countOfPancakes % 2 == 0: {
      for (i = 0; i < countOfPancakes; i++) {
        pancakes[k].prepareOneSide();
        pancakes[k + 1].prepareOneSide();
        cookTime++;
        if (i % 2 == 1) k += 2;
      }
      break;
    }
    case countOfPancakes % 2 == 1: {
      for (i = 0; i < countOfPancakes - 3; i++) {
        pancakes[k].prepareOneSide();
        pancakes[k + 1].prepareOneSide();
        cookTime++;
        if (i % 2 == 1) k += 2;
      }
      pancakes[k].prepareOneSide();
      pancakes[k + 1].prepareOneSide();
      cookTime++;
      pancakes[k].prepareOneSide();
      pancakes[k + 2].prepareOneSide();
      cookTime++;
      pancakes[k + 1].prepareOneSide();
      pancakes[k + 2].prepareOneSide();
      cookTime++;
      break;
    }
  }
  pancakes.forEach((el, i) =>
    console.log(`${i + 1} блинчик ${el.preparedSides}`)
  );
  return `Готовка заняла ${cookTime} минут`;
};
console.log(cookPancakes(1));
console.log(cookPancakes(10));
console.log(cookPancakes(11));
function func(s, a, b) {
  if (s.match(/^$/)) {
    return -1;
  }

  let i = s.length - 1;
  let aIndex = -1;
  let bIndex = -1;

  while (aIndex == -1 && bIndex == -1 && i >= 0) {
    if (s.substring(i, i + 1) == a) {
      aIndex = i;
    }
    if (s.substring(i, i + 1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }

  if (bIndex != -1 || aIndex != -1) return Math.max(aIndex, bIndex);
  else return -1;
}
console.log(func("dfajskf", "d", "d"));
console.log(func("dfafskff", "k", "f"));
console.log(func("dfajskdf", "a", "e"));
console.log(func("dfajskdf", "e", "e"));
function drawRating(vote) {
  switch (true) {
    case vote >= 0 && vote <= 20: {
      return "★☆☆☆☆";
      break;
    }
    case vote > 20 && vote <= 40: {
      return "★★☆☆☆";
      break;
    }
    case vote > 40 && vote <= 60: {
      return "★★★☆☆";
      break;
    }
    case vote > 60 && vote <= 80: {
      return "★★★★☆";
      break;
    }
    case vote > 80 && vote <= 100: {
      return "★★★★★";
      break;
    }
  }
}
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
const parseUrl = (string) => {
  let obj = new URL(string);
  return obj;
};
let a = parseUrl("http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo");
console.log(a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo");
console.log(a.hash == "#foo");
console.log(a.port == "8080");
console.log(a.host == "tutu.ru:8080");
console.log(a.protocol == "http:");
console.log(a.hostname == "tutu.ru");
console.log(a.pathname == "/do/any.php");
console.log(a.origin == "http://tutu.ru:8080");
