function add(numbers) {
    if (numbers === "") return 0;
    // return parseInt(numbers);  // Parse the number and return
    const numArray = numbers.split(',').map(num => parseInt(num));
    return numArray.reduce((acc, num) => acc + num, 0); // Sum the numbers

}

module.exports = { add };
