function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postItem(data))
};

function postItem(posts){
    const commentContainer = document.getElementById('comment-container');
    posts.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('inner-style');
        div.style.marginBottom = '10px';
        div.innerHTML = `
            <h1>ID: ${element.id}</h1>
            <h1>Title: <span class="text-2xl text-red-700">${element.title}</span></h1>
            <p>Body: ${element['body']}</p>
        `;
        commentContainer.appendChild(div);
    });
};

post();