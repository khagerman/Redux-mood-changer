const h1 = document.querySelector("h1");
const angryButton = document.querySelector("#angry");
const happyButton = document.querySelector("#happy");
const overjoyedButton = document.querySelector("#overjoyed");
const loveButton = document.querySelector("#inlove");
const annoyedButton = document.querySelector("#annoyed");

angryButton.addEventListener("click", function (e) {
  store.dispatch({ type: "ANGRY" });
  const state = store.getState();
  h1.innerText = state.face;
});
annoyedButton.addEventListener("click", function (e) {
  store.dispatch({ type: "ANNOYED" });
  const state = store.getState();
  h1.innerText = state.face;
});
happyButton.addEventListener("click", function (e) {
  store.dispatch({ type: "HAPPY" });
  const state = store.getState();
  h1.innerText = state.face;
});
overjoyedButton.addEventListener("click", function (e) {
  store.dispatch({ type: "OVERJOYED" });
  const state = store.getState();
  h1.innerText = state.face;
});
loveButton.addEventListener("click", function (e) {
  store.dispatch({ type: "IN_LOVE" });
  const state = store.getState();
  h1.innerText = state.face;
});
