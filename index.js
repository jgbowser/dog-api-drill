
const retrieveUserInput = function() {
  $('form').submit(event => {
    event.preventDefault();
    let number = $('input').val(); 
    getDogImage(number);
  });
};

const getDogImage = function(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(jsonData => htmlTemplate(jsonData));
    
};

const htmlTemplate = function(data) {
  for (let i = 0; i < data.message.length; i++) {
      console.log(data.message[i]);
    $('.js-images').append(`<img src="${data.message[i]}"/>`);
  };
};







const seeDogs = function() {
  retrieveUserInput();
};

$(seeDogs());