const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const register = document.querySelector('#register');

const usersStorage = 'users-storage';

register.addEventListener('click', () => {
    let createdUsers = JSON.parse(localStorage.getItem(usersStorage));

    let taken = false;
    createdUsers &&
        createdUsers.forEach((user) => {
            if (user.email === email.value) {
                alert('this email already taken!');
                email.value = '';
                taken = true;
            }
        });

    if (taken) {
        return;
    }

    if (!createdUsers) createdUsers = [];

    localStorage.setItem(
        usersStorage,
        JSON.stringify([
            ...createdUsers.map((user) => {
                return { user, logined: false };
            }),
            {
                username: username.value,
                email: email.value,
                password: password.value,
                logined: true
            }
        ])
    );

    window.location.href = '/html/index.html';
});
