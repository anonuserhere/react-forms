import React from "react";
import axios from "axios";

class SurveyForm extends React.Component {
  state = {
    name: "",
    colour: "",
    country: "",
    fruits: [],
    contact: [],
    all_colours: [],
    all_countries: [],
    all_fruits: [],
  };

  async componentDidMount() {
    // axios.get("./json/colours.json").then((r) => (this.fruits = r.data));
    // axios.get("./json/countries.json").then((r) => (this.colours = r.data));
    // axios.get("./json/fruits.json").then((r) => (this.fruits = r.data));

    let r = await axios.get("./json/colours.json");
    let all_colours = r.data;

    let s = await axios.get("./json/countries.json");
    let all_countries = s.data;

    let t = await axios.get("./json/fruits.json");
    let all_fruits = t.data;

    this.setState({
      all_fruits: all_fruits,
      all_countries: all_countries,
      all_colours: all_colours,
    });
  }

  renderColours = () => {
    let options = [];
    for (let colour of this.state.all_colours) {
      let e = (
        <React.Fragment>
          <input
            key={colour.value}
            name="colour"
            type="radio"
            value={colour.value}
            checked={this.state.colour === colour.value}
            onChange={this.updateFormField}
          />
          <span>{colour.display}</span>
        </React.Fragment>
      );
      options.push(e);
    }
    return options;
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateFruits = (event) => {
    const { value } = event.target;
    // const currentValues = this.state[name];

    // const modifiedValues = currentValues.includes(value)
    //   ? currentValues.filter((element) => element !== value)
    //   : [...currentValues, value];

    // this.setState({
    //   [name]: modifiedValues,
    // });

    if (this.state.fruits.includes(value)) {
      const indexToDelete = this.state.fruits.findIndex((el) => el === value);

      const modified = [
        ...this.state.fruits.slice(0, indexToDelete),
        ...this.state.fruits.slice(indexToDelete + 1),
      ];

      this.setState({
        fruits: modified,
      });
    } else {
      const modified = [...this.state.fruits, value];
      this.setState({
        fruits: modified,
      });
    }
  };

  updateContact = (event) => {
    const { value } = event.target;
    if (this.state.contact.includes(value)) {
      const indexToDelete = this.state.contact.findIndex((el) => el === value);
      const modified = [
        ...this.state.contact.slice(0, indexToDelete),
        ...this.state.contact.slice(indexToDelete + 1),
      ];
      this.setState({
        contact: modified,
      });
    } else {
      const modified = [...this.state.contact, value];
      this.setState({
        contact: modified,
      });
    }
  };

  //   let currentValues = this.state[e.target.name];
  //   let modifiedValues;

  //   if (!currentValues.includes(e.target.value)) {
  //     modifiedValues = currentValues.filter((element) => {
  //       return element !== e.target.value;
  //     });
  //   }
  //   this.setState({
  //     [e.target.name]: modifiedValues,
  //   });

  render() {
    return (
      <>
        <h1>Survey Form</h1>
        <div className="container">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.updateFormField}
          />
        </div>
        <div className="container form-control">
          <label>Favourite Colour:</label>
          {this.renderColours()}
        </div>
        <div className="container">
          <label>Country:</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.updateFormField}
          >
            {this.state.all_countries.map((c) => (
              <option key={c.value} value={c.value}>
                {c.display}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Favourite Fruits:</label>
          {this.state.all_fruits.map((f) => (
            <React.Fragment>
              <input
                type="checkbox"
                key={f.value}
                name="fruits"
                value={f.value}
                checked={this.state.fruits.includes(f.value)}
                onChange={this.updateFruits}
              />
              <span>{f.display}</span>
            </React.Fragment>
          ))}
        </div>

        <div>
          <label>Contact Method: </label>
          <input
            type="checkbox"
            name="contact"
            value="email"
            checked={this.state.contact.includes("email")}
            onChange={this.updateContact}
          />
          <label>Email</label>
          <input
            type="checkbox"
            name="contact"
            value="phone"
            checked={this.state.contact.includes("phone")}
            onChange={this.updateContact}
          />
          <label>Phone</label>
          <input
            type="checkbox"
            name="contact"
            value="snail_mail"
            checked={this.state.contact.includes("snail_mail")}
            onChange={this.updateContact}
          />
          <label>Snail Mail</label>
        </div>
      </>
    );
  }
}

export default SurveyForm;
