

const singlePost = (post)=>{


let posts = document.getElementById("posts");
let card = document.createElement('div');
let title = document.createElement('h2');
let body = document.createElement('p');
let hr = document.createElement('hr');


title.textContent = post.title;
body.textContent = post.body;

card.classList.add("single-post");

card.appendChild(title);
card.appendChild(body);
card.appendChild(hr);

posts.appendChild(card);

}

const retrievePosts = ()=>{
    let id = location.hash.slice(1);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => response.json())
    .then((json) => {
        const keys = Object.keys(json);
        keys.forEach(element => {
          singlePost(json[element])
        });
    });
  
}

window.onload = retrievePosts();