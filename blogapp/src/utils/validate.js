export default function validate(errors, name, value) {
  switch (name) {
    case 'email':
      let emailError =
        value.indexOf('@') === -1 ? 'Email does not contain @' : '';
      errors.email = emailError;
      break;
    case 'password':
      let passwordError = '';
      if (value.length < 7) {
        passwordError = "Password can't be less then 6.";
      }
      let re = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
      if (!re.test(value)) {
        passwordError = 'Password must contain the character and a number';
      }
      errors.password = passwordError;
      break;
    case 'username':
      let userNameError = value.length < 7 ? 'Length is short' : '';
      errors.username = userNameError
    default:
      return errors;
  }
}
