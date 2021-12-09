let theme = true;

let but = document.querySelector('.themeBut');

but.addEventListener("click", () => {
    let a;
    if (theme) {
        a = document.querySelectorAll('.light');
    } else {
        a = document.querySelectorAll('.dark');
    }
    a.forEach(function (item) {
        item.classList.toggle('light');
        item.classList.toggle('dark');
    });
    theme = !theme;
})