// sw registration in the browser
// check if serviceWorker is supported by the browser
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw_cached_pages.js")
      .then((registerObj) =>
        console.log("Service Worker : Registered Successfully")
      )
      .catch((error) => console.log(`Service Worker Error : ${error}`));
  });
}
