document.getElementById('loginBtn').onclick = function (e) {
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()).then(res => {
        console.log(res)
        if (res.status) {
            console.log('login success')
            location.href = './game/game.html'
        } else {
            document.getElementById('hint').innerHTML = 'Invalid Input'
        }
    }).catch(err => {
        console.log(err)
    })
    e.preventDefault()
}

document.getElementById('registerBtn').onclick = function (e) {
    location.href = './register/register.html'
    console.log('hi')
    e.preventDefault()
}