import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
const UseEffectHook = () => {
  const [count, setCount] = useState(2);
  const [newComp, setNewComp] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // component mount state
    getData(); // 5 sec

    return () => {
      console.log("Un mount handling")
    }
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
      let data = res.data;
      setUsers(data);
    } catch (error) {
      console.log("Error on get data", error);
    }
  };

  // useEffect(() => {
  //   console.log("Component mount");
  // }, []);


  useEffect(() => {
    console.log("inside 2nd useffect, current count", count);
  }, [count]);

  const inc = () => {
    setCount(count + 1);
  };

  const handleDelete = (index) => {
    const usersCopy = [...users];
    usersCopy.splice(index, 1);
    setUsers(usersCopy);
  };

  
  return (
    <div>
      <h1> Use Effect Hook</h1>
      <h1> count : {count}</h1>
      <button onClick={inc}>Count: {count}</button>
      <br />
      <br />
      <button
        onClick={() => {
          setNewComp(true);
        }}
      >
        {" "}
        Show New Comp
      </button>
      <button
        onClick={() => {
          setNewComp(false);
        }}
      >
        {" "}
        Show Old Comp
      </button>
      {/* conditional rendering  */}
      {newComp ? <NewComponent /> : <OldComponent />}
      {users.length === 0 && true && <h1> No users available</h1>}
      {users.length > 0 && (
        <div>
          <h1> Users List </h1>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Body</th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              {users.map((elem, index, arr) => {
                return (
                  <tr key={elem.id}>
                    <td>{index + 1}</td>
                    <td>{elem.title}</td>
                    <td>{elem.body}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDelete(index);
                        }}
                      >
                        {" "}
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};
export default UseEffectHook;

function OldComponent() {
  // using useEffect for handling unmount state.
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('inside useEffect', count)
    return () => {
      console.log("Old component unmounted.");
    };
  }, [count]);
  // every time count state change, cleanup execute, then mount again
  return (
    <div>
      <h1> Old Compoennt </h1>
      <h1 onClick={() => {
        setCount(count + 1)
      }}>Count {count}</h1>
    </div>
  );
}

function NewComponent() {
  useEffect(() => {
    return () => {
      console.log("New component unmounted.");
    };
  }, []);
  return (
    <div>
      <h1> New Component </h1>
    </div>
  );
}
