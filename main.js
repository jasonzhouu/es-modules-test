import { getUsefulContents } from './file.js';

getUsefulContents('https://jsonplaceholder.typicode.com/posts/1',
    data => {
        document.getElementById("data").textContent = data.body;
    });
