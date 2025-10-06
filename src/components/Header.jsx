import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<div class="nav-left">
					<a href="/" class={url == '/' && 'active'}>
						Home
					</a>
					<a href="/about" class={url == '/about' && 'active'}>
						About
					</a>
					<a href="/services" class={url == '/services' && 'active'}>
						Services
					</a>
					<a href="/blog" class={url == '/blog' && 'active'}>
						Blog
					</a>
					<a href="/contact" class={url == '/contact' && 'active'}>
						Contact
					</a>
				</div>
				<div class="nav-right">
					<a href="/dashboard" class={url == '/dashboard' && 'active'}>
						Dashboard
					</a>
					<a href="/profile" class={url == '/profile' && 'active'}>
						Profile
					</a>
					<a href="/signin" class={url == '/signin' && 'active'}>
						Sign In
					</a>
					<a href="/signup" class={url == '/signup' && 'active'}>
						Sign Up
					</a>
				</div>
			</nav>
		</header>
	);
}
