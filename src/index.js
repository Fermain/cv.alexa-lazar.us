document.querySelectorAll(".md").forEach(element => {
    element.innerHTML = marked.parse(element.textContent)
})