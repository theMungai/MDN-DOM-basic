const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope that you enjoyed the ride.";
para.setAttribute("class", "highlight")

sect.appendChild(para);

const text = document.createTextNode(
    " - the premier source for web development knowledge."
);

const linkpara = document.querySelector("p");
linkpara.appendChild(text);