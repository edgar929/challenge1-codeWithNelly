const retrieveUsers=(user)=>{
   let div = document.getElementById("users");
   let userDiv = document.createElement('div');
   let card = document.createElement('div');
   let btnDiv = document.createElement('div');
   let h3 = document.createElement('h3');
   let p = document.createElement('p');
   const button = document.createElement("button");

   button.textContent = "Get User's Posts";
   h3.textContent = user.name;
   p.textContent = user.email;

   card.classList.add("user-card")
   btnDiv.classList.add("btn-section")
   
   userDiv.appendChild(h3);
   userDiv.appendChild(p);
   
   btnDiv.appendChild(button);

   card.appendChild(userDiv);
   card.appendChild(btnDiv);

   div.appendChild(card);

    button.addEventListener('click', (e)=>{
       e.stopPropagation();
       window.location.href=`html/posts.html#${user.id}`
    })

 }

 const getUserPosts = ()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => {
      return response.json()
       
   })
   .then((users) => {
       const keys = Object.keys(users);
             keys.forEach(element => {
               retrieveUsers(users[element])
             });
   });
 }