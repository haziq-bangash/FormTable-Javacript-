// array of objects representing data
const data = [];

// error handling p tag
let error = document.getElementById('error'); 
let dataError = document.getElementById('dataError');
// form tags
let Name = document.getElementById('Name');
let email = document.getElementById('Email');
let gender = document.getElementsByName('Gender');
let userGender;

// radio buttons
let male = document.getElementById('Male');
let female = document.getElementById('Female');

// table body tag
const tableBody = document.getElementById('tableBody');

// validation function

// return false if either one input is empty or return true if all are valid

const validate = () => {
    if (Name.value == "" || Name.value == null) {
        error.innerHTML = 'Please enter your Name';
        return false;
    }
    else if (email.value == "" || email.value == null) {
        error.innerHTML = 'Please enter your email address';
        return false;
    }
    else if (!male.checked && !female.checked) {
        error.innerHTML = 'Please select a male or female';
        return false;
    }
    else {
        for(i = 0; i < gender.length; i++) {
            if(gender[i].checked)
            userGender = gender[i].value;
        }
        error.innerHTML = '';
        return true;
    }
}


// function to insert data into table cell
const insertData = () => {
    if (validate() == false) {
        dataError.innerHTML = 'Data Entry Unsuccessful';
        dataError.classList.add('text-danger');
    }
    else {
        dataError.innerHTML = 'Data Entered Successfully';
        dataError.classList.remove('text-danger');
        dataError.classList.add('text-success');

        // temporary object variable
        const temp = {
            name : Name.value,
            email: email.value,
            gender : userGender
        };

        // push temp to data (array of objects)
        data.push(temp);
        console.log(data);

        // insert data to table
        tableBody.innerHTML += `<tr><td>${temp.name}</td><td>${temp.email}</td><td>${temp.gender}</td></tr>`;
    }
}

