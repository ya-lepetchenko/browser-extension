console.log('script is set')

const regex = /^\d+$/;

let inputBox = document.getElementById("input-itself")
console.log(inputBox.value)
inputBox.addEventListener(
    'input',
    (event) => {
        const value = event.target.value;
        if (!regex.test(value)) {
        event.target.value = '';
        }
    }
 );
