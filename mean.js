let ResultCheckbox = document.getElementById("ResultCheckbox");
let resultLable = document.getElementById("resultLable");
let input1 = document.getElementById("input");
let eror = document.getElementById("eror")
let ul = document.getElementById("lisHome");
let close = document.querySelector(".close")
let itemLeft = document.getElementById("itemLeft");
let itemLeftIn = document.querySelectorAll(".rent")
ResultCheckbox.addEventListener('change' , function(){
    resultLable.classList.toggle("done");
})            
window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (input1.value !== "") {
            const li = document.createElement("li");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let newInput = document.createElement("input"); 
            let span = document.createElement("span");
            let p = document.createElement("p");
            let div3 = document.createElement("div");
            let img = document.createElement("img");

            ul.appendChild(li);
            li.appendChild(div1);
            div1.classList.add("resul-in");

            div1.appendChild(div2);
            div2.classList.add("chec", "op");

            div2.appendChild(newInput);
            newInput.type = "checkbox";
            newInput.classList.add("ResultCheckbox");

            div2.appendChild(span);
            span.classList.add("checkmark");

            div1.appendChild(p);
            p.classList.add("resultLable"); 
            p.innerHTML = input1.value;

            li.appendChild(div3);
            div3.classList.add("close");
            div3.appendChild(img);
            img.src = "./images/icon-cross.svg";
            newInput.addEventListener("change", function () {
                if (newInput.checked) {
                    newInput.classList.add("rent")
                    itemLeft.innerHTML=itemLeftIn.length;
                } else {
                    newInput.classList.remove("rent")
                }
            });
            newInput.addEventListener("change", function () {
                p.classList.toggle("done");
            });
            div3.addEventListener("click", function () {
                li.remove();
            });
            input1.value = "";
        } else {
            eror.innerHTML = "Please enter a value";
        }
    }
});