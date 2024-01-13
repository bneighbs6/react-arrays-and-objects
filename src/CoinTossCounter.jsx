function CoinTossCounter() {
    const handleClick = (value) => {
      // TBD
    };
    return (
      <section>
        <div>
          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
        </div>
      </section>
    );
  }

  export default CoinTossCounter