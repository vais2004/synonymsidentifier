import React, { useState } from "react";
import "./styles.css";

const synonymsidentifier = {
  happy: "Euphoric😃",
  sad: "distressing😞",
  angry: "displeased😡",
  good: "fine😇",
  brave: "bold😎",
  intelligent: "Clever🧐",
  afraid: "scared😱",
  rude: "impolite😒",
  silent: "quite🤫"
};

const synonyms = Object.keys(synonymsidentifier);

export default function App() {
  const [synonym, setSynonym] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputSynonym = event.target.value;
    setSynonym(inputSynonym);

    if (inputSynonym in synonymsidentifier) {
      setMeaning(synonymsidentifier[inputSynonym]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function synonymClickHandler(inputSynonym) {
    setMeaning(synonymsidentifier[inputSynonym]);
  }

  return (
    <div className="App">
      <h1>✍️💎synonyms of diff moods!💎✍️</h1>
      <input
        onChange={changeHandler}
        value={synonym}
        placeholder={"Search your special character"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {synonym} </h2> {}
      <h3> {meaning} </h3> {}
      {synonyms.map((synonym) => (
        <span
          onClick={() => synonymClickHandler(synonym)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {synonym}{" "}
        </span>
      ))}
      <br />
      <br />
      <br />
      <h1>✍️</h1>
    </div>
  );
}
