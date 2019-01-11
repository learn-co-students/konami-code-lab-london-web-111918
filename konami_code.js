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

let index = 0;


function compareWithSecretCode(e) {
  console.log(e)
  if (e === codes[index]) {
    index++;

    if (index === codes.length) {
      console.log("hello")

      window.alert("Hurray!");
      console.log('asdfasdf')
      index = 0;
    }
  } else {
    index = 0;
  }
}


function init() {
  document.body.addEventListener('keydown', (e) => {

    compareWithSecretCode(e.key)
  });
}
