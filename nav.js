fetch('/nav.html')
.then(res => res.text())
.then(text => {
    let $current = document.querySelector("script#nav");
    let $updated = document.createElement("div");
    $updated.innerHTML = text;
    $current.parentNode.replaceChild($updated,$current);
})