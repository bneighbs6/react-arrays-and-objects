import React, {useState} from "react"

function CoinTossCounter() {
  // State for results array 
  const [results, setResults] = useState([]);


  // Handle click event
  const handleClick = (value) => {
    setResults([...results, value]);
    setCounts({...counts, [value]: counts[value] + 1,})
  };

  // List of results
  const list = results.map((result, index) => (
    <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
  ));


  // Handle Delete event
  const handleDeleteLast = () => {
    const list = results.slice(0, -1);
    const last = results[results.length - 1];

    setResults(list);
    if (last) {
      setCounts({...counts, [last]: counts[last] - 1,})
    }
  };

  // State for Counts object
  const [counts, setCounts] = useState({H: 0, T: 0})

  console.log(results);
  console.log(counts)
    return (
      <section>
        <div>
          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
          <button onClick={handleDeleteLast}>Delete Last</button>
        </div>
        <ul>{list}</ul>
        <ul>
          <li>Heads: {counts["H"]}</li>
          <li>Tails: {counts["T"]}</li>
        </ul>
      </section>
    );
  }

  export default CoinTossCounter