const link = document.getElementById("link");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.publicapis.org/entries");
xhr.send();

xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    const data = JSON.parse(this.responseText);
    let randomIndex = Math.floor(Math.random() * data.entries.length);
    let randomAPI = data.entries[randomIndex];
    link.href = randomAPI.Link;
    link.target = "_blank";
  }
};