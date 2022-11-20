const inputEl = document.querySelector(".inputEl");
const btnEl = Array.from(document.querySelectorAll("button"));
inputEl.value = "";
btnEl.map((btn)=>{
    btn.addEventListener("click", (e)=>{
        switch(e.target.innerText){
            case "=":
                try {
                    inputEl.value = eval(inputEl.value);
                } catch  {
                    alert("Error");
                    inputEl.value = "";
                }
                break;
            case "C":
                inputEl.value = "";
                break;
            default:
                inputEl.value += e.target.innerText;
                break;
        }
    });
});

//# sourceMappingURL=index.de5c0784.js.map
