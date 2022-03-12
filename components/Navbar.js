import Link from 'next/link';
import Logo from './Logo';

const Navbar = ({ link1, link2, link3, link1To, link2To, link3To }) => {
	return (
		<div>
			<nav>
				<Logo />
				<div>
					<Link href={link1To}>
						<a>{link1}</a>
					</Link>
					<Link href={link2To}>
						<a>{link2}</a>
					</Link>
					<Link href={link3To}>
						<a>{link3}</a>
					</Link>
				</div>
				<button>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4 6h16M4 12h16m-7 6h7'
						/>
					</svg>
				</button>
			</nav>
			<div>
				<Link href={link1To}>
					<a>{link1}</a>
				</Link>
				<Link href={link2To}>
					<a>{link2}</a>
				</Link>
				<Link href={link3To}>
					<a>{link3}</a>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
