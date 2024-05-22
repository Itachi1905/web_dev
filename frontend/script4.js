console.log("Loops Tutorial")

let a = 1
for (let i = 0; i < 100; i++) {
    console.log(a+i," ")
}

let obj = {
    name: "Kurumi",
    anime: "Date a Live",
    genre: "Harem"
}

for (const key in obj) {
        const element = obj[key];
        console.log(key,element);
}
for (const c of "object") {
    console.log(c);
}