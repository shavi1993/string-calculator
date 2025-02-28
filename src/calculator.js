function add(numbers) {
    if (numbers === "") return 0;
    // return parseInt(numbers);  // Parse the number and return

    // const numArray = numbers.split(',').map(num => parseInt(num));
    // return numArray.reduce((acc, num) => acc + num, 0); // Sum the numbers

    // const numArray = numbers.split(/[\n,]/).map(num => parseInt(num));
    // return numArray.reduce((acc, num) => acc + num, 0); // sum using delimiter

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split("\n")[0];
        delimiter = delimiterLine.slice(2);  // Extract the custom delimiter
        numbers = numbers.slice(delimiterLine.length + 1);  // Remove the delimiter definition line
    }

    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => parseInt(num));
    return numArray.reduce((acc, num) => acc + num, 0);

}

module.exports = { add };
