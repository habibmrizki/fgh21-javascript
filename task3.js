const printSegitiga = 5;

if (typeof printSegitiga === "number") {
  for (let i = 5; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    console.log(line);
  }
} else {
  console.log("Data harus number");
}
