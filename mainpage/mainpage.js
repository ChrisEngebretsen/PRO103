// count variable, counts number of times a row is created
count = 0;

//create new row function, count increases by 1 each time button is pressed
function createNewDiv(){
    count += 1;

    //code to create new row

    var div = document.createElement("div");
    document.getElementById("to_do_column").appendChild(div);
    div.setAttribute("id", "newbox" + count);
    div.setAttribute("class", "newboxclass");

    //inputfield in each row

    var taskinput = document.createElement("input");
    document.getElementById("newbox" + count).appendChild(taskinput);
    taskinput.setAttribute("placeholder", "New taskname..");
    taskinput.setAttribute("class", "taskinputclass");


    // Person selection div

    var personlogodiv = document.createElement("div");
    document.getElementById("newbox" + count).appendChild(personlogodiv);
    personlogodiv.setAttribute("class", "personlogodiv");
    personlogodiv.setAttribute("id", "personlogodiv" + count);

    //Person select

    var personselect = document.createElement("select");
    document.getElementById("personlogodiv" + count).appendChild(personselect);
    personselect.setAttribute("class", "personselectclass");
    personselect.setAttribute("id", "personselect" + count);


    // Person select options
    var personoption0 = document.createElement("option");
    personoption0.setAttribute("value", "Select owner");
    var person0 = document.createTextNode("Select task owner..");
    personoption0.appendChild(person0);
    document.getElementById("personselect" + count).appendChild(personoption0);

    var personoption1 = document.createElement("option");
    personoption1.setAttribute("value", "Rahil");
    var person1 = document.createTextNode("Rahil");
    personoption1.appendChild(person1);
    document.getElementById("personselect" + count).appendChild(personoption1);

    var personoption2 = document.createElement("option");
    personoption2.setAttribute("value", "Christian");
    var person2 = document.createTextNode("Christian");
    personoption2.appendChild(person2);
    document.getElementById("personselect" + count).appendChild(personoption2);

    var personoption3 = document.createElement("option");
    personoption3.setAttribute("value", "Mohamed");
    var person3 = document.createTextNode("Mohamed");
    personoption3.appendChild(person3);
    document.getElementById("personselect" + count).appendChild(personoption3);

    var personoption4 = document.createElement("option");
    personoption4.setAttribute("value", "Martin");
    var person4 = document.createTextNode("Martin");
    personoption4.appendChild(person4);
    document.getElementById("personselect" + count).appendChild(personoption4);

    var personoption5 = document.createElement("option");
    personoption5.setAttribute("value", "Kristine");
    var person5 = document.createTextNode("Kristine");
    personoption5.appendChild(person5);
    document.getElementById("personselect" + count).appendChild(personoption5);

    var personoption6 = document.createElement("option");
    personoption6.setAttribute("value", "Stine");
    var person6 = document.createTextNode("Stine");
    personoption6.appendChild(person6);
    document.getElementById("personselect" + count).appendChild(personoption6);

    //to do, in progress, do today, done options + select bar

    var statusdiv = document.createElement("div");
    document.getElementById("newbox" + count).appendChild(statusdiv);
    statusdiv.setAttribute("class", "statusdivclass");
    statusdiv.setAttribute("id", "statusdiv" + count);

    var statusoptions = document.createElement("select");
    document.getElementById("statusdiv" + count).appendChild(statusoptions);
    statusoptions.setAttribute("id", "statusoptionbar" + count);
    statusoptions.setAttribute("class", "statusoptionbarclass");

    var statusoption0 = document.createElement("option");
    statusoption0.setAttribute("value", "Task status")
    var option0 = document.createTextNode("Select task status..");
    statusoption0.appendChild(option0);
    document.getElementById("statusoptionbar" + count).appendChild(statusoption0);

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

    //date input

    var dateinput = document.createElement("input");
    document.getElementById("newbox" + count).appendChild(dateinput);
    dateinput.setAttribute("class", "dateinputclass");
    dateinput.setAttribute("placeholder", "Set due date..");

    //date input end

    //priority select

    var prioritydiv = document.createElement("div");
    document.getElementById("newbox" + count).appendChild(prioritydiv);
    prioritydiv.setAttribute("class", "prioritydivclass");
    prioritydiv.setAttribute("id", "prioritydiv" + count);

    var priorityselect = document.createElement("select");
    document.getElementById("prioritydiv" + count).appendChild(priorityselect);
    priorityselect.setAttribute("id", "priorityselect" + count);
    priorityselect.setAttribute("class", "priorityselectclass");

    var prioritynull = document.createElement("option");
    prioritynull.setAttribute("value", "Select priority");
    var priority0 = document.createTextNode("Select priority..");
    prioritynull.appendChild(priority0);
    document.getElementById("priorityselect" + count).appendChild(prioritynull);

    var priorityhigh = document.createElement("option");
    priorityhigh.setAttribute("value", "High");
    priorityhigh.setAttribute("id", "highpriority" + count);
    var priority1 = document.createTextNode("High");
    priorityhigh.appendChild(priority1);
    document.getElementById("priorityselect" + count).appendChild(priorityhigh);
    document.getElementById("highpriority" + count).style.color = "#ff0000";

    var prioritymedium = document.createElement("option");
    prioritymedium.setAttribute("value", "Medium");
    prioritymedium.setAttribute("id", "mediumpriority" + count);
    var priority2 = document.createTextNode("Medium");
    prioritymedium.appendChild(priority2);
    document.getElementById("priorityselect" + count).appendChild(prioritymedium);
    document.getElementById("mediumpriority" + count).style.color = "#e5e500";

    var prioritylow = document.createElement("option");
    prioritylow.setAttribute("value", "Low");
    prioritylow.setAttribute("id", "lowpriority" + count);
    var priority3 = document.createTextNode("Low");
    prioritylow.appendChild(priority3);
    document.getElementById("priorityselect" + count).appendChild(prioritylow);
    document.getElementById("lowpriority" + count).style.color = "#add8e6";

}
