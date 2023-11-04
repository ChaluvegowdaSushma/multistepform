export function updateFirstName(firstName) {
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
  return {
    type: "EMAIL",
    email,
  };
}
export function updateNumber(phoneNumber) {
  return {
    type: "PHONENUMBER",
    phoneNumber,
  };
}
export function updateInfo(info) {
  return {
    type: "INFO",
    info,
  };
}