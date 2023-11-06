const reducer = (
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    info: "",
    isnextzeroclicked: false,
    isnextoneclicked: false,
  },
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
    case "NEXTZEROCHECK":
      return { ...state, isnextzeroclicked: action.isnextzeroclicked };
    case "NEXTONECHECK":
      return { ...state, isnextoneclicked: action.isnextoneclicked };
    default:
      return state;
  }
};
export default reducer;
