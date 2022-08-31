const footerEl = document.getElementById("footer")

function currentYear() {
    let d = new Date()
    footerEl.textContent = `© ${d.getFullYear()}`
}
currentYear()

