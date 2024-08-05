console.log("test");

const apiLink = "https://jsonplaceholder.typicode.com/posts/1";

function getData() {
  return new Promise((resolve, reject) => {
    try {
      fetch(apiLink).then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          res.json().then((data) => {
            resolve(data);
          });
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
getData()
  .then((res) => {
    console.log("response", res);
  })
  .catch((err) => {
    console.log("checking .. ", err);
  });
