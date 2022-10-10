const n = 20;
const array = [];

for (let i = 0; i < n; i++) {
  array[i] = Math.random();
}

const cols = [];
const canvas = document.getElementById("canvas");
const margin = 30;
const spacing = (canvas.width - margin * 2) / n;
const ctx = canvas.getContext("2d");

for (let i = 0; i < array.length; i++) {
  const x = i * spacing + spacing / 2 + margin;
  const y = canvas.height - margin - i * 3;
  const width = spacing - 5;
  const height = 200 * array[i];
  cols[i] = new Column(x, y, width, height);
  cols[i].draw(ctx);
}
