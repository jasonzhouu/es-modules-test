import { getUsefulContents } from './file.js';

getUsefulContents('http://jsonplaceholder.typicode.com/posts/1',
    data => {
        document.getElementById("data").textContent = data.body;
    });
