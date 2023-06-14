const message = readline();

function binaryEncoding(message) {
  const letters = [];
  for (const letter of message) {
    letters.push(formatCharToBinary(letter));
  }
  const binaryMessage = letters.join("");
  const result = [];
  let currentBit = null;
  let count = 0;
  for (const bit of binaryMessage) {
    if (bit === currentBit) {
      count += 1;
    } else {
      if (currentBit !== null) {
        result.push({ [currentBit]: count });
      }
      count = 1;
      currentBit = bit;
    }
  }
  if (currentBit !== null) {
    result.push({ [currentBit]: count });
  }
  for (let i = 0; i < result.length; i++) {
    const bit = Object.keys(result[i])[0];
    const count = result[i][bit];
    if (bit === "0") {
      result[i] = `00 ${"0".repeat(count)}`;
    } else if (bit === "1") {
      result[i] = `0 ${"0".repeat(count)}`;
    }
  }
  return result.join(" ");
}

function formatCharToBinary(char) {
  return char.charCodeAt(0).toString(2).padStart(7, "0");
}

const result = binaryEncoding(message);
console.log(result);
