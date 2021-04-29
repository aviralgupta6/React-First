import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFieldValue: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFieldValue } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="Search"
          placeholder="Search Monster..."
          onChange={(e) => this.setState({ searchFieldValue: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />;
      </div>
    );
  }
}
export default App;
