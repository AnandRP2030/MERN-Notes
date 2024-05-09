async function getData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();
    console.log("posts data", data);
}   
// getData()

async function postData(payload) {
    try {
        
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(payload)
        });
        let data = await res.json();
        console.log("After posting data: ", data);
    } catch (error) {

        console.error("error: ", error);
    }
}   


let obj = {
    title: "new title",
    body: 'new body',
    userId: 1
}

// postData(obj)


async function patchData(payload) {
    try {
        
        let res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(payload)
        });
        let data = await res.json();
        console.log("After patching data: ", data);
    } catch (error) {

        console.error("error: ", error);
    }
}   




let editedObj = {
    title: "edited title",
    body: 'edited body',
    userId: 1
}

// patchData(editedObj)


async function deleteData (id) {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
        })
        console.log("response after deleteing request", res)
        if (res.ok) {
            console.log("Data deleted successfully");
        }else {
            throw new Error(`Failed to delete data ${res.status} ${res.statusText}`)
        }

    } catch (error) {
        console.error("Error: ",error)
    }
}
deleteData(2)