import React, { Component } from "react";
import Header from "./components/header/Header";
import API from "./utils/API";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";
import Moment from 'moment';
import  {sortItems}  from "./utils/sort";

class App extends Component {
  state = {
    search: "",
    results: [],
    filteredresults:[],
    sortAsc:true,
    error: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        var resultItems= res.data.results.map(data=>{return {Image:data.picture.medium, Name:data.name.first+' '+data.name.last,Phone:data.phone,Email:data.email, DOB:Moment(data.dob.date).format('MM-DD-YYYY')  }});
        this.setState({ results:resultItems,filteredresults:sortItems(resultItems,this.state.sortAsc) });
      }
      )
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
   
    this.setState({filteredresults: sortItems( this.state.results
      .filter(item => {
        let values = Object.values(item).join("").toLowerCase()
        return values.indexOf(event.target.value.toLowerCase()) !== -1;
    }),this.state.sortAsc)
    });
   
  };

  handleSortChange = event => {
    // this.setState({ search: event.target.value });
    var sortAsc=!this.state.sortAsc;
    this.setState({sortAsc: sortAsc});
    this.setState({filteredresults:sortItems( this.state.filteredresults,sortAsc)});
   };
 

  render() {
  return (
    <div>
    <Header />
    <SearchForm   
            handleInputChange={this.handleInputChange}
           />
             <SearchResults handleSortChange={this.handleSortChange} results={this.state.filteredresults} sortAsc={this.state.sortAsc} />
    </div>
  );

}
}

export default App;