export function updateFirstName(firstName) {
  console.log(firstName);
  return {
    type: "FIRSTNAME",
    firstName,
  };
}
export function updateLastName(lastName) {
  return {
    type: "LASTNAME",
    lastName,
  };
}
export function updateEmail(email) {
  console.log(email);
  return {
    type: "EMAIL",
    email,
  };
}
export function updateNumber(phoneNumber) {
  console.log(phoneNumber);
  return {
    type: "PHONENUMBER",
    phoneNumber,
  };
}
export function updateInfo(info) {
  console.log(info);
  return {
    type: "INFO",
    info,
  };
}