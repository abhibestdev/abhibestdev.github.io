// arrays.js Arrays to store person names and salaries
var persons = [];
var salaries = [];

// Function to add a person and salary to the arrays
function addSalary() {
    var person = document
        .getElementById('employee')
        .value;
    var salary = document
        .getElementById('salary')
        .value;

    // Data validation
    if (person.trim() === '' || isNaN(salary)) {
        alert('Please enter valid data.');
        return;
    }

    persons.push(person);
    salaries.push(parseFloat(salary));

    // Move cursor to the name field
    document
        .getElementById('employee')
        .focus();
}

// Function to calculate average and highest salary and display results
function displayResults() {
    var sum = 0;
    var highest = 0;

    for (var i = 0; i < salaries.length; i++) {
        sum += salaries[i];
        if (salaries[i] > highest) {
            highest = salaries[i];
        }
    }

    var average = sum / salaries.length;

    // Display results in the "results" div
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Results</h2>';
    resultsDiv.innerHTML += '<p>Average Salary: ' + average.toFixed(2) + '</p>';
    resultsDiv.innerHTML += '<p>Highest Salary: ' + highest.toFixed(2) + '</p>';
}

// Function to display salaries in the "results_table" table
function displaySalary() {
    var tableBody = document
        .getElementById('results_table')
        .getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    for (var i = 0; i < persons.length; i++) {
        var row = tableBody.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.textContent = persons[i];
        cell2.textContent = salaries[i].toFixed(2);
    }
}

// Attach functions to buttons
document
    .getElementById('addButton')
    .addEventListener('click', addSalary);
document
    .getElementById('displayResultsButton')
    .addEventListener('click', displayResults);
document
    .getElementById('displaySalaryButton')
    .addEventListener('click', displaySalary);

// Move cursor to the name field when the page loads
document
    .getElementById('employee')
    .focus();