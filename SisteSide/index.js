function ddChange(id) {
    const selected = document.getElementById(id).value;
    document.getElementById(id+"init").innerHTML = selected;
    document.getElementById(id+"init").setAttribute("class", "initials")
    if(selected === "blank") {
        document.getElementById(id+"init").setAttribute("class", "initials hidden")
    }
}
