// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(vada => vada.json())
//     .then(API => {
//         API.forEach(item => {
//             let newText = document.createElement("h2")
//             let newaText = document.createElement("h3")
//             newaText.textContent = item.username;
//             document.body.append(newaText)
//             newText.textContent = item.name;
//             document.body.append(newText)
//         });
//     })

//     .catch(xato => console.log("xato"))






fetch("https://jsonplaceholder.typicode.com/users") 
.then(vada => vada.json())
.then(API => {
    API.forEach(item => {
        let wrapper = document.createElement("div");
        let newText = document.createElement("h2");
        let userText = document.createElement("h3");
        let usersText = document.createElement("p")
        let phone = document.createElement("p")
        let website = document.createElement("p")
        website.textContent = item.website;
        phone.textContent = item.phone
        usersText.textContent = item.email;
        wrapper.className = "box"
        wrapper.append(newText,userText,usersText,phone,website)
        // wrapper.style.width = "300px"
        // wrapper.style.height = "300px"
        // wrapper.style.backgroundColor = "red"
        
        userText.textContent = item.username;
        newText.textContent = item.name;
    
        document.body.append(wrapper)
        
    });
})
.catch(xato => console.log("xato"))