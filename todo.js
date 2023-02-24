document.getElementById('btn-submit').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => todo(data))
});

function todo(lists){
    const container = document.getElementById('comment-container');
    for(const list of lists){
        const div = document.createElement('div');
        div.classList.add('todo');
        div.style.marginBottom = '5px';
        div.innerHTML = `
            <h3>Id: ${list.id}</h3>
            <h1 class="text-xl text-red-700">Title: ${list.title}</h1>
            <h1>Status: ${list.completed === true ? 'Completed' : 'Incomplete'}</h1>
        `;
        container.appendChild(div);
    }
}