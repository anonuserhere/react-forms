import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class Booking extends React.Component {
  state = {
    name: "",
    seating: "", //radio
    smoking: "", //dropdown
    appetizer: [], //checkbox
    submitted: false,
    all_seating: [],
  };

  // seating = [
  //   {
  //     display: "Indoors",
  //     value: "indoors",
  //   },
  //   {
  //     display: "Alfresco",
  //     value: "alfresco",
  //   },
  //   {
  //     display: "VIP",
  //     value: "VIP",
  //   },
  // ];

  async componentDidMount() {
    let response = await axios.get("./json/seating.json");
    let all_seating = response.data;

    this.setState({
      all_seating: all_seating,
    });
  }

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  renderSeating = () => {
    let seatOptions = [];
    for (let seat of this.state.all_seating) {
      let e = (
        <React.Fragment key={seat.value}>
          <input
            name="seating"
            type="radio"
            value={seat.value}
            checked={this.state.seating === seat.value}
            onChange={this.updateFormField}
          />
          <span>{seat.display}</span>
        </React.Fragment>
      );
      seatOptions.push(e);
    }
    return seatOptions;
  };

  updateFood = (event) => {
    const { value } = event.target;
    if (this.state.appetizer.includes(value)) {
      const indexToDelete = this.state.appetizer.findIndex(
        (el) => el === value
      );
      const modified = [
        ...this.state.appetizer.slice(0, indexToDelete),
        ...this.state.appetizer.slice(indexToDelete + 1),
      ];
      this.setState({
        appetizer: modified,
      });
    } else {
      const modified = [...this.state.appetizer, value];
      this.setState({
        appetizer: modified,
      });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  }

  render() {
    return (
      <>
        <h1>Restaurant Booking</h1>
        <form className="form-control">
          <div>
            <label className="form-label">Name:</label>
            <input
              name="name"
              className="form-control"
              type="text"
              value={this.state.name}
              onChange={this.updateFormField}
            />
          </div>
          <div className="form-control">
            <label>Seating:</label>
            {this.renderSeating()}
          </div>
          <div>
            <label className="form-label">Smoking:</label>
            <select
              className="form-select"
              name="smoking"
              onChange={this.updateFormField}
            >
              <option value="smoking">Smoking</option>
              <option value="non-smoking">Non-smoking</option>
            </select>
          </div>
          <div>
            <label>Appetizer</label>
            <input
              className="form-check-input"
              type="checkbox"
              name="appetizer"
              value="raw_fish"
              checked={this.state.appetizer.includes("raw_fish")}
              onChange={this.updateFood}
            />
            <label className="form-check-label">Raw Fish</label>
            <input
              className="form-check-input"
              type="checkbox"
              name="appetizer"
              value="salad"
              checked={this.state.appetizer.includes("salad")}
              onChange={this.updateFood}
            />
            <label className="form-check-label">Salad</label>
            <input
              className="form-check-input"
              type="checkbox"
              name="appetizer"
              value="cuttlefish"
              checked={this.state.appetizer.includes("cuttlefish")}
              onChange={this.updateFood}
            />
            <label className="form-check-label">Fried Cuttlefish</label>
            <input
              className="form-check-input"
              type="checkbox"
              name="appetizer"
              value="peanuts"
              checked={this.state.appetizer.includes("peanuts")}
              onChange={this.updateFood}
            />
            <label className="form-check-label">Peanuts</label>
          </div>
          <div>
            <button
              className="btn btn-info"
              disabled={
                !this.state.name ||
                !this.state.seating ||
                !this.state.smoking ||
                this.state.appetizer.length === 0
              }
              onClick={this.handleSubmit.bind(this)}
            >
              Submit
            </button>
          </div>

          {this.state.submitted && (
            <div class="container">
              <h2>Your Booking:</h2>
              <p>Name: {this.state.name}</p>
              <p>Seating: {this.state.seating}</p>
              <p>Seat type: {this.state.smoking}</p>
              <p>Appetizer: {this.state.appetizer.join(", ")}</p>
            </div>
          )}
        </form>
      </>
    );
  }
}
