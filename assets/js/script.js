
let btn = document.getElementById('add-employees-btn');
let tbody = document.getElementById('employee-table');
let employees = [];

btn.onclick = () => {
    let firstName = prompt('What is the first name?');
    let lastName = prompt('What is the last name?');
    let salary = prompt('What is the salary?');

    employees.push({firstName,lastName,salary});


    tbody.innerHTML = '';

    employees.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(val => {
                row.innerHTML += `<td>${val}</td>`;
        });

        tbody.appendChild(row);
    });

    console.log(employees);
    
};
