while (true) {
  let highestMountainHeight = 0;
  let highestMountainIndex = 0;

  for (let i = 0; i < 8; i++) {
    const currentMountainHeight = parseInt(readline());
    if (currentMountainHeight > highestMountainHeight) {
      highestMountainHeight = currentMountainHeight;
      highestMountainIndex = i;
    }
  }

  console.log(highestMountainIndex);
}
