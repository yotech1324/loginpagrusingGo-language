    // Toggle between Login and Register forms
    document.getElementById('showLogin').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('formTitle').innerText = 'Login';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });

    document.getElementById('showRegister').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('formTitle').innerText = 'Register';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    });

    // Registration
    document.getElementById('registerButton').addEventListener('click', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        axios.post('http://localhost:3000/register', {
            name: name,
            email: email,
            password: password
        })
        .then(response => {
            window.location.href = 'success.html?message=' + encodeURIComponent(response.data.message);
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                alert(error.response.data.error);
            } else {
                alert('Registration failed: ' + error.message);
            }
        });
    });

    // Login
    document.getElementById('loginButton').addEventListener('click', function(event) {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        axios.post('http://localhost:3000/login', {
            email: email,
            password: password
        })
        .then(response => {
            window.location.href = 'success.html?message=' + encodeURIComponent(response.data.message);
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                alert(error.response.data.error);
            } else {
                alert('Login failed: ' + error.message);
            }
        });
    });