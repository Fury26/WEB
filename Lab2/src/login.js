const email = document.querySelector('#email');
const password = document.querySelector('#password');
const login = document.querySelector('#login');

const usersStorage = 'users-storage';

login.addEventListener('click', () => {
    const createdUsers = JSON.parse(localStorage.getItem(usersStorage));

    createdUsers &&
        createdUsers.forEach((user) => {
            if (user.email == email.innerHTML && user.password == password.innerHTML) {
                localStorage.setItem(
                    usersStorage,
                    JSON.stringify([
                        ...createdUsers
                            .filter((u) => u.email !== email.innerHTML)
                            .map((u) => ({ ...u, logined: false })),
                        {
                            ...user,
                            logined: true
                        }
                    ])
                );

                window.location.href = '/html/index.html';
            }
        });
    alert('Wrong password or input');
});
