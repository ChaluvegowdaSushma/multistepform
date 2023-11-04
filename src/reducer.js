const reducer = (
  state = { firstName: "", lastName: "", email: "", phoneNumber: "", info: "" },
  action
) => {
  switch (action.type) {
    case "FIRSTNAME":
      return { ...state, firstName: action.firstName };
    case "LASTNAME":
      return { ...state, lastName: action.lastName };
    case "EMAIL":
      return { ...state, email: action.email };
    case "PHONENUMBER":
      return { ...state, phoneNumber: action.phoneNumber };
    case "INFO":
      return { ...state, info: action.info };
    default:
      return state;
  }
};
export default reducer;
