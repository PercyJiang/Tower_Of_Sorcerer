document.getElementById('okBtn').onclick = function (e) {
    e.preventDefault()

    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value
    if (username && password) {

        // check if username already exist
        let repeat = false
        fetch('/getUsers', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            return response.json();
        }).then((users) => {
            for (let i = 0; i < users.length; i++) {
                if (username === users[i].username) {
                    repeat = true
                    break
                }
            }
            // register
            if (!repeat) {
                fetch('/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                }).then(() => {
                    console.log('register success')
                    location.href = '../index.html'
                })
            } else {
                document.getElementById('hint').innerHTML = 'Username already exists'
            }
        })
    } else {
        document.getElementById('hint').innerHTML = 'Please enter a username and password'
    }
}

document.getElementById('cancelBtn').onclick = function (e) {
    location.href = '../index.html'
    e.preventDefault()
}