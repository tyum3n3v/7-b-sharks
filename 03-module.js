function Product(name, price, quantity, description) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.description = description;
}

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

// export {Product, verification, verificationFilter};

