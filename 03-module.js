function Product(name, price, quantity, description) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.description = description;
}

/**
 * 
 * @param {*} object 
 * @param {*} objectProperty 
 * @param {*} key 
 * @param {*} value 
 * @returns true if object[objectProperty] [key] [value], else: false
 */
function verificationFilter(object, objectProperty, key, value) {
  let result = false;

  if (objectProperty === 'name' || objectProperty === 'description') {
    if (key === 'contains') {
      result = object[objectProperty].includes(value);
    } else if (key === 'starts') {
      result = object[objectProperty].startsWith(value);
    } else if (key === 'ends') {
      result = object[objectProperty].endsWith(value);
    }
  }

  if (objectProperty === 'price' || objectProperty === 'quantity') {
    if (key === '>') {
      result = object[objectProperty] > value;
    } else if (key === '=') {
      result = object[objectProperty] == value;
    } else if (key === '>=') {
      result = object[objectProperty] >= value;
    } else if (key === '<') {
      result = object[objectProperty] < value;
    } else if (key === '<=') {
      result = object[objectProperty] <= value;
    }
  }
  
  return result;
}

/**
 * 
 * @param {Array} array of products
 * @param {String} key for verification object in array of products
 * @returns {Array} new array for verificated obj in income array
 */
function verification(array, key) {
  let result = [];

  let verificationRule = key.split('&');
  let rules = verificationRule.map(prop => ({
    value: prop.split(/(-|>=?|=|<=?)/).filter(elem => elem && elem != "-")
  }));

  result = array.filter(item => {
    for (let rule of rules) {
      let ruleName = rule.value[0];
      let ruleMethod = rule.value[1];
      let ruleValue = rule.value[2];

      let filter = verificationFilter(item, ruleName, ruleMethod, ruleValue)
      if (!filter) {
        return false;
      }
    }
    return true;
  });

  return result;
}
let verificationKey = "name-contains-fd&price-<=2&quantity->5&description-ends-abc";
let verificationTest = [];
let tempProduct1 = new Product("fd LAW", 2, 6, "arbitrary abc");
let tempProduct2 = new Product("fd EX", 2, 6, "arbitrary sdf");
let tempProduct3 = new Product("fd product", 2, 7, "arbitrary abc");
let tempProduct4 = new Product("fd EX", 3, 5, "arbitrary sdf");

verificationTest.push(tempProduct1, tempProduct2, tempProduct3, tempProduct4);

console.log(verification(verificationTest, verificationKey));

export {Product, verification};

