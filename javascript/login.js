const formContainer = document.getElementById('formContainer');
        const showRegister = document.getElementById('showRegister');
        const showLogin = document.getElementById('showLogin');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            formContainer.classList.add('active');
        });

        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            formContainer.classList.remove('active');
        });

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Add your login logic here
            alert('Login functionality would be connected to your backend here');
            console.log('Login:', { email, password });
        });

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('register-phone').value;
            const password = document.getElementById('register-password').value;
            
            // Add your registration logic here
            alert('Registration functionality would be connected to your backend here');
            console.log('Register:', { name, email, phone, password });
        });
