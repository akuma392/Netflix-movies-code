import React from "react";
import Autosuggest from "react-autosuggest";
import "./autoSuggestion.css";

const data = [
  { genre: "Action" },
  { genre: "Comedy" },
  { genre: "Horror" },
  { genre: "Thriller" },
  { genre: "Bollywood" },
  { genre: "Romance" },
  { genre: "Drama" },
  { genre: "TV" },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return data.filter((val) => regex.test(val.genre));
}

function getSuggestionValue(suggestion) {
  return suggestion.genre;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.genre}</span>;
}

class Autosuggestions extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState(
      {
        value: newValue,
      },
      () => {
        this.props.setSelectedGenre(this.state.value);
      }
    );
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type genre",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Autosuggestions;
