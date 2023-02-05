const link = 'https://jsonplaceholder.typicode.com/';

async function userLogin(user, pass) {
    const api = link + `users?username=${user}`;

    try {
        const res = await (await fetch(api)).json();

        if (res[0].username === user) {
            return { token: 'auth', profile: res[0] };
        }
    } catch (error) {}
}

async function userSignup(user, pass, email) {
    const api = link + 'users';

    let data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: user,
            username: 'Delphine',
            password: pass,
            email: email,
            app: 'ver11.1.fireantreactnative',
        }),
    };

    try {
        const res = await fetch(api, data);

        if (res.ok) {
            const data = await res.json();

            return { token: 'auth-signup', profile: data };
        }
    } catch (error) {}
}

//
async function getProfile(user) {
    const api = link + `users?username=${user}`;

    try {
        const res = await (await fetch(api)).json();

        if (res[0].username === user) {
            return { token: 'auth', profile: res[0] };
        }
    } catch (error) {}
}

export { userLogin, userSignup, getProfile };
