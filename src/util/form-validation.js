export function isNameValid(name) {
  return name !== "";
}

export function isEmailValid(email) {
  let regex = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/g;
  return regex.test(email);
}

export function isAddressValid(address) {
  return address !== "";
}

export function isPostalValid(postal) {
  return postal !== "";
}

export function isCityValid(city) {
  return city !== "";
}

export function isTextValid(text) {
  return text !== "";
}
