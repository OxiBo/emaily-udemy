// https://emailregex.com/


// if use this one for HTML5 - /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ the warning messages goes away but this one is not restrictive enough
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmails = emails.replace(/(, *$)|(,$)|(\s{2,})/g, "")
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false && email !== " "); // or !re.test(email));

  if (invalidEmails.length) {
    //   console.log(invalidEmails)
    return `these emails are invalid: ${invalidEmails}`;
  }
  return;
};
