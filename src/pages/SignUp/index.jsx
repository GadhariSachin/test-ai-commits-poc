import { useState } from 'preact/hooks';

export function SignUp() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First name is required';
		}

		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Last name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		}

		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match';
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm();
		
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		console.log('Sign up attempt:', formData);
		// TODO: Implement actual sign up logic
		alert('Sign up functionality not yet implemented');
	};

	return (
		<div class="signup-container">
			<div class="signup-card">
				<div class="signup-header">
					<div class="signup-icon">👋</div>
					<h1>Create Account</h1>
					<p class="signup-subtitle">Join us today and start your journey with TechCorp</p>
				</div>
				
				<form onSubmit={handleSubmit} class="signup-form">
					<div class="name-fields">
						<div class="input-field">
							<label htmlFor="firstName" class="field-label">First Name *</label>
							<div class="input-wrapper">
								<input
									type="text"
									id="firstName"
									name="firstName"
									value={formData.firstName}
									onInput={handleInputChange}
									placeholder="John"
									class={`form-input ${errors.firstName ? 'input-error' : ''}`}
									required
								/>
							</div>
							{errors.firstName && <span class="error-text">{errors.firstName}</span>}
						</div>

						<div class="input-field">
							<label htmlFor="lastName" class="field-label">Last Name *</label>
							<div class="input-wrapper">
								<input
									type="text"
									id="lastName"
									name="lastName"
									value={formData.lastName}
									onInput={handleInputChange}
									placeholder="Doe"
									class={`form-input ${errors.lastName ? 'input-error' : ''}`}
									required
								/>
							</div>
							{errors.lastName && <span class="error-text">{errors.lastName}</span>}
						</div>
					</div>

					<div class="input-field">
						<label htmlFor="email" class="field-label">Email Address *</label>
						<div class="input-wrapper">
							<span class="input-icon">📧</span>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onInput={handleInputChange}
								placeholder="john.doe@example.com"
								class={`form-input with-icon ${errors.email ? 'input-error' : ''}`}
								required
							/>
						</div>
						{errors.email && <span class="error-text">{errors.email}</span>}
					</div>

					<div class="password-fields">
						<div class="input-field">
							<label htmlFor="password" class="field-label">Password *</label>
							<div class="input-wrapper">
								<span class="input-icon">🔒</span>
								<input
									type="password"
									id="password"
									name="password"
									value={formData.password}
									onInput={handleInputChange}
									placeholder="Create a strong password"
									class={`form-input with-icon ${errors.password ? 'input-error' : ''}`}
									required
								/>
							</div>
							{errors.password && <span class="error-text">{errors.password}</span>}
						</div>

						<div class="input-field">
							<label htmlFor="confirmPassword" class="field-label">Confirm Password *</label>
							<div class="input-wrapper">
								<span class="input-icon">🔐</span>
								<input
									type="password"
									id="confirmPassword"
									name="confirmPassword"
									value={formData.confirmPassword}
									onInput={handleInputChange}
									placeholder="Confirm your password"
									class={`form-input with-icon ${errors.confirmPassword ? 'input-error' : ''}`}
									required
								/>
							</div>
							{errors.confirmPassword && <span class="error-text">{errors.confirmPassword}</span>}
						</div>
					</div>

					<div class="password-requirements">
						<h4>Password Requirements:</h4>
						<ul class="requirements-list">
							<li class={formData.password.length >= 6 ? 'requirement-met' : ''}>
								<span class="requirement-icon">{formData.password.length >= 6 ? '✓' : '○'}</span>
								At least 6 characters
							</li>
							<li class={/[A-Z]/.test(formData.password) ? 'requirement-met' : ''}>
								<span class="requirement-icon">{/[A-Z]/.test(formData.password) ? '✓' : '○'}</span>
								One uppercase letter
							</li>
							<li class={/[0-9]/.test(formData.password) ? 'requirement-met' : ''}>
								<span class="requirement-icon">{/[0-9]/.test(formData.password) ? '✓' : '○'}</span>
								One number
							</li>
						</ul>
					</div>

					<div class="terms-section">
						<label class="terms-checkbox">
							<input type="checkbox" required />
							<span class="checkmark"></span>
							<span class="terms-text">
								I agree to the <a href="#" class="terms-link">Terms of Service</a> and <a href="#" class="terms-link">Privacy Policy</a>
							</span>
						</label>
					</div>

					<button type="submit" class="signup-button">
						<span>Create Account</span>
						<span class="button-arrow">→</span>
					</button>
				</form>

				<div class="signup-footer">
					<div class="divider">
						<span>Already have an account?</span>
					</div>
					<a href="/signin" class="signin-link">Sign in here</a>
				</div>

				<div class="trust-indicators">
					<div class="trust-item">
						<span class="trust-icon">🔒</span>
						<span>Secure & Encrypted</span>
					</div>
					<div class="trust-item">
						<span class="trust-icon">⚡</span>
						<span>Quick Setup</span>
					</div>
					<div class="trust-item">
						<span class="trust-icon">🎯</span>
						<span>No Spam</span>
					</div>
				</div>
			</div>
		</div>
	);
}
