export function About() {
	const teamMembers = [
		{
			name: "Sarah Johnson",
			role: "CEO & Founder",
			bio: "Visionary leader with 15+ years in tech innovation.",
			image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
		},
		{
			name: "Michael Chen",
			role: "CTO",
			bio: "Full-stack architect passionate about scalable solutions.",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
		},
		{
			name: "Emily Rodriguez",
			role: "Head of Design",
			bio: "Creative designer focused on user-centered experiences.",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
		},
		{
			name: "David Kim",
			role: "Lead Developer",
			bio: "Code enthusiast building the future, one line at a time.",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
		}
	];

	const stats = [
		{ number: "10K+", label: "Happy Customers" },
		{ number: "50+", label: "Team Members" },
		{ number: "99.9%", label: "Uptime" },
		{ number: "24/7", label: "Support" }
	];

	return (
		<div class="page-container">
			{/* Hero Section */}
			<section class="hero-section">
				<div class="hero-content">
					<h1>About TechCorp</h1>
					<p class="hero-subtitle">
						We're building the future of technology, one innovation at a time.
					</p>
				</div>
			</section>

			{/* Company Story */}
			<section class="content-section">
				<div class="container">
					<div class="story-grid">
						<div class="story-text">
							<h2>Our Story</h2>
							<p>
								Founded in 2018, TechCorp emerged from a simple idea: technology should 
								empower people, not complicate their lives. What started as a small team 
								of passionate developers has grown into a global company serving thousands 
								of customers worldwide.
							</p>
							<p>
								We believe in creating solutions that are not just functional, but 
								delightful to use. Our mission is to bridge the gap between complex 
								technology and everyday users through intuitive design and powerful features.
							</p>
						</div>
						<div class="story-image">
							<img 
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop" 
								alt="Team collaboration"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section class="stats-section">
				<div class="container">
					<h2>By the Numbers</h2>
					<div class="stats-grid">
						{stats.map((stat, index) => (
							<div key={index} class="stat-card">
								<div class="stat-number">{stat.number}</div>
								<div class="stat-label">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section class="team-section">
				<div class="container">
					<h2>Meet Our Team</h2>
					<p class="section-subtitle">
						The brilliant minds behind our innovative solutions
					</p>
					<div class="team-grid">
						{teamMembers.map((member, index) => (
							<div key={index} class="team-card">
								<img 
									src={member.image} 
									alt={member.name}
									class="team-image"
								/>
								<h3>{member.name}</h3>
								<p class="team-role">{member.role}</p>
								<p class="team-bio">{member.bio}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section class="values-section">
				<div class="container">
					<h2>Our Values</h2>
					<div class="values-grid">
						<div class="value-card">
							<div class="value-icon">🚀</div>
							<h3>Innovation</h3>
							<p>We constantly push boundaries to create cutting-edge solutions.</p>
						</div>
						<div class="value-card">
							<div class="value-icon">🤝</div>
							<h3>Collaboration</h3>
							<p>Great things happen when diverse minds work together.</p>
						</div>
						<div class="value-card">
							<div class="value-icon">💡</div>
							<h3>Excellence</h3>
							<p>We strive for perfection in everything we do.</p>
						</div>
						<div class="value-card">
							<div class="value-icon">🌍</div>
							<h3>Impact</h3>
							<p>We build technology that makes a positive difference.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
