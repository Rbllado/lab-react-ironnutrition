// import React, { Component } from "react";

// class SearchBar extends Component {
 
//     state = {
//         input: ""
//       };

//       handleSearch = event => {
//         const { value } = event.target;
//         this.props.filterFood(value);
//         this.setState({
//           input: value
//         });
//       };


//   render() {
//     return (
//       <div className="field has-addons">
//         <div className="control">
//           <input className="input" type="text" placeholder="Find a food"  value={this.state.input} onChange={this.handleSearch}/>
//           <input
          
//         />
//         </div>
//         {/* <div class="control">
//           <a class="button is-info" onChange={this.handleSearch} onClick={this.state.input}>
//             Search
//           </a>
//         </div> */}
//       </div>
//     );
//   }
// }

// export default SearchBar;






import React from "react";

class Search extends React.Component {
  
  handleSearch = event => {
    const { value } = event.target;
    this.props.filterFood(value);
    // this.setState({
    //   input: value
    // });
  };

  render() {
    return (
      <div>
        
        <input
          type="text"
          className="input"
          onChange={this.handleSearch} 
          placeholder="search..."
          /* value={this.state.input} */
        />
      </div>
    );
  }
}

export default Search;