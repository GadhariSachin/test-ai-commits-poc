import { useState } from 'preact/hooks';

export function Profile() {
	const [activeTab, setActiveTab] = useState('personal');
	const [profileData, setProfileData] = useState({
		firstName: 'Sarah',
		lastName: 'Johnson',
		email: 'sarah.johnson@techcorp.com',
		phone: '+1 (555) 123-4567',
		jobTitle: 'CEO & Founder',
		company: 'TechCorp',
		bio: 'Passionate technology leader with 15+ years of experience in building innovative solutions.',
		location: 'San Francisco, CA',
		website: 'https://sarahjohnson.dev',
		linkedin: 'https://linkedin.com/in/sarahjohnson',
		github: 'https://github.com/sarahjohnson'
	});

	const [securityData, setSecurityData] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
		twoFactorEnabled: true,
		emailNotifications: true,
		smsNotifications: false
	});

	const [preferencesData, setPreferencesData] = useState({
		theme: 'light',
		language: 'en',
		timezone: 'America/Los_Angeles',
		dateFormat: 'MM/DD/YYYY',
		emailDigest: 'weekly',
		marketingEmails: true
	});

	const handleProfileChange = (e) => {
		const { name, value } = e.target;
		setProfileData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSecurityChange = (e) => {
		const { name, value, type, checked } = e.target;
		setSecurityData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	const handlePreferencesChange = (e) => {
		const { name, value, type, checked } = e.target;
		setPreferencesData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Profile updated:', { profileData, securityData, preferencesData });
		alert('Profile updated successfully!');
	};

	const tabs = [
		{ id: 'personal', name: 'Personal Info', icon: '👤' },
		{ id: 'security', name: 'Security', icon: '🔒' },
		{ id: 'preferences', name: 'Preferences', icon: '⚙️' },
		{ id: 'billing', name: 'Billing', icon: '💳' }
	];

	const recentActivity = [
		{ action: 'Password changed', date: '2024-03-15', ip: '192.168.1.1' },
		{ action: 'Profile updated', date: '2024-03-10', ip: '192.168.1.1' },
		{ action: 'Login from new device', date: '2024-03-08', ip: '203.0.113.1' },
		{ action: 'Two-factor authentication enabled', date: '2024-03-05', ip: '192.168.1.1' }
	];

	const billingHistory = [
		{ id: 'INV-001', date: '2024-03-01', amount: '$99.00', status: 'Paid', plan: 'Pro Plan' },
		{ id: 'INV-002', date: '2024-02-01', amount: '$99.00', status: 'Paid', plan: 'Pro Plan' },
		{ id: 'INV-003', date: '2024-01-01', amount: '$99.00', status: 'Paid', plan: 'Pro Plan' }
	];

	return (
		<div class="page-container">
			{/* Profile Header */}
			<section class="profile-header">
				<div class="container">
					<div class="profile-banner">
						<div class="profile-avatar">
							<img 
								src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face" 
								alt="Profile"
							/>
							<button class="avatar-edit">📷</button>
						</div>
						<div class="profile-info">
							<h1>{profileData.firstName} {profileData.lastName}</h1>
							<p class="profile-title">{profileData.jobTitle} at {profileData.company}</p>
							<p class="profile-location">📍 {profileData.location}</p>
							<div class="profile-stats">
								<div class="stat">
									<span class="stat-value">15</span>
									<span class="stat-label">Projects</span>
								</div>
								<div class="stat">
									<span class="stat-value">42</span>
									<span class="stat-label">Team Members</span>
								</div>
								<div class="stat">
									<span class="stat-value">3.2k</span>
									<span class="stat-label">Followers</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Profile Navigation */}
			<section class="profile-nav">
				<div class="container">
					<div class="tab-navigation">
						{tabs.map(tab => (
							<button
								key={tab.id}
								class={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
								onClick={() => setActiveTab(tab.id)}
							>
								<span class="tab-icon">{tab.icon}</span>
								{tab.name}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Profile Content */}
			<section class="profile-content">
				<div class="container">
					<form onSubmit={handleSubmit}>
						{/* Personal Info Tab */}
						{activeTab === 'personal' && (
							<div class="tab-content">
								<div class="content-grid">
									<div class="main-form">
										<h2>Personal Information</h2>
										<div class="form-row">
											<div class="form-group">
												<label htmlFor="firstName">First Name</label>
												<input
													type="text"
													id="firstName"
													name="firstName"
													value={profileData.firstName}
													onInput={handleProfileChange}
												/>
											</div>
											<div class="form-group">
												<label htmlFor="lastName">Last Name</label>
												<input
													type="text"
													id="lastName"
													name="lastName"
													value={profileData.lastName}
													onInput={handleProfileChange}
												/>
											</div>
										</div>

										<div class="form-row">
											<div class="form-group">
												<label htmlFor="email">Email Address</label>
												<input
													type="email"
													id="email"
													name="email"
													value={profileData.email}
													onInput={handleProfileChange}
												/>
											</div>
											<div class="form-group">
												<label htmlFor="phone">Phone Number</label>
												<input
													type="tel"
													id="phone"
													name="phone"
													value={profileData.phone}
													onInput={handleProfileChange}
												/>
											</div>
										</div>

										<div class="form-row">
											<div class="form-group">
												<label htmlFor="jobTitle">Job Title</label>
												<input
													type="text"
													id="jobTitle"
													name="jobTitle"
													value={profileData.jobTitle}
													onInput={handleProfileChange}
												/>
											</div>
											<div class="form-group">
												<label htmlFor="company">Company</label>
												<input
													type="text"
													id="company"
													name="company"
													value={profileData.company}
													onInput={handleProfileChange}
												/>
											</div>
										</div>

										<div class="form-group">
											<label htmlFor="bio">Bio</label>
											<textarea
												id="bio"
												name="bio"
												value={profileData.bio}
												onInput={handleProfileChange}
												rows="4"
											></textarea>
										</div>

										<div class="form-group">
											<label htmlFor="location">Location</label>
											<input
												type="text"
												id="location"
												name="location"
												value={profileData.location}
												onInput={handleProfileChange}
											/>
										</div>

										<h3>Social Links</h3>
										<div class="form-group">
											<label htmlFor="website">Website</label>
											<input
												type="url"
												id="website"
												name="website"
												value={profileData.website}
												onInput={handleProfileChange}
											/>
										</div>

										<div class="form-row">
											<div class="form-group">
												<label htmlFor="linkedin">LinkedIn</label>
												<input
													type="url"
													id="linkedin"
													name="linkedin"
													value={profileData.linkedin}
													onInput={handleProfileChange}
												/>
											</div>
											<div class="form-group">
												<label htmlFor="github">GitHub</label>
												<input
													type="url"
													id="github"
													name="github"
													value={profileData.github}
													onInput={handleProfileChange}
												/>
											</div>
										</div>
									</div>

									<div class="sidebar-info">
										<div class="info-card">
											<h3>Profile Completion</h3>
											<div class="completion-bar">
												<div class="completion-fill" style="width: 85%"></div>
											</div>
											<p>85% Complete</p>
											<ul class="completion-tips">
												<li>✅ Add profile photo</li>
												<li>✅ Fill basic information</li>
												<li>✅ Add social links</li>
												<li>❌ Verify phone number</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Security Tab */}
						{activeTab === 'security' && (
							<div class="tab-content">
								<div class="content-grid">
									<div class="main-form">
										<h2>Security Settings</h2>
										
										<div class="security-section">
											<h3>Change Password</h3>
											<div class="form-group">
												<label htmlFor="currentPassword">Current Password</label>
												<input
													type="password"
													id="currentPassword"
													name="currentPassword"
													value={securityData.currentPassword}
													onInput={handleSecurityChange}
												/>
											</div>
											<div class="form-row">
												<div class="form-group">
													<label htmlFor="newPassword">New Password</label>
													<input
														type="password"
														id="newPassword"
														name="newPassword"
														value={securityData.newPassword}
														onInput={handleSecurityChange}
													/>
												</div>
												<div class="form-group">
													<label htmlFor="confirmPassword">Confirm Password</label>
													<input
														type="password"
														id="confirmPassword"
														name="confirmPassword"
														value={securityData.confirmPassword}
														onInput={handleSecurityChange}
													/>
												</div>
											</div>
										</div>

										<div class="security-section">
											<h3>Two-Factor Authentication</h3>
											<div class="security-option">
												<label class="checkbox-label">
													<input
														type="checkbox"
														name="twoFactorEnabled"
														checked={securityData.twoFactorEnabled}
														onChange={handleSecurityChange}
													/>
													<span>Enable two-factor authentication</span>
												</label>
												<p>Add an extra layer of security to your account</p>
											</div>
										</div>

										<div class="security-section">
											<h3>Notification Preferences</h3>
											<div class="security-option">
												<label class="checkbox-label">
													<input
														type="checkbox"
														name="emailNotifications"
														checked={securityData.emailNotifications}
														onChange={handleSecurityChange}
													/>
													<span>Email notifications for security events</span>
												</label>
											</div>
											<div class="security-option">
												<label class="checkbox-label">
													<input
														type="checkbox"
														name="smsNotifications"
														checked={securityData.smsNotifications}
														onChange={handleSecurityChange}
													/>
													<span>SMS notifications for security events</span>
												</label>
											</div>
										</div>
									</div>

									<div class="sidebar-info">
										<div class="info-card">
											<h3>Recent Activity</h3>
											<div class="activity-list">
												{recentActivity.map((activity, index) => (
													<div key={index} class="activity-item">
														<div class="activity-info">
															<p>{activity.action}</p>
															<span>{activity.date}</span>
														</div>
														<span class="activity-ip">{activity.ip}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Preferences Tab */}
						{activeTab === 'preferences' && (
							<div class="tab-content">
								<div class="main-form">
									<h2>Preferences</h2>
									
									<div class="preferences-section">
										<h3>Appearance</h3>
										<div class="form-row">
											<div class="form-group">
												<label htmlFor="theme">Theme</label>
												<select
													id="theme"
													name="theme"
													value={preferencesData.theme}
													onChange={handlePreferencesChange}
												>
													<option value="light">Light</option>
													<option value="dark">Dark</option>
													<option value="auto">Auto</option>
												</select>
											</div>
											<div class="form-group">
												<label htmlFor="language">Language</label>
												<select
													id="language"
													name="language"
													value={preferencesData.language}
													onChange={handlePreferencesChange}
												>
													<option value="en">English</option>
													<option value="es">Spanish</option>
													<option value="fr">French</option>
													<option value="de">German</option>
												</select>
											</div>
										</div>
									</div>

									<div class="preferences-section">
										<h3>Regional Settings</h3>
										<div class="form-row">
											<div class="form-group">
												<label htmlFor="timezone">Timezone</label>
												<select
													id="timezone"
													name="timezone"
													value={preferencesData.timezone}
													onChange={handlePreferencesChange}
												>
													<option value="America/Los_Angeles">Pacific Time</option>
													<option value="America/Denver">Mountain Time</option>
													<option value="America/Chicago">Central Time</option>
													<option value="America/New_York">Eastern Time</option>
												</select>
											</div>
											<div class="form-group">
												<label htmlFor="dateFormat">Date Format</label>
												<select
													id="dateFormat"
													name="dateFormat"
													value={preferencesData.dateFormat}
													onChange={handlePreferencesChange}
												>
													<option value="MM/DD/YYYY">MM/DD/YYYY</option>
													<option value="DD/MM/YYYY">DD/MM/YYYY</option>
													<option value="YYYY-MM-DD">YYYY-MM-DD</option>
												</select>
											</div>
										</div>
									</div>

									<div class="preferences-section">
										<h3>Email Preferences</h3>
										<div class="form-group">
											<label htmlFor="emailDigest">Email Digest Frequency</label>
											<select
												id="emailDigest"
												name="emailDigest"
												value={preferencesData.emailDigest}
												onChange={handlePreferencesChange}
											>
												<option value="daily">Daily</option>
												<option value="weekly">Weekly</option>
												<option value="monthly">Monthly</option>
												<option value="never">Never</option>
											</select>
										</div>
										<div class="security-option">
											<label class="checkbox-label">
												<input
													type="checkbox"
													name="marketingEmails"
													checked={preferencesData.marketingEmails}
													onChange={handlePreferencesChange}
												/>
												<span>Receive marketing emails and updates</span>
											</label>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Billing Tab */}
						{activeTab === 'billing' && (
							<div class="tab-content">
								<div class="content-grid">
									<div class="main-form">
										<h2>Billing & Subscription</h2>
										
										<div class="current-plan">
											<h3>Current Plan</h3>
											<div class="plan-card">
												<div class="plan-info">
													<h4>Pro Plan</h4>
													<p class="plan-price">$99.00/month</p>
													<p>Next billing date: April 1, 2024</p>
												</div>
												<div class="plan-actions">
													<button class="upgrade-btn">Upgrade Plan</button>
													<button class="cancel-btn">Cancel Subscription</button>
												</div>
											</div>
										</div>

										<div class="billing-history">
											<h3>Billing History</h3>
											<div class="billing-table">
												<div class="table-header">
													<span>Invoice</span>
													<span>Date</span>
													<span>Amount</span>
													<span>Status</span>
													<span>Actions</span>
												</div>
												{billingHistory.map(bill => (
													<div key={bill.id} class="table-row">
														<span>{bill.id}</span>
														<span>{bill.date}</span>
														<span>{bill.amount}</span>
														<span class="status-paid">{bill.status}</span>
														<span>
															<button class="download-btn">📄 Download</button>
														</span>
													</div>
												))}
											</div>
										</div>
									</div>

									<div class="sidebar-info">
										<div class="info-card">
											<h3>Payment Method</h3>
											<div class="payment-method">
												<div class="card-info">
													<span class="card-type">💳 Visa</span>
													<span class="card-number">**** **** **** 4242</span>
													<span class="card-expiry">Expires 12/25</span>
												</div>
												<button class="update-payment-btn">Update</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Save Button */}
						<div class="form-actions">
							<button type="submit" class="save-btn">Save Changes</button>
							<button type="button" class="cancel-btn">Cancel</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
