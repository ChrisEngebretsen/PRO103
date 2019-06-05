function ddChange(id) {
    const selected = document.getElementById(id).value;
    document.getElementById(id+"init").innerHTML = selected;
    document.getElementById(id+"init").setAttribute("class", "initials")
    if(selected === "blank") {
        document.getElementById(id+"init").setAttribute("class", "initials hidden")
    }
}
counter = 0;
const items = [];
var labels = items.map(item => item.name);
var prices = items.map(item => item.pris)
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: prices,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
function addItems(){
    counter += 1;
    var itemDiv = document.createElement("div");
    document.getElementById("SiseSide_Shoppinglist").appendChild(itemDiv);
    itemDiv.setAttribute("id", "itemDiv" + counter);
    itemDiv.setAttribute("class", "itemDivClass");

    var newDeleteButton = document.createElement("input");
    document.getElementById("itemDiv" + counter).appendChild(newDeleteButton);
    newDeleteButton.setAttribute("class", "deletebuttonclass");
    newDeleteButton.setAttribute("type", "button");
    newDeleteButton.setAttribute("value", "X");
    newDeleteButton.setAttribute("onclick", "removeItem('itemDiv" + counter + "')");
    var newItem = document.createElement("div");
    newItem.setAttribute("class", "shoppingItems");
    newItem.setAttribute("id", "shoppingitem" + counter);
    var priceInput = document.createElement("input")
    var nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text");
    priceInput.setAttribute("type", "number");
    newItem.append(priceInput, nameInput);
    document.getElementById("itemDiv" + counter).appendChild(newItem);

    if(counter > 1) {
        const itemDiv = document.getElementById("shoppingitem" + (counter - 1));
        items.push({name: itemDiv.childNodes[1].value, pris: parseInt(itemDiv.childNodes[0].value)})
        console.log(items)
        labels = items.map(item => item.name);
        prices = items.map(item => item.pris)
        myChart.data.labels.push(itemDiv.childNodes[1].value);
        myChart.data.datasets.forEach((dataset) => {
            dataset.data.push(parseInt(itemDiv.childNodes[0].value));
        });
        myChart.update();
    }

}

function removeItem(id){
    document.getElementById(id).remove();
}

