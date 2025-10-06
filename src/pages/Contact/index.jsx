import { useState } from 'preact/hooks';

export function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		subject: '',
		message: '',
		inquiryType: 'general'
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Contact form submitted:', formData);
		setIsSubmitted(true);
		// Reset form after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({
				name: '',
				email: '',
				company: '',
				subject: '',
				message: '',
				inquiryType: 'general'
			});
		}, 3000);
	};

	const contactInfo = [
		{
			icon: "📍",
			title: "Visit Us",
			details: ["123 Tech Street", "San Francisco, CA 94105", "United States"]
		},
		{
			icon: "📞",
			title: "Call Us",
			details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Mon-Fri 9AM-6PM PST"]
		},
		{
			icon: "✉️",
			title: "Email Us",
			details: ["hello@techcorp.com", "support@techcorp.com", "careers@techcorp.com"]
		}
	];

	const officeHours = [
		{ day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
		{ day: "Saturday", hours: "10:00 AM - 4:00 PM" },
		{ day: "Sunday", hours: "Closed" }
	];

	if (isSubmitted) {
		return (
			<div class="page-container">
				<div class="success-message">
					<div class="success-icon">✅</div>
					<h2>Thank You!</h2>
					<p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
				</div>
			</div>
		);
	}

	return (
		<div class="page-container">
			{/* Hero Section */}
			<section class="hero-section">
				<div class="hero-content">
					<h1>Contact Us</h1>
					<p class="hero-subtitle">
						Get in touch with our team. We'd love to hear from you!
					</p>
				</div>
			</section>

			{/* Contact Form and Info */}
			<section class="content-section">
				<div class="container">
					<div class="contact-grid">
						{/* Contact Form */}
						<div class="contact-form-section">
							<h2>Send us a Message</h2>
							<form onSubmit={handleSubmit} class="contact-form">
								<div class="form-row">
									<div class="form-group">
										<label htmlFor="name">Full Name *</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onInput={handleInputChange}
											placeholder="Your full name"
											required
										/>
									</div>
									<div class="form-group">
										<label htmlFor="email">Email Address *</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onInput={handleInputChange}
											placeholder="your.email@example.com"
											required
										/>
									</div>
								</div>

								<div class="form-row">
									<div class="form-group">
										<label htmlFor="company">Company</label>
										<input
											type="text"
											id="company"
											name="company"
											value={formData.company}
											onInput={handleInputChange}
											placeholder="Your company name"
										/>
									</div>
									<div class="form-group">
										<label htmlFor="inquiryType">Inquiry Type</label>
										<select
											id="inquiryType"
											name="inquiryType"
											value={formData.inquiryType}
											onChange={handleInputChange}
										>
											<option value="general">General Inquiry</option>
											<option value="support">Technical Support</option>
											<option value="sales">Sales</option>
											<option value="partnership">Partnership</option>
											<option value="careers">Careers</option>
										</select>
									</div>
								</div>

								<div class="form-group">
									<label htmlFor="subject">Subject *</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onInput={handleInputChange}
										placeholder="Brief description of your inquiry"
										required
									/>
								</div>

								<div class="form-group">
									<label htmlFor="message">Message *</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onInput={handleInputChange}
										placeholder="Tell us more about your inquiry..."
										rows="6"
										required
									></textarea>
								</div>

								<button type="submit" class="submit-button">
									Send Message
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div class="contact-info-section">
							<h2>Get in Touch</h2>
							<p>
								We're here to help! Reach out to us through any of the following channels.
							</p>

							<div class="contact-methods">
								{contactInfo.map((info, index) => (
									<div key={index} class="contact-method">
										<div class="contact-icon">{info.icon}</div>
										<div class="contact-details">
											<h3>{info.title}</h3>
											{info.details.map((detail, i) => (
												<p key={i}>{detail}</p>
											))}
										</div>
									</div>
								))}
							</div>

							{/* Office Hours */}
							<div class="office-hours">
								<h3>Office Hours</h3>
								{officeHours.map((schedule, index) => (
									<div key={index} class="hours-row">
										<span class="day">{schedule.day}</span>
										<span class="hours">{schedule.hours}</span>
									</div>
								))}
							</div>

							{/* Map Placeholder */}
							<div class="map-placeholder">
								<div class="map-content">
									<h4>📍 Our Location</h4>
									<p>Interactive map coming soon</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section class="faq-section">
				<div class="container">
					<h2>Frequently Asked Questions</h2>
					<div class="faq-grid">
						<div class="faq-item">
							<h3>How quickly do you respond to inquiries?</h3>
							<p>We typically respond to all inquiries within 24 hours during business days.</p>
						</div>
						<div class="faq-item">
							<h3>Do you offer technical support?</h3>
							<p>Yes! Our technical support team is available 24/7 for all customers.</p>
						</div>
						<div class="faq-item">
							<h3>Can I schedule a demo?</h3>
							<p>Absolutely! Contact our sales team to schedule a personalized demo.</p>
						</div>
						<div class="faq-item">
							<h3>Are you hiring?</h3>
							<p>We're always looking for talented individuals. Check our careers page!</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
