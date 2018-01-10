const args = process.argv.slice(2);
const mood = args[0];

if (mood === "happy") {
  console.log("Yay!");
} else if (mood === "angry") {
  console.log("Chill, dude.");
} else {
  console.log("Yo");
}
