/* returns the size/length of an object */
Object.size = function(obj) {
	var size = 0;
	for(key in obj) {
		if(obj.hasOwnProperty(key)) size++;
	}
	return size;
}

/* count unique characters in string */
function symbolCount() {
    var str = document.getElementById('string').value;
    
    var table = document.getElementById("table");

    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    
    if(rowCount > 1) {
        for(var rowi = 0; rowi < rowCount; rowi++ ) {
            document.getElementById("table").deleteRow(0);
        }
    }
    
    if(!str.endsWith('.') || !str.length > 100) {
        document.getElementById('error').innerHTML = 'This element should end with \'.\' and contains less than 100 characters.';
    }
    var letters = new Object;

    for(x = 0, length = str.length; x < length; x++) {
	   var l = str.charAt(x)
	   letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
    }
    
    switch(rowCount) {
        case 0:
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = "Symbol";
                cell2.innerHTML = "Count";
        case 1:
                for(key in letters) {
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = key;
                    cell2.innerHTML = letters[key];
                }   
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = "Total unique symbols: ";
                cell2.innerHTML = Object.size(letters);
                break;
    }
    
}