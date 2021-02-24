// In this activity you will display the title and body of all the posts on the page. You will write code to iterate through all the posts and display their title and description.

const usersUL = document.getElementById("usersUL");

for(let index=0; index < users.length; index++) {
    let user = users[index];

    const userItem = `
                    <li>
                        <b>${user.title}</b>
                        <i>${user.body}</i>
                    </li>
 
`
usersUL.insertAdjacentHTML('beforeend', userItem);

}