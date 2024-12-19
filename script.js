// Function to insert a new row at the top of the table
function insert_Row() {
    // Get the table by its ID
    var table = document.getElementById("sampleTable");

    // Create a new row
    var newRow = table.insertRow(1);  // Insert the row at the second position (index 1)

    // Create two new cells for the row
    var cell1 = newRow.insertCell(0); // First cell
    var cell2 = newRow.insertCell(1); // Second cell

    // Add text to the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
