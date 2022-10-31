let condition =true;
let helloword = new Promise((resolve) => {
    setTimeout(()=> {
        resolve("hello word");
    }, 2000);
});


async function massages(){
    const msg = await helloword;
    console.log(msg);
}

function ambildataUser(){
    fetch("https://reqres.in/api/users")
    .then(function(response){
        return response.json();
    })
    .then(function (users){
        console.log(users.data);
        
    });
}
console.log(ambildataUser());

async function ambildataUser(){
    await fetch("https://reqres.in//api/users")
    .then(function (response){
        return response.json();
    })
        .then(function(users){
            console.log(users.data);
        });
    }
console.log(ambildataUser());

axios.get("https://reqres.in/api/users.json") 
.then(response => (this.info = response.ambildataUser));