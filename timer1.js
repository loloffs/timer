const delays = [];
const inputs = process.argv.slice(2);

for (let input of inputs) {
  if (input < 0) {
    console.log("Please do not input negative numbers.");
    return;
  } else if (input === NaN) {
    console.log("Please input a number.");
    return;
  }
  input = input * 1000;
  delays.push(input);
}

  for (const delay of delays) {
  setTimeout(() => {
  process.stdout.write('\r' + "*ALARM*"); 
  process.stdout.write('\x07');
  }, delay)
}