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
// real-estate section
 <!-- INTERNAL JS -->
  <script>
    document.getElementById("addAgencyBtn").addEventListener("click", function () {
      const container = document.getElementById("agencyContainer");

      const newCard = `
        <div class="col-md-4">
          <div class="agency-card shadow-sm p-4 text-center">
            <img src="https://via.placeholder.com/120" class="agency-logo mb-3" alt="Agency Logo">
            <h5 class="fw-bold mb-2">New Partner Agency</h5>
            <p class="text-muted">Description of the newly added partner agency.</p>
          </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", newCard);
    });
  </script>
