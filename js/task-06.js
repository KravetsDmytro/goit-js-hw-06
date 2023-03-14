const refs= { input :document.querySelector('#validation-input'),
} 

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event){
// }

refs.input.addEventListener('blur', onInputBlur);

  

function onInputBlur(event) {
    console.log('інпут без фокусу')
    const inputDataLength = Number(refs.input.dataset.length);
    const inputValueLength = Number(refs.input.value.trim().length);
  
    if (inputValueLength === inputDataLength) {
        console.log('input valid')
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid');
    } else {
        console.log('input in-valid')
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');
    }
  }



// let inputVal = document.getElementById("validation-input");

// let totalLenght = inputVal.getAttribute("data-length");
// let intTotallenght = parseInt(totalLenght, 10);

// inputVal.oninput = function() {
//   if (inputVal.value.length === intTotallenght) {
//     inputVal.classList.remove("invalid");
//     inputVal.classList.add("valid");
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
//     inputVal.classList.add("invalid");
//   }
// };