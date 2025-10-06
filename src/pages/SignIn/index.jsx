import { useState } from 'preact/hooks';

export function SignIn() {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Sign in attempt:', formData);
		// TODO: Implement actual sign in logic
		alert('Sign in functionality not yet implemented');
	};

	return (
		<div class="auth-container">
			<div class="auth-card">
				<h1>Sign In</h1>
				<p class="auth-subtitle">Welcome back! Please sign in to your account.</p>
				
				<form onSubmit={handleSubmit} class="auth-form">
					<div class="form-group">
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onInput={handleInputChange}
							placeholder="Enter your email"
							required
						/>
					</div>

					<div class="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onInput={handleInputChange}
							placeholder="Enter your password"
							required
						/>
					</div>

					<div class="form-options">
						<label class="checkbox-label">
							<input type="checkbox" />
							<span>Remember me</span>
						</label>
						<a href="#" class="forgot-password">Forgot password?</a>
					</div>

					<button type="submit" class="auth-button">
						Sign In
					</button>
				</form>

				<div class="auth-footer">
					<p>Don't have an account? <a href="/signup">Sign up here</a></p>
				</div>
			</div>
		</div>
	);
}
