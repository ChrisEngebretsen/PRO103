function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function createNewDiv(){
    var div = document.createElement("div");
    document.getElementById("to_do_column").appendChild(div);
    div.setAttribute("id", "newbox" + 1);
    div.setAttribute("ondragover", "allowDrop(event)");
    div.setAttribute("ondrop", "drop(event)");

    var btn = document.createElement("input");
    document.getElementById("newbox1").appendChild(btn);
    btn.setAttribute("id", "newinput");
    btn.setAttribute("onclick", "");
}
