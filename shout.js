function shout(string) {
  console.log(string.toUpperCase());
}
shout(process.argv[2] || "whisper");
