const genrate = document.querySelector("#btn");
const jokes = document.getElementById("textarea");
const category = document.getElementById("category");
const emoji = document.getElementById("somthing");
let change = '';
function emg() {
    change = '&#12851';
    change += Math.floor((Math.random() * 7) + 1)
    console.log(change);
}



const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?type=single";
const getjokes = () => {
    jokes.classList.remove("fade")
    emg()
    emoji.innerHTML = change;

    fetch(url)
        .then(data =>
            data.json())
        .then(function (e) {
            jokes.textContent = `${e.joke}`
            category.textContent = `- ${e.category}`
            jokes.classList.add("fade")

            // console.log(e.joke)
            // console.log(e.category)
        })
};
genrate.addEventListener('click', getjokes);
getjokes()