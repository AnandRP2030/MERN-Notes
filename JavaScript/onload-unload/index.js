function onPageLoad() {
  alert("page loaded");
}
alert("DKFKD")
function onPageUnload() {
  alert("page unload");
}

window.onload = onPageLoad;
window.addEventListener('beforeunload', onPageUnload);
