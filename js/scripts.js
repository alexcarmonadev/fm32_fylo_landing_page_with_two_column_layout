const error1 = document.getElementById('alert1');
const error2 = document.getElementById('alert2');
const red1 = document.getElementById('email1');
const red2 = document.getElementById('email2');

const emailRegex =
  /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail1 = (email) => {
  if (emailRegex.test(email)) {
    red1.classList.remove('alert3');
    error1.classList.add('alert1');
    red1.value = '';
  } else {
    red1.classList.add('alert3');
    error1.classList.remove('alert1');
  }
};

const validateEmail2 = (email) => {
  if (emailRegex.test(email)) {
    red2.classList.remove('alert3');
    error2.classList.add('alert2');
    red2.value = '';
  } else {
    red2.classList.add('alert3');
    error2.classList.remove('alert2');
  }
};

const getValueInput1 = () => {
  let inputValue1 = red1.value;
  validateEmail1(inputValue1);
};

const getValueInput2 = () => {
  let inputValue2 = red2.value;
  validateEmail2(inputValue2);
};
