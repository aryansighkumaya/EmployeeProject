function addUser() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const noEmployees = document.getElementById('no-employees');

    if (name === '' || profession === '' || age === '') {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
    noEmployees.style.display = 'none';

    const employeeList = document.getElementById('employee-list');
    const employeeCount = employeeList.children.length + 1;
    const employeeItem = document.createElement('div');
    employeeItem.className = 'employee-item';
    employeeItem.innerHTML = `<div class="employee-details">
                                <span>${employeeCount}. Name : ${name}</span>
                                <span>Profession: ${profession}</span>
                                <span>Age:${age}</span>
                              </div>
                              <button class="delete-btn" onclick="deleteUser(this)">Delete User</button>`;
    employeeList.appendChild(employeeItem);

    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}

function deleteUser(button) {
    const employeeItem = button.parentElement;
    employeeItem.remove();

    const employeeList = document.getElementById('employee-list');
    if (employeeList.children.length === 0) {
        document.getElementById('no-employees').style.display = 'block';
    }
}

window.onload = function() {
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}