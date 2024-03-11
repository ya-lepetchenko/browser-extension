const regex = /^\d+$/;

let inputBox = document.getElementById("input-itself")
inputBox.addEventListener(
    'input',
    (event) => {
        const value = event.target.value
        if (!regex.test(value)) {
            event.target.value = ''
        }
    }
);
