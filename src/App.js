import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

let courses = [
  "Programowanie w C#",
  "Angular dla początkujących",
  "Kurs Django",
  "Kurs Xamarin",
];

// wypisuje listę kursów
function CourseList() {
  const listItems = courses.map((course) => <li>{course}</li>);
  return <ol>{listItems}</ol>;
}

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const numberAsNumber = Number(number);

  function handleSubmit(event) {
    if (numberAsNumber - 1 in courses) {
      event.preventDefault();
      console.log(name);
      console.log(courses[numberAsNumber - 1]);
    } else {
      event.preventDefault();
      console.log("Nieprawidłowy numer kursu");
    }
  }

  return (
    <div>
      <h2>Liczba kursów: {courses.length}</h2>
      <CourseList />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputText">Imie i nazwisko:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputText"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputNumber">Numer kursu:</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputNumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Zapisz do kursu
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
