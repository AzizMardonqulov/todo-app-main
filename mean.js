let ResultCheckbox = document.getElementById("ResultCheckbox");
let resultLable = document.getElementById("resultLable");
let input1 = document.getElementById("input");
let eror = document.getElementById("eror");
let ul = document.getElementById("lisHome");
let itemLeft = document.getElementById("itemLeft");
let all = document.getElementById("all");
let active = document.getElementById("active");
let comp = document.getElementById("comp");
let CLearAll = document.getElementById("CLearAll");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let haderBg = document.getElementById("haderBg");
let toDoListInput = document.getElementById("toDoListInput");
let hader = document.getElementById("hader");
let toDoListMenu = document.getElementById("toDoListMenu");
let menuItems1 = document.querySelector(".one")
let menuItems2 = document.querySelector(".two")
let menuItems3 = document.querySelector(".three")
let haveResult = document.getElementById("haveResult");
let body  = document.body;
function updateItemCount() {
    let itemLeftIn = document.querySelectorAll(".rent");
    itemLeft.innerHTML = itemLeftIn.length;
}

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
                    li.classList.add("rent"); 
                } else {
                    li.classList.remove("rent"); 
                }
                updateItemCount();
            });

            newInput.addEventListener("change", function () {
                p.classList.toggle("done");
            });

            div3.addEventListener("click", function () {
                li.remove();
                updateItemCount();
            });

            input1.value = "";
            updateItemCount();
        } else {
            eror.innerHTML = "Please enter a value";
        }
    }
});

active.addEventListener("click", function () {
    all.classList.remove("active");
    active.classList.add("active");
    comp.classList.remove("active");

    document.querySelectorAll("#lisHome li").forEach((li) => {
        if (li.classList.contains("rent")) {
            li.style.display = "none"; 
        } else {
            li.style.display = "flex"; 
        }
    });
});

comp.addEventListener("click", function () {
    all.classList.remove("active");
    active.classList.remove("active");
    comp.classList.add("active");

    document.querySelectorAll("#lisHome li").forEach((li) => {
        if (!li.classList.contains("rent")) {
            li.style.display = "none"; 
        } else {
            li.style.display = "flex";
        }
    });
});

all.addEventListener("click", function () {
    all.classList.add("active");
    active.classList.remove("active");
    comp.classList.remove("active");

    document.querySelectorAll("#lisHome li").forEach((li) => {
        li.style.display = "flex";
    });
});
CLearAll.addEventListener("click", function () {
    ul.innerHTML = "";
    updateItemCount();
});
sun.addEventListener("click" , function(){
    sun.classList.remove("visiball");
    moon.classList.add("visiball");
    haderBg.classList.add("sunLight")
    toDoListInput.classList.add("light")
    hader.classList.add("hader-bac");
    ul.classList.add("li-Light-Bac")
    toDoListMenu.classList.add("li-Light-Bac")
    menuItems1.classList.add("colorItem")
    menuItems2.classList.add("colorItem")
    menuItems3.classList.add("colorItem")
    itemLeft.classList.add("colorItem")
    CLearAll.classList.add("colorItem")
    haveResult.classList.add("colorItem")
    body.classList.add("bodyBac");
})
moon.addEventListener("click" , function(){
    sun.classList.add("visiball");
    moon.classList.remove("visiball");
    haderBg.classList.remove("sunLight")
    toDoListInput.classList.remove("light")
    hader.classList.remove("hader-bac");
    ul.classList.remove("li-Light-Bac")
    toDoListMenu.classList.remove("li-Light-Bac")
    menuItems1.classList.remove("colorItem")
    menuItems2.classList.remove("colorItem")
    menuItems3.classList.remove("colorItem")
    itemLeft.classList.remove("colorItem")
    CLearAll.classList.remove("colorItem")
    haveResult.classList.remove("colorItem")
    body.classList.remove("bodyBac")
})
