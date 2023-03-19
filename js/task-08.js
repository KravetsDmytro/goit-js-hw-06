
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
event.preventDefault();
const { elements : {email, password}
} = event.currentTarget

if (email.value === '' || password.value === '')
return   alert("введіть ваші данні для реєстрації");


const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
}




// const formData = {
//     email: email.value,
//     password: password.value,
//   };
//   console.log(formData)



// const formData = new FormData(event.currentTarget);
// console.log(formData);

// formData.forEach((value, name) =>
// {
//     console.log( value)
//     console.log( name)
// })







// }