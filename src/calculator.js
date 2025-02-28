function add(numbers) {
    //should return 0 for an empty string
    if (numbers === "") return 0;

    // Parse the number and return
    // return parseInt(numbers);  

    // Sum the numbers
    // const numArray = numbers.split(',').map(num => parseInt(num));
    // return numArray.reduce((acc, num) => acc + num, 0); 

    // sum using delimiter
    // const numArray = numbers.split(/[\n,]/).map(num => parseInt(num));
    // return numArray.reduce((acc, num) => acc + num, 0); 

    // Remove the delimiter definition line
    // let delimiter = ",";
    // if (numbers.startsWith("//")) {
    //     const delimiterLine = numbers.split("\n")[0];
    //     delimiter = delimiterLine.slice(2);  // Extract the custom delimiter
    //     numbers = numbers.slice(delimiterLine.length + 1);  
    // }

    // const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => parseInt(num));
    // return numArray.reduce((acc, num) => acc + num, 0);

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split("\n")[0];
        delimiter = delimiterLine.slice(2);  // Extract the custom delimiter
        numbers = numbers.slice(delimiterLine.length + 1);  // Remove the delimiter definition line
    }

    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => parseInt(num));

    // Check for negative numbers
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
    }

    return numArray.reduce((acc, num) => acc + num, 0); 
}

module.exports = { add };
