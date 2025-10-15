// generatePacmanGraph.js
import fs from 'fs';

const rows = 7;
const cols = 52;
const size = 15;
const padding = 4;
const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];

function randomLevel() {
  return Math.floor(Math.random() * colors.length);
}

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${cols*(size+padding)}" height="${rows*(size+padding)}">\n`;

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const level = randomLevel();
    const color = colors[level];
    const xpos = x*(size+padding);
    const ypos = y*(size+padding);
    svg += `  <rect x="${xpos}" y="${ypos}" width="${size}" height="${size}" fill="${color}" rx="3" ry="3"/>\n`;
  }
}

const pacmanX = cols*(size+padding) - 10*(size+padding);
const pacmanY = 3*(size+padding);
svg += `  <circle cx="${pacmanX}" cy="${pacmanY}" r="${size}" fill="yellow"/>\n`;
svg += `  <polygon points="${pacmanX},${pacmanY} ${pacmanX+size},${pacmanY-size/2} ${pacmanX+size},${pacmanY+size/2}" fill="black"/>\n`;

svg += `</svg>`;

fs.writeFileSync('pacman-contribution-graph.svg', svg);
console.log('Pacman contribution graph generated.');
