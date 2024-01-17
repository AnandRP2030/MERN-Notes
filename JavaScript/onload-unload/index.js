function onPageLoad() {
  alert("page loaded");
}
function onPageUnload() {
  alert("page unload");
}

window.onload = onPageLoad;
window.addEventListener('beforeunload', onPageUnload);
