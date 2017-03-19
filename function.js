function buildTable() {
    var a = 0;
    var b = 1;
    var n = 9;
    var h = (b - a) / n;
    var min = 0;
    var max = 0;
    
    var table = document.getElementById("table");
    
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    switch(rowCount) {
        case 0:
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = "xi";
                cell2.innerHTML = "fxi(xi)";
                cell3.innerHTML = "h";
        case 1:
            for(var i = n; i >= 0; i--) {
                var xi = a + i*h;
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = xi;
                cell2.innerHTML = fxi(xi);
                if(min > fxi(xi))
                    min = fxi(xi);
                if(max < fxi(xi))
                    max = fxi(xi);
                cell3.innerHTML = h;
            }
            break;
        default:
            for (var x=rowCount-1; x>0; x--) {
                table.removeChild(tableRows[x]);
            }
    }
    
    document.getElementById('min').innerHTML = "Minimal value is: " + min;
    document.getElementById('max').innerHTML = "Maximal value is: " + max;
}

function fxi(xi) {
    return (xi * Math.tan(xi)) * Math.sqrt(xi);
}