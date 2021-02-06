//creazione di frasi automatica
const verbs = ["creates", "designs", "directs", "loves", "studies", "teaches"];
const subjs = [
  "UIs.",
  "UXs.",
  "books.",
  "brands.",
  "digital design.",
  "environmental graphics.",
  "identities.",
  "interactions.",
  "stories.",
  "typography.",
  "visual systems.",
  "websites.",
  "sounds.",
  "good stuff.",
];
const sentences = [];
for (verb of verbs) {
  for (subj of subjs) {
    sentences.push(`${verb} ${subj}`);
  }
}
// genera un numero random incluso nell indice dell array delle frasi
function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const randomSentenceIndex = getRandomIndex(0, sentences.length);
const randomSentence = document.querySelector(".randomSentence");
randomSentence.textContent = sentences[randomSentenceIndex];
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".projectIdea");
const btnClose = document.querySelector(".btnClose");
btnModal.addEventListener("click", () => {
  modal.classList.remove("modalHide");
});
btnClose.addEventListener("click", () => {
  modal.classList.add("modalHide");
});
