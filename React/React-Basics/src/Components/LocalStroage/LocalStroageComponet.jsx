import React, { useState, useEffect } from "react";

const LocalStorageExample = () => {
  // State to store the data
  const [data, setData] = useState("");

  // Effect to load data from localStorage on component mount
  useEffect(() => {
    var myData2 = localStorage.getItem("active-user") || null;

    console.log("my data");
    if (myData2) {
      const storedData = JSON.parse(myData2);
      setData(storedData);
    }
    // Get data from localStorage when the component mounts

    if (!storedData) {
      setData(storedData);
    }
  }, []);

  // Function to handle input change and update the data state
  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  // Function to save data to localStorage
  const saveData = () => {
    // Convert the data to a JSON string before saving to localStorage
    const dataToSave = JSON.stringify(data);
    console.log("dataToSave", dataToSave);
    // Save data to localStorage
    localStorage.setItem("active-user", dataToSave);

    // Optionally, you can notify the user that the data has been saved
    alert("Data saved!");
  };

  return (
    <div>
      <label>
        Enter Data:
        <input type="text" value={data} onChange={handleInputChange} />
      </label>
      <button onClick={saveData}>Save Data</button>
      <div>
        <strong>Stored Data:</strong> {data}
      </div>
    </div>
  );
};

export default LocalStorageExample;
