
import React, { useState } from 'react';

function LoginPage() {
  const [step, setStep] = useState('roleSelect'); // 'roleSelect' or 'form'
  const [role, setRole] = useState(null);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep('form');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${role}\nEmail: ${formData.email}`);
    // Here you would typically handle actual login logic
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {step === 'roleSelect' && (
          <>
            <h2 style={styles.title}>Login as</h2>
            <div style={styles.options}>
              <button
                style={styles.roleButton}
                onClick={() => handleRoleSelect('Buyer')}
                aria-label="Login as Buyer"
              >
                Buyer
              </button>
              <button
                style={styles.roleButton}
                onClick={() => handleRoleSelect('Supplier')}
                aria-label="Login as Supplier"
              >
                Supplier
              </button>
            </div>
          </>
        )}

        {step === 'form' && (
          <>
            <h2 style={styles.title}>Login as {role}</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter your email"
                autoComplete="username"
              />

              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <button type="submit" style={styles.submitButton}>
                Log In
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep('roleSelect');
                  setRole(null);
                  setFormData({ email: '', password: '' });
                }}
                style={styles.backButton}
              >
                Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background:
      'linear-gradient(135deg, #0066ff, #00ccff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '1rem',
  },
  card: {
    background: 'white',
    borderRadius: 12,
    padding: '2rem 2rem 2.5rem',
    width: '320px',
    boxShadow: '0 8px 24px rgba(0, 102, 255, 0.3)',
    color: '#222',
  },
  title: {
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    textAlign: 'center',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  roleButton: {
    flex: '0 0 45%',
    backgroundColor: '#ff6600',
    border: 'none',
    borderRadius: '30px',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '0.75rem 0',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(255, 102, 0, 0.5)',
    transition: 'background-color 0.3s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  input: {
    padding: '0.75rem 1rem',
    marginBottom: '1.25rem',
    fontSize: '1rem',
    borderRadius: 8,
    border: '1.5px solid #ccc',
    outlineColor: '#0066ff',
    transition: 'border-color 0.3s ease',
  },
  submitButton: {
    backgroundColor: '#0066ff',
    color: 'white',
    padding: '0.85rem',
    border: 'none',
    borderRadius: '30px',
    fontWeight: '600',
    fontSize: '1.1rem',
    cursor: 'pointer',
    boxShadow: '0 6px 14px rgba(0, 102, 255, 0.6)',
    marginBottom: '0.8rem',
    transition: 'background-color 0.3s ease',
  },
  backButton: {
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '30px',
    padding: '0.85rem',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    color: '#555',
    boxShadow: 'none',
  },
};

export default LoginPage;


