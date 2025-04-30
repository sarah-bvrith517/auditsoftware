document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    const userData = localStorage.getItem(email);
  
    if (!userData) {
      alert('No account found with this email.');
      return;
    }
  
    const user = JSON.parse(userData);
  
    if (user.password === password) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'homepage.html'; // ✅ Redirect to homepage
    } else {
      alert('Invalid email or password.');
    }
  });
  