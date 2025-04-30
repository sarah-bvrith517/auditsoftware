document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Validation for matching passwords
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Check if user already exists
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      alert('Email already in use!');
      return;
    }
  
    // Create user object and store in localStorage
    const user = {
      name: name,
      email: email,
      password: password
    };
  
    localStorage.setItem(email, JSON.stringify(user));
    alert('Account created successfully!');
    window.location.href = 'login.html'; // Redirect to login after sign-up
  });
  