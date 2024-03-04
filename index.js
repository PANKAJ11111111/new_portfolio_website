document.querySelector('.hamburger').addEventListener("click", () =>{
    document.querySelector('.sidebar').style.display = "block"
}
);


document.querySelector('.cross').style.display = "none";

document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('slidbargo');

    if (document.querySelector('.sidebar').classList.contains('slidbargo')) {
        document.querySelector('.cross').style.display = "none";
        document.querySelector('.ham').style.display = "inline";
    } else {
        document.querySelector('.ham').style.display = "none";
        setTimeout(() => {
            document.querySelector('.cross').style.display = "inline";
        }, 300);
    }
});