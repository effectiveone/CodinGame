class NumberNode {
  constructor(value) {
    this.value = value;
    this.numChildren = 0;
    this.children = Array(10).fill(null);
  }

  hasChild(val) {
    return this.children[val] !== null;
  }

  getNode(id) {
    if (this.hasChild(id)) {
      return this.children[id];
    }

    const node = new NumberNode(id);
    this.children[id] = node;
    this.numChildren++;
    return node;
  }

  countDescendants() {
    let count = 0;
    for (let i = 0; i < 10; i++) {
      if (this.children[i]) {
        count += this.children[i].countDescendants() + 1;
      }
    }

    return count;
  }
}

const root = new NumberNode(0);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const telephone = line.trim();
  let node = root;
  for (let i = 0; i < telephone.length; i++) {
    const n = parseInt(telephone[i]);
    node = node.getNode(n);
  }
});

rl.on("close", () => {
  const result = root.countDescendants();
  console.log(result > 0 ? result - 1 : 0);
});
