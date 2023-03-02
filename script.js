const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.publicapis.org/entries");
xhr.send();

xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    const data = JSON.parse(this.responseText);
    let randomIndex = Math.floor(Math.random() * data.entries.length);
    let randomAPI = data.entries[randomIndex];
    const link = randomAPI.Link;
    addLinkToDatabase(link);
    window.open(link, "_blank");
    // document.getElementById("message").textContent = "New link generated!";
    alert("Link added to database.");
  }
};

function addLinkToDatabase(link) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8000/add-link");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ link: link }));
}