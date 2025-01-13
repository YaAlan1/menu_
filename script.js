// function validateForm() {

//     const inputs = document.querySelectorAll('.a');
//     const btn = document.querySelector('.bt')
//     let allFilled = true;

//     inputs.forEach(input => {

//         if (input.value.trim() === '') {
//             input.style.borderColor = 'red';
//             allFilled = false; 
//         } else {
//             input.style.borderColor = '';
//         }
//     });


//         if(!allFilled) {
//             btn.style.backgroundColor = 'red';
//         } else {
//             btn.style.backgroundColor = 'blue' ;

//         }
//     }


const regex = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    name: /^[a-zA-Zа-яА-ЯёЁ]+([ '-][a-zA-Zа-яА-ЯёЁ]+)*$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    phone: /^\+998\d{9}$/,
    age: /^(?:1[01]?[0-9]|[1-9]?[0-9])$/, 
    HTML: /^[A-Za-z]+$/,
    CSS: /^[A-Za-z]+$/,
    Java:/^[A-Za-z]+$/,
    About_You:/^[A-Za-z]+$/
}


let form = document.forms.reg

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {}

    let fn = new FormData(form)

    if (validateInps()) {
        fn.forEach((value, key) => {
            user[key] = value
        })
    }
    validateInps()
}

function validateInps() {
    let inps = document.querySelectorAll(".color")
    let spans = document.querySelectorAll("span")
    let successs = document.querySelector("#Success")
    let error = document.querySelector("#err")
    let isValiyt = true

    inps.forEach((inp, index )=> {
        let key = inp.name

        if (regex[key].test(inp.value)) {
            inp.style.borderColor = "green"
            spans[index].textContent = "Need to fill"; 
            spans[index].style.color = "gray";
        } else {
            inp.style.borderColor = "red"
            spans[index].textContent = "Please enter your " + key; 
            spans[index].style.color = "red"; 
            isValiyt = false
        }
    })

    return isValiyt
}

