const v1: number[] = Array(10);
const v2: number[] = Array(10);

for (let x = 0; x < 10; x++) {
    v1[x] = Math.floor(Math.random() * 100 + 1);
    v2[x] = Math.floor(Math.random() * 100 + 1);
}

const v3 = v1.concat(v2);

console.log("<< Elementos de V1 >>");
console.log(v1);

console.log("\n<< Elementos de V2 >>");
console.log(v2);

console.log("\n<< Elementos de V3 >>");
console.log(v3);

export {};
