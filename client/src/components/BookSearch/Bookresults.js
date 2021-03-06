import React from "react";
import SaveBtn from "../SaveBtn";
import "./Booksearch.css";

function Bookresults(props) {
  return (
    <div className="wrapper">
      <ul className="resultsBoxes">
        {props.results.map(result => (
          <li className="eachResult p-5" key={result.id}>
            <SaveBtn savebook={props.savebook} title={result.volumeInfo.title} author={result.volumeInfo.authors} link={result.volumeInfo.previewLink} />
            <p className="bookTitle"><a href={result.volumeInfo.previewLink} className="bookLink">{result.volumeInfo.title}</a></p>
            <p className="bookAuthors"><strong>Authors: </strong>{result.volumeInfo.authors}</p>
            <p className="bookDesc"><strong>Brief: </strong>{result.volumeInfo.description}</p>
            <p className="bookCat"><strong>Categories: </strong>{result.volumeInfo.categories} <strong>Country: </strong> {result.saleInfo.country} <strong>Purchase Link: </strong> {result.saleInfo.buyLink}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookresults;
