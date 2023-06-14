const letterWidth = parseInt(readline());
const letterHeight = parseInt(readline());
const text = readline().toUpperCase();

for (let i = 0; i < letterHeight; i++) {
  const row = readline();
  let result = "";
  for (let j = 0; j < text.length; j++) {
    let position = text.charCodeAt(j) - 65;

    if (position < 0 || position > 26) {
      position = 26;
    }
    result += row.substring(
      position * letterWidth,
      (position + 1) * letterWidth
    );
  }
  console.log(result);
}
