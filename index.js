const buttons = document.querySelectorAll("button");
const textarea = document.querySelector("textarea");
const caps = document.querySelector(".caps");
const shiftBtn = document.querySelector(".shift")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        let elements = e.target.innerText

        if (elements !== "Backspace" && elements !== "Enter" && elements !== "CapsLock" && elements !== "Tab" && elements !== "Shift" && elements !== "Delete" && elements !== "Space") {
            textarea.value += elements;
        }
        else if (elements == "Backspace") {
            textarea.value = textarea.value.slice(0,- 1);
        }
        else if (elements == "Delete") {
            textarea.value = " "
        }
        else if (elements == "Enter") {
            textarea.value += "\n";
        }
        else if (elements == "Tab") {
            textarea.value += "    ";
        }
        else if (elements == "Space") {
            textarea.value += " ";
        }

    })

    caps.addEventListener('click', () => {
        if (buttons[i].innerText !== "Backspace" && buttons[i].innerText !== "Enter" && buttons[i].innerText !== "CapsLock" && buttons[i].innerText !== "Tab" && buttons[i].innerText !== "Shift" && buttons[i].innerText !== "Delete" && buttons[i].innerText !== "Space") {
            buttons[i].classList.toggle('UppperCase')

        }

    })

    shiftBtn.addEventListener('click', () => {
        if (buttons[i].innerText !== "Backspace" && buttons[i].innerText !== "Enter" && buttons[i].innerText !== "CapsLock" && buttons[i].innerText !== "Tab" && buttons[i].innerText !== "Shift" && buttons[i].innerText !== "Delete" && buttons[i].innerText !== "Space") {
            buttons[i].classList.toggle('UppperCase')

        }

    })

}
window.addEventListener("keydown", (e) => {
    let target = e.key;
    console.log(target)
    if (target != "Enter" && target!="Shift" && target != "Backspace" && target != "Tab" && target != "Control" && target != "Alt" && target != "PageUp" && target != "PageDown" && target != "WakeUp" && target != "Delete" && target != "Escape" && target != "CapsLock" && target != "Insert" && target != "Home" && target != "End" && target != "Windows" && target != "ArrowUp" && target != "ArrowDown" && target != "ArrowLeft" && target != "ArrowRight") {
        textarea.value += e.key
    }
    else if(target == "Delete"){
        textarea.value="";  
    }
    else if (target == "CapsLock") {
        for(let i=0; i<buttons.length; i++){
            if (buttons[i].innerText !== "Backspace" && buttons[i].innerText !== "Enter" && buttons[i].innerText !== "CapsLock" && buttons[i].innerText !== "Tab" && buttons[i].innerText !== "Shift" && buttons[i].innerText !== "Delete" && buttons[i].innerText !== "Space") {
                buttons[i].classList.toggle('UppperCase');
    
            }
        }
       
    }
    else if(target == "Backspace"){
        textarea.value = textarea.value.slice(0,-1);
    }
    else if(target == "Tab"){
        textarea.value +="    ";
    }
    else if(target == "Enter"){
        textarea.value += "\n";
    }
    for(let i=0; i<buttons.length; i++){
        if(buttons[i].innerText == target){
            buttons[i].classList.add("matching")
            setTimeout(() => {
                buttons[i].classList.remove("matching")
            }, 200);
        } 
    }
})





