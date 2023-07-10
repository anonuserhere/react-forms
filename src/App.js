import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SurveyForm from "./SurveyForm";
import Form from "./Form";
import Add from "./Increment";
import Booking from "./Booking";

function App() {
  // const [buttonClicked, setButtonClicked] = useState(false);
  // const buttonPress = () => {
  //   setButtonClicked(true);
  // };

  return (
    <>
      <div>
        <Add />
        <p></p>
        <SurveyForm />
        {/* <button
          className="btn btn-primary btn-md"
          onClick={buttonPress}
          disabled={buttonClicked}
        >
          Submit
        </button> */}
        <Form msg="hi there" />
        <p></p>
        <div>
          <Booking />
        </div>
      </div>
    </>
  );
}

export default App;
