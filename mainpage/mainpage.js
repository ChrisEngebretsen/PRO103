/*function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}*/

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("text"));
    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;

    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
}

count = 0;
function createNewDiv(){
    count += 1;
    var div = document.createElement("div");
    document.getElementById("to_do_column").appendChild(div);
    div.setAttribute("id", "newbox" + count);
    div.setAttribute("class", "newboxclass");

    /*div.setAttribute("ondragover", "allowDrop(event)");
    div.setAttribute("ondrop", "drop(event)");*/

    var btn = document.createElement("input");
    document.getElementById("newbox"+ count).appendChild(btn);
    btn.setAttribute("id", "newinput" + count);
    btn.setAttribute("draggable", "true");
    btn.setAttribute("ondragstart", "drag(event)");
    btn.setAttribute("ondragover", "allowDrop(event)");
    btn.setAttribute("ondrop", "drop(event)");
}
