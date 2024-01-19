// 11a

const nums = [10, 20, 30]
console.log(nums)
nums[2] = 99
console.log(nums)

// 11b

function getLastValue(array) {
  const lastIndex = array.length - 1
  return array[lastIndex]
}

console.log(getLastValue([1, 20, 22, 24]))
console.log(getLastValue(['hi', 'hello', 'good']))

// 11c

function arraySwap(array) {
  const lastIndex = array.length - 1
  const lastValue = array[lastIndex]
  const firstValue = array[0]

  array[0] = lastValue
  array[lastIndex] = firstValue
  return array
}

console.log(arraySwap([1, 20, 22, 24, 5]))
console.log(arraySwap(['hi', 'hello', 'hey']))

// 11d

for (let i = 0; i <= 10; i += 2) {
  console.log(i)
}

//

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// 11e

for (let i = 5; i >= 0; i--) {
  console.log(i)
}

// 11f
let index = 0
while (index <= 10) {
  console.log(index)
  index += 2
}

//

let ix = 0
while (ix <= 10) {
  if (ix % 2 === 0) {
    console.log(ix)
  }
  ix++
}

////

let i = 5

while (i >= 0) {
  console.log(i)
  i--
}

// 11g

const array = [1, 2, 3]
const double = []

for (let i = 0; i < array.length; i++) {
  double.push(array[i] + 1)
}

console.log(double)

//

let indx = 0
while (indx < array.length) {
  double.push(array[indx] + 1)
  indx++
}
console.log(double)

// 11h

function addOne(array) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1)
  }

  return result
}

console.log(addOne([1, 2, 3]))
console.log(addOne([-2, -1, 0, 99]))

//

function addOneWhile(array) {
  const result = []

  let i = 0
  while (i < array.length) {
    result.push(array[i] + 1)
    i++
  }

  return result
}

console.log(addOneWhile([1, 2, 3]))
console.log(addOneWhile([-2, -1, 0, 99]))

// 11i

function addNum(array, num) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num)
  }

  return result
}

console.log(addNum([1, 2, 3], 2))
console.log(addNum([1, 2, 3], 3))
console.log(addNum([-2, -1, 0, 99], 2))

//

function addNumWhile(array, num) {
  const result = []

  let i = 0

  while (i < array.length) {
    result.push(array[i] + num)
    i++
  }

  return result
}

console.log(addNumWhile([1, 2, 3], 2))
console.log(addNumWhile([1, 2, 3], 3))
console.log(addNumWhile([-2, -1, 0, 99], 2))

// 11k

function countPositive(nums) {
  let greaterThanZero = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      greaterThanZero++
    }
  }
  return greaterThanZero
}

console.log(countPositive([1, -3, 5]))
console.log(countPositive([-2, 3, -5, 7, 10]))

//

function countPositiveWhile(nums) {
  let greaterThanZero = []

  let i = 0

  while (i < nums.length) {
    if (nums[i] > 0) {
      greaterThanZero++
    }
    i++
  }
  return greaterThanZero
}

console.log(countPositiveWhile([1, -3, 5]))
console.log(countPositiveWhile([-2, 3, -5, 7, 10]))

// 11l
function minMax(nums) {
  const result = {
    min: nums[0],
    max: nums[0],
  }

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (value < result.min) {
      result.min = value
    }
    if (value > result.max) {
      result.max = value
    }
  }
  return result
}

console.log(minMax([1, -3, 5]))
console.log(minMax([-2, 3, -5, 7, 10]))

//

function minMax(nums) {
  const result = {
    min: nums[0],
    max: nums[0],
  }

  let i = 0

  while (i < nums.length) {
    const value = nums[i]
    if (value < result.min) {
      result.min = value
    }
    if (value > result.max) {
      result.max = value
    }
    i++
  }
  return result
}

console.log(minMax([1, -3, 5]))
console.log(minMax([-2, 3, -5, 7, 10]))

// 11m
function minMax(nums) {
  const result = {
    min: null,
    max: null,
  }

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (result.min === null || value < result.min) {
      result.min = value
    }
    if (result.max === null || value < result.max) {
      result.max = value
    }
  }
  return result
}

console.log(minMax([]))
console.log(minMax([3]))

//

function minMax(nums) {
  const result = {
    min: null,
    max: null,
  }

  let i = 0

  while (i < nums.length) {
    const value = nums[i]
    if (result.min === null || value < result.min) {
      result.min = value
    }
    if (result.max === null || value < result.max) {
      result.max = value
    }
    i++
  }
  return result
}

console.log(minMax([]))
console.log(minMax([3]))

// 11n

function countWords(words) {
  const result = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (!result[word]) {
      result[word] = 1
    } else {
      result[word]++
    }
  }
  return result
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']))

//

function countWords(words) {
  const result = {}

  let i = 0

  while (i < words.length) {
    const word = words[i]
    if (!result[word]) {
      result[word] = 1
    } else {
      result[word]++
    }
    i++                                                              
  }
  return result
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']))
