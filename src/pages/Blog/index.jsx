import { useState } from 'preact/hooks';

export function Blog() {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');

	const articles = [
		{
			id: 1,
			title: "The Future of Web Development: Trends to Watch in 2024",
			excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
			category: "development",
			author: "Sarah Johnson",
			date: "2024-03-15",
			readTime: "5 min read",
			image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
			tags: ["Web Development", "Trends", "AI", "PWA"]
		},
		{
			id: 2,
			title: "Building Scalable Cloud Infrastructure: A Complete Guide",
			excerpt: "Learn how to design and implement cloud infrastructure that grows with your business needs.",
			category: "infrastructure",
			author: "Michael Chen",
			date: "2024-03-12",
			readTime: "8 min read",
			image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
			tags: ["Cloud", "AWS", "Scalability", "DevOps"]
		},
		{
			id: 3,
			title: "UX Design Principles That Drive User Engagement",
			excerpt: "Discover the key design principles that create memorable user experiences and boost engagement.",
			category: "design",
			author: "Emily Rodriguez",
			date: "2024-03-10",
			readTime: "6 min read",
			image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
			tags: ["UX Design", "User Engagement", "Design Principles"]
		},
		{
			id: 4,
			title: "Data Analytics: Turning Numbers into Business Insights",
			excerpt: "How to leverage data analytics to make informed business decisions and drive growth.",
			category: "analytics",
			author: "David Kim",
			date: "2024-03-08",
			readTime: "7 min read",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
			tags: ["Data Analytics", "Business Intelligence", "Insights"]
		},
		{
			id: 5,
			title: "Mobile-First Development: Best Practices for 2024",
			excerpt: "Essential strategies for building mobile-first applications that deliver exceptional user experiences.",
			category: "development",
			author: "Lisa Park",
			date: "2024-03-05",
			readTime: "6 min read",
			image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
			tags: ["Mobile Development", "Best Practices", "React Native"]
		},
		{
			id: 6,
			title: "Digital Marketing Strategies That Actually Work",
			excerpt: "Proven digital marketing tactics to increase your online presence and drive conversions.",
			category: "marketing",
			author: "Alex Thompson",
			date: "2024-03-03",
			readTime: "9 min read",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
			tags: ["Digital Marketing", "SEO", "Social Media", "Conversion"]
		}
	];

	const categories = [
		{ id: 'all', name: 'All Posts' },
		{ id: 'development', name: 'Development' },
		{ id: 'design', name: 'Design' },
		{ id: 'infrastructure', name: 'Infrastructure' },
		{ id: 'analytics', name: 'Analytics' },
		{ id: 'marketing', name: 'Marketing' }
	];

	const featuredArticle = articles[0];

	const filteredArticles = articles.filter(article => {
		const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
		const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
							 article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
							 article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
		return matchesCategory && matchesSearch;
	});

	const recentArticles = articles.slice(0, 3);

	return (
		<div class="page-container">
			{/* Hero Section */}
			<section class="hero-section">
				<div class="hero-content">
					<h1>Tech Blog</h1>
					<p class="hero-subtitle">
						Insights, tutorials, and industry trends from our team of experts
					</p>
				</div>
			</section>

			{/* Featured Article */}
			<section class="featured-section">
				<div class="container">
					<h2>Featured Article</h2>
					<div class="featured-article">
						<div class="featured-image">
							<img src={featuredArticle.image} alt={featuredArticle.title} />
						</div>
						<div class="featured-content">
							<div class="article-meta">
								<span class="category">{featuredArticle.category}</span>
								<span class="date">{featuredArticle.date}</span>
								<span class="read-time">{featuredArticle.readTime}</span>
							</div>
							<h3>{featuredArticle.title}</h3>
							<p>{featuredArticle.excerpt}</p>
							<div class="article-footer">
								<span class="author">By {featuredArticle.author}</span>
								<button class="read-more-btn">Read More</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Search and Filter */}
			<section class="content-section">
				<div class="container">
					<div class="blog-controls">
						<div class="search-box">
							<input
								type="text"
								placeholder="Search articles..."
								value={searchTerm}
								onInput={(e) => setSearchTerm(e.target.value)}
							/>
							<span class="search-icon">🔍</span>
						</div>
						
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
					</div>

					{/* Articles Grid */}
					<div class="articles-grid">
						{filteredArticles.slice(1).map(article => (
							<article key={article.id} class="article-card">
								<div class="article-image">
									<img src={article.image} alt={article.title} />
									<div class="article-category">{article.category}</div>
								</div>
								<div class="article-content">
									<div class="article-meta">
										<span class="date">{article.date}</span>
										<span class="read-time">{article.readTime}</span>
									</div>
									<h3>{article.title}</h3>
									<p>{article.excerpt}</p>
									<div class="article-tags">
										{article.tags.map((tag, index) => (
											<span key={index} class="tag">{tag}</span>
										))}
									</div>
									<div class="article-footer">
										<span class="author">By {article.author}</span>
										<button class="read-more-btn">Read More</button>
									</div>
								</div>
							</article>
						))}
					</div>

					{filteredArticles.length === 0 && (
						<div class="no-results">
							<h3>No articles found</h3>
							<p>Try adjusting your search terms or category filter.</p>
						</div>
					)}
				</div>
			</section>

			{/* Sidebar Content */}
			<section class="sidebar-section">
				<div class="container">
					<div class="blog-layout">
						<div class="main-content">
							<h2>Latest Articles</h2>
							<div class="recent-articles">
								{recentArticles.map(article => (
									<div key={article.id} class="recent-article">
										<img src={article.image} alt={article.title} />
										<div class="recent-content">
											<h4>{article.title}</h4>
											<div class="recent-meta">
												<span>{article.date}</span>
												<span>{article.readTime}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div class="sidebar">
							<div class="sidebar-widget">
								<h3>Popular Tags</h3>
								<div class="tag-cloud">
									{['React', 'JavaScript', 'CSS', 'Node.js', 'Python', 'AWS', 'Docker', 'AI', 'Machine Learning', 'DevOps'].map((tag, index) => (
										<span key={index} class="cloud-tag">{tag}</span>
									))}
								</div>
							</div>

							<div class="sidebar-widget">
								<h3>Newsletter</h3>
								<p>Subscribe to get the latest articles delivered to your inbox.</p>
								<form class="newsletter-form">
									<input type="email" placeholder="Your email address" />
									<button type="submit">Subscribe</button>
								</form>
							</div>

							<div class="sidebar-widget">
								<h3>Follow Us</h3>
								<div class="social-links">
									<a href="#" class="social-link">📘 Facebook</a>
									<a href="#" class="social-link">🐦 Twitter</a>
									<a href="#" class="social-link">💼 LinkedIn</a>
									<a href="#" class="social-link">📷 Instagram</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
