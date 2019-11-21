window.addEventListener('DOMContentLoaded', () => {           // Ждём загрузки DOM дерева 
  'use strict';

  const validationForm = {
    rules: {
      username: {
        required:true,
        minlength: 2,
        maxlength: 15
      },
      usersurname: {
        required:true,
        minlength: 2,
        maxlength: 15
      },
      userpassword: {
        required: true,
        minlength: 6,
      },
      confirmpassword: {
        required: true,
        minlength: 6,
      },
      useremail:{
        required: true,
        email: true
      },
      usernationality:{
        required: true
      },
      userdate:{
        required: true
      },
      usermonth:{
        required: true
      },
      useryear:{
        required: true
      },
    },
    messages: {
      username: {
        required: "*",
        minlength: jQuery.validator.format("Min lenght: {0} !"),
        maxlength: jQuery.validator.format("Max lenght 15")
      },
      usersurname: {
        required: "*",
        minlength: jQuery.validator.format("Min lenght: {0} !"),
        maxlength: jQuery.validator.format("Max lenght 15")
      },
      userpassword: {
        required: "*",
        minlength: jQuery.validator.format("Min lenght: {0} !"),
      },
      confirmpassword: {
        required: "*",
        minlength: jQuery.validator.format("Min lenght: {0} !"),
      },
      useremail: {
        required: "*",
        email: jQuery.validator.format("Error")
      },
      usernationality: {
        required: "*",
      },
      userdate: {
        required: "*",
      },
      usermonth: {
        required: "*",
      },
      useryear: {
        required: "*",
      },
    },
    errorClass: "invalid",
    errorElement: "div",

  };
  $.validator.addMethod("validationCost", function(value, element, arg){
    return arg !== value;
    }, "Value must not equal arg.");
/* Валидация форм */
  $('#form').validate(validationForm);

  
});