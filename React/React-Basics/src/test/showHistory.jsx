const ShowHistory = ({ statement }) => {
  console.log("stat", statement);
  return (
    <div>
      <h1> Show History </h1>
      <ul>
        {statement.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export { ShowHistory };
