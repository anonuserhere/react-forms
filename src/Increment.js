import React, { useState } from "react";

const Add = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Add this</button>
      </div>
    </>
  );
};

// class Add extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <div>
//           <p>Count: {this.state.count}</p>
//           <button onClick={this.increment}>Add this</button>
//         </div>
//       </>
//     );
//   }
// }

export default Add;
