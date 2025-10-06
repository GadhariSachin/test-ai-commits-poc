import { useState } from 'preact/hooks';

export function Services() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const services = [
		{
			id: 1,
			title: "Web Development",
			category: "development",
			description: "Custom web applications built with modern technologies and best practices.",
			features: ["React/Preact", "Node.js Backend", "Responsive Design", "SEO Optimized"],
			price: "Starting at $5,000",
			duration: "4-8 weeks",
			icon: "💻"
		},
		{
			id: 2,
			title: "Mobile App Development",
			category: "development",
			description: "Native and cross-platform mobile applications for iOS and Android.",
			features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
			price: "Starting at $8,000",
			duration: "6-12 weeks",
			icon: "📱"
		},
		{
			id: 3,
			title: "UI/UX Design",
			category: "design",
			description: "User-centered design solutions that enhance user experience and engagement.",
			features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
			price: "Starting at $3,000",
			duration: "2-6 weeks",
			icon: "🎨"
		},
		{
			id: 4,
			title: "Cloud Infrastructure",
			category: "infrastructure",
			description: "Scalable cloud solutions for modern applications and data management.",
			features: ["AWS/Azure/GCP", "DevOps", "Auto-scaling", "Security"],
			price: "Starting at $2,000/month",
			duration: "Ongoing",
			icon: "☁️"
		},
		{
			id: 5,
			title: "Data Analytics",
			category: "analytics",
			description: "Transform your data into actionable insights with advanced analytics.",
			features: ["Data Visualization", "Machine Learning", "Reporting", "Real-time Analytics"],
			price: "Starting at $4,000",
			duration: "3-8 weeks",
			icon: "📊"
		},
		{
			id: 6,
			title: "Digital Marketing",
			category: "marketing",
			description: "Comprehensive digital marketing strategies to grow your online presence.",
			features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
			price: "Starting at $1,500/month",
			duration: "Ongoing",
			icon: "📈"
		}
	];

	const categories = [
		{ id: 'all', name: 'All Services' },
		{ id: 'development', name: 'Development' },
		{ id: 'design', name: 'Design' },
		{ id: 'infrastructure', name: 'Infrastructure' },
		{ id: 'analytics', name: 'Analytics' },
		{ id: 'marketing', name: 'Marketing' }
	];

	const filteredServices = selectedCategory === 'all' 
		? services 
		: services.filter(service => service.category === selectedCategory);

	const testimonials = [
		{
			name: "Jennifer Walsh",
			company: "StartupCo",
			text: "TechCorp delivered an amazing web application that exceeded our expectations. The team was professional and responsive throughout the project.",
			rating: 5
		},
		{
			name: "Robert Chen",
			company: "Enterprise Ltd",
			text: "Their cloud infrastructure solution helped us scale our business efficiently. Highly recommended for any growing company.",
			rating: 5
		},
		{
			name: "Maria Garcia",
			company: "Creative Agency",
			text: "The UI/UX design work was outstanding. Our user engagement increased by 40% after the redesign.",
			rating: 5
		}
	];

	return (
		<div class="page-container">
			{/* Hero Section */}
			<section class="hero-section">
				<div class="hero-content">
					<h1>Our Services</h1>
					<p class="hero-subtitle">
						Comprehensive technology solutions to power your business growth
					</p>
				</div>
			</section>

			{/* Service Categories */}
			<section class="content-section">
				<div class="container">
					<div class="category-filters">
						{categories.map(category => (
							<button
								key={category.id}
								class={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
								onClick={() => setSelectedCategory(category.id)}
							>
								{category.name}
							</button>
						))}
					</div>

					{/* Services Grid */}
					<div class="services-grid">
						{filteredServices.map(service => (
							<div key={service.id} class="service-card">
								<div class="service-icon">{service.icon}</div>
								<h3>{service.title}</h3>
								<p class="service-description">{service.description}</p>
								
								<div class="service-features">
									<h4>What's Included:</h4>
									<ul>
										{service.features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>

								<div class="service-details">
									<div class="service-price">{service.price}</div>
									<div class="service-duration">Duration: {service.duration}</div>
								</div>

								<button class="service-cta">Get Started</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section class="process-section">
				<div class="container">
					<h2>Our Process</h2>
					<div class="process-steps">
						<div class="process-step">
							<div class="step-number">1</div>
							<h3>Discovery</h3>
							<p>We start by understanding your business goals and requirements.</p>
						</div>
						<div class="process-step">
							<div class="step-number">2</div>
							<h3>Planning</h3>
							<p>We create a detailed project plan and timeline for execution.</p>
						</div>
						<div class="process-step">
							<div class="step-number">3</div>
							<h3>Development</h3>
							<p>Our team builds your solution using best practices and modern tools.</p>
						</div>
						<div class="process-step">
							<div class="step-number">4</div>
							<h3>Testing</h3>
							<p>Rigorous testing ensures quality and performance standards.</p>
						</div>
						<div class="process-step">
							<div class="step-number">5</div>
							<h3>Launch</h3>
							<p>We deploy your solution and provide ongoing support.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section class="testimonials-section">
				<div class="container">
					<h2>What Our Clients Say</h2>
					<div class="testimonials-grid">
						{testimonials.map((testimonial, index) => (
							<div key={index} class="testimonial-card">
								<div class="testimonial-rating">
									{'⭐'.repeat(testimonial.rating)}
								</div>
								<p class="testimonial-text">"{testimonial.text}"</p>
								<div class="testimonial-author">
									<strong>{testimonial.name}</strong>
									<span>{testimonial.company}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="cta-section">
				<div class="container">
					<div class="cta-content">
						<h2>Ready to Get Started?</h2>
						<p>Let's discuss how we can help transform your business with technology.</p>
						<div class="cta-buttons">
							<button class="cta-primary">Schedule Consultation</button>
							<button class="cta-secondary">View Portfolio</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
