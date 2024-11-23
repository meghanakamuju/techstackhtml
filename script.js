function showTab(tabId) {
  // Hide all tab contents
  const tabContents = document.getElementsByClassName("tab-content");
  for (let content of tabContents) {
    content.style.display = "none";
  }

  // Remove active class from all buttons
  const tabButtons = document.getElementsByClassName("tab-button");
  for (let button of tabButtons) {
    button.classList.remove("active");
  }

  // Show selected tab content and activate button
  document.getElementById(tabId).style.display = "flex";
  document
    .querySelector(button[(onclick = "showTab('${tabId}')")])
    .classList.add("active");
}