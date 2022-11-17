const inputEl = document.querySelector(".inputEl");
const btnEl = Array.from(document.querySelectorAll("button"));
btnEl.map((btn)=>{
    btn.addEventListener("click", (e)=>{
        inputEl.value += e.target.innerText;
        console.log(e.target.innerText);
    });
});

//# sourceMappingURL=index.de5c0784.js.map
