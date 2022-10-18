console.log("service_worker");

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "index.html",
  });
});
