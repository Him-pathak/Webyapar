// alert("hello guyzz");

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = 'http://localhost:8000/api/auth/login';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            // Assuming the server returns a token upon successful login
            const token = data.token;

            // You can store the token in localStorage or a cookie for subsequent requests
            localStorage.setItem('token', token);

            alert('Login successful');
        } else {
            const errorData = await response.json();
            alert(`Login failed: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Something went wrong during login');
    }
}