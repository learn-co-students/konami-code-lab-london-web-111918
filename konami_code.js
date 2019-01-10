const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let i = 0
  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    console.log(key)
    i = (codes[i] === key) ? ++i : 0
    if (i === codes.length){
      window.alert("Hurray!");
      i = 0
    }
  });
}
