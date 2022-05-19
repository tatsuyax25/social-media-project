let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

// Submit function
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

// Success and failure formValidation function
let formValidation = () => {
    if(input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

// Accepting and storing data
let data = {};

// acceptData pushes to data
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
};