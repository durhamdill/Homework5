var productData = {
  state: "active",
  title: "Mid Century Siesta Ware White Mug with Anchor",
  price: 12.00,
  quantity: 1,
  tags: ["mug", "siesta ware", "beer mug", "white glass mug", "anchor and stars"],
  category_path: ["Vintage", "Housewares", "Cup"],
  image: {
    small: {
      url: "http://placehold.it/300x300"
    }
  }
};

console.log(productData.price)
console.log(productData.title)
console.log(productData.tags[3])
console.log(productData.image.small.url)
console.log(productData.category_path[1])


// Get the sum of two numbers
function sum (x, y) {
  return x + y;
};

console.log(sum(4,5))
console.log(sum(100,100))

// Find the largest of two numbers
function max(a, b){
  var largest;
  if (a > b) {
    largest = a;
  } else {
    largest = b;
  }
  return largest;
};

console.log(max(12,13))
console.log(max(85,60))

function math (num1, num2, operator) {
  var answer;

  if (operator == "+") {
    answer = num1 + num2;
  } else if (operator == "-") {
    answer = num1 - num2;
  } else if (operator == "/") {
    answer = num1 / num2;
  } else if (operator == "*") {
    answer = num1 * num2;
  }

  return answer;

};

console.log(math(5, 2, "+")); // 7
console.log(math(5, 2, "-")); // 3
console.log(math(5, 2, "*")); // 10
console.log(math(5, 2, "/")); // 2.5
