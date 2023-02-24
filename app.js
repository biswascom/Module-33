function comments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => comment(data))
};

function comment(commentAll){
    const commentContainer = document.getElementById('comment-container');
    for(const comment of commentAll){
        const div = document.createElement('div');
        div.innerHTML = `
            <h3 class="font-bold">Id: ${comment.id}</h3>
            <h1 class="text-xl">Name: ${comment.name}</h1>
            <p class="mb-3">Comments: ${comment.body}</p>
        `;
        commentContainer.appendChild(div);
    };
};