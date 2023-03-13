const refs={
input : document.querySelector('#name-input'),
output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange )

function onInputChange(event) {
    console.log ('input on change', event.currentTarget.value)
refs.output.textContent=event.currentTarget.value;
if (event.currentTarget.value.trim() === '') {
    refs.output.textContent = 'Anonymous';
  }
}


// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur)


// function onInputFocus() {
//     console.log('інпут в фокусі')
// };

// function onInputBlur (){
//     console.log('інпут без фокусу')
// };

