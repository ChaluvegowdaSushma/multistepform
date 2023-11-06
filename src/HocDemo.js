import { connect } from "react-redux";
import Demo from "./Demo";
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateNumber,
  updateInfo,
  updatenextzero,
  updatenextone,
} from "./actions";

const mapStateToProps = (state) => {
  return {
    personDetails: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateFirstName: (value) => dispatch(updateFirstName(value)),
    updateLastName: (value) => dispatch(updateLastName(value)),
    updateEmail: (value) => dispatch(updateEmail(value)),
    updateNumber: (value) => dispatch(updateNumber(value)),
    updateInfo: (value) => dispatch(updateInfo(value)),
    updatenextzero: (value) => dispatch(updatenextzero(value)),
    updatenextone: (value) => dispatch(updatenextone(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Demo);