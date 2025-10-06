import { useState } from 'preact/hooks';

export function Dashboard() {
	const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

	const stats = [
		{ label: 'Total Users', value: '12,543', change: '+12%', trend: 'up' },
		{ label: 'Revenue', value: '$45,231', change: '+8%', trend: 'up' },
		{ label: 'Active Projects', value: '23', change: '+3%', trend: 'up' },
		{ label: 'Support Tickets', value: '8', change: '-15%', trend: 'down' }
	];

	const recentActivities = [
		{ id: 1, type: 'user', message: 'New user registration: john.doe@email.com', time: '2 minutes ago' },
		{ id: 2, type: 'project', message: 'Project "Mobile App" status updated to In Progress', time: '15 minutes ago' },
		{ id: 3, type: 'payment', message: 'Payment received: $2,500 from Client ABC', time: '1 hour ago' },
		{ id: 4, type: 'support', message: 'Support ticket #1234 resolved', time: '2 hours ago' },
		{ id: 5, type: 'system', message: 'System backup completed successfully', time: '4 hours ago' }
	];

	const projects = [
		{ id: 1, name: 'E-commerce Platform', client: 'RetailCorp', status: 'In Progress', progress: 75, deadline: '2024-04-15' },
		{ id: 2, name: 'Mobile Banking App', client: 'FinanceBank', status: 'Review', progress: 90, deadline: '2024-04-10' },
		{ id: 3, name: 'Analytics Dashboard', client: 'DataCorp', status: 'Planning', progress: 25, deadline: '2024-05-01' },
		{ id: 4, name: 'CRM System', client: 'SalesCorp', status: 'Testing', progress: 85, deadline: '2024-04-20' }
	];

	const upcomingTasks = [
		{ id: 1, task: 'Client meeting with RetailCorp', time: '10:00 AM', priority: 'high' },
		{ id: 2, task: 'Code review for Mobile Banking App', time: '2:00 PM', priority: 'medium' },
		{ id: 3, task: 'Deploy Analytics Dashboard staging', time: '4:30 PM', priority: 'low' },
		{ id: 4, task: 'Team standup meeting', time: '9:00 AM (Tomorrow)', priority: 'medium' }
	];

	const chartData = {
		'7d': [65, 59, 80, 81, 56, 55, 40],
		'30d': [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40, 28, 48],
		'90d': Array.from({length: 90}, () => Math.floor(Math.random() * 100))
	};

	const getActivityIcon = (type) => {
		switch(type) {
			case 'user': return '👤';
			case 'project': return '📁';
			case 'payment': return '💰';
			case 'support': return '🎧';
			case 'system': return '⚙️';
			default: return '📄';
		}
	};

	const getStatusColor = (status) => {
		switch(status) {
			case 'In Progress': return '#2196F3';
			case 'Review': return '#FF9800';
			case 'Planning': return '#9C27B0';
			case 'Testing': return '#4CAF50';
			case 'Completed': return '#8BC34A';
			default: return '#757575';
		}
	};

	const getPriorityColor = (priority) => {
		switch(priority) {
			case 'high': return '#F44336';
			case 'medium': return '#FF9800';
			case 'low': return '#4CAF50';
			default: return '#757575';
		}
	};

	return (
		<div class="page-container">
			{/* Dashboard Header */}
			<section class="dashboard-header">
				<div class="container">
					<div class="header-content">
						<div class="welcome-section">
							<h1>Welcome back, Sarah! 👋</h1>
							<p>Here's what's happening with your projects today.</p>
						</div>
						<div class="header-actions">
							<select 
								value={selectedTimeframe} 
								onChange={(e) => setSelectedTimeframe(e.target.value)}
								class="timeframe-select"
							>
								<option value="7d">Last 7 days</option>
								<option value="30d">Last 30 days</option>
								<option value="90d">Last 90 days</option>
							</select>
							<button class="export-btn">📊 Export Report</button>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Overview */}
			<section class="stats-section">
				<div class="container">
					<div class="stats-grid">
						{stats.map((stat, index) => (
							<div key={index} class="stat-card">
								<div class="stat-header">
									<span class="stat-label">{stat.label}</span>
									<span class={`stat-change ${stat.trend}`}>
										{stat.trend === 'up' ? '📈' : '📉'} {stat.change}
									</span>
								</div>
								<div class="stat-value">{stat.value}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Main Dashboard Content */}
			<section class="dashboard-content">
				<div class="container">
					<div class="dashboard-grid">
						{/* Chart Section */}
						<div class="chart-section">
							<div class="widget">
								<div class="widget-header">
									<h3>Revenue Overview</h3>
									<div class="chart-legend">
										<span class="legend-item">📊 Revenue</span>
									</div>
								</div>
								<div class="chart-container">
									<div class="chart-placeholder">
										<div class="chart-bars">
											{chartData[selectedTimeframe].slice(0, 7).map((value, index) => (
												<div 
													key={index} 
													class="chart-bar" 
													style={`height: ${value}%`}
												></div>
											))}
										</div>
										<div class="chart-labels">
											{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
												<span key={index}>{day}</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Recent Activities */}
						<div class="activities-section">
							<div class="widget">
								<div class="widget-header">
									<h3>Recent Activities</h3>
									<button class="view-all-btn">View All</button>
								</div>
								<div class="activities-list">
									{recentActivities.map(activity => (
										<div key={activity.id} class="activity-item">
											<div class="activity-icon">
												{getActivityIcon(activity.type)}
											</div>
											<div class="activity-content">
												<p>{activity.message}</p>
												<span class="activity-time">{activity.time}</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Projects Overview */}
						<div class="projects-section">
							<div class="widget">
								<div class="widget-header">
									<h3>Active Projects</h3>
									<button class="add-project-btn">+ New Project</button>
								</div>
								<div class="projects-list">
									{projects.map(project => (
										<div key={project.id} class="project-item">
											<div class="project-info">
												<h4>{project.name}</h4>
												<p>Client: {project.client}</p>
												<div class="project-meta">
													<span 
														class="project-status"
														style={`color: ${getStatusColor(project.status)}`}
													>
														{project.status}
													</span>
													<span class="project-deadline">Due: {project.deadline}</span>
												</div>
											</div>
											<div class="project-progress">
												<div class="progress-bar">
													<div 
														class="progress-fill" 
														style={`width: ${project.progress}%`}
													></div>
												</div>
												<span class="progress-text">{project.progress}%</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Upcoming Tasks */}
						<div class="tasks-section">
							<div class="widget">
								<div class="widget-header">
									<h3>Upcoming Tasks</h3>
									<button class="add-task-btn">+ Add Task</button>
								</div>
								<div class="tasks-list">
									{upcomingTasks.map(task => (
										<div key={task.id} class="task-item">
											<div class="task-checkbox">
												<input type="checkbox" />
											</div>
											<div class="task-content">
												<p>{task.task}</p>
												<div class="task-meta">
													<span class="task-time">{task.time}</span>
													<span 
														class="task-priority"
														style={`color: ${getPriorityColor(task.priority)}`}
													>
														{task.priority} priority
													</span>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Actions */}
			<section class="quick-actions">
				<div class="container">
					<div class="actions-grid">
						<button class="action-card">
							<div class="action-icon">📝</div>
							<h4>Create Invoice</h4>
							<p>Generate new invoice for clients</p>
						</button>
						<button class="action-card">
							<div class="action-icon">👥</div>
							<h4>Add Team Member</h4>
							<p>Invite new team member to project</p>
						</button>
						<button class="action-card">
							<div class="action-icon">📊</div>
							<h4>View Analytics</h4>
							<p>Detailed project analytics</p>
						</button>
						<button class="action-card">
							<div class="action-icon">⚙️</div>
							<h4>Settings</h4>
							<p>Manage account settings</p>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
