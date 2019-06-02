// count variable, counts number of times a row is created
count = 0;

//create new row function, count increases by 1 each time button is pressed
function createNewDiv(){
    count += 1;

    var div = document.createElement("div");
    document.getElementById("to_do_column").appendChild(div);
    div.setAttribute("id", "newbox" + count);
    div.setAttribute("class", "newboxclass");


    var taskinput = document.createElement("input");
    document.getElementById("newbox" + count).appendChild(taskinput);
    taskinput.setAttribute("class", "inputclassname");
    taskinput.setAttribute("placeholder", "New taskname..");
    taskinput.setAttribute("class", "taskinputclass");


    var statusdiv = document.createElement("div");
    document.getElementById("newbox" + count).appendChild(statusdiv);
    statusdiv.setAttribute("class", "statusdivclass");
    statusdiv.setAttribute("id", "statusdiv" + count);

    //

    //to do, in progress, do today, done options + select bar

    var statusoptions = document.createElement("select");
    document.getElementById("statusdiv" + count).appendChild(statusoptions);
    statusoptions.setAttribute("id", "statusoptionbar" + count);
    statusoptions.setAttribute("class", "statusoptionbarclass");

    var statusoption1 = document.createElement("option");
    statusoption1.setAttribute("value", "To-do")
    var option1 = document.createTextNode("To-do");
    statusoption1.appendChild(option1);
    document.getElementById("statusoptionbar" + count).appendChild(statusoption1);

    var statusoption2 = document.createElement("option");
    statusoption2.setAttribute("value", "In progress")
    var option2 = document.createTextNode("In progress");
    statusoption2.appendChild(option2);
    document.getElementById("statusoptionbar" + count).appendChild(statusoption2);

    var statusoption3 = document.createElement("option");
    statusoption3.setAttribute("value", "Do-today")
    var option3 = document.createTextNode("Do-today");
    statusoption3.appendChild(option3);
    document.getElementById("statusoptionbar" + count).appendChild(statusoption3);

    var statusoption4 = document.createElement("option");
    statusoption4.setAttribute("value", "Done");
    var option4 = document.createTextNode("Done");
    statusoption4.appendChild(option4);
    document.getElementById("statusoptionbar" + count).appendChild(statusoption4);

    //to do, in progress, do today, done options + select bar end


}

