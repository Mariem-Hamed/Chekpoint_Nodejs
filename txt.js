const fs = require("fs");

// create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File created successfully!");
});

// read and console.log data from hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
