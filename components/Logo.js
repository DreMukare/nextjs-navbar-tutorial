import Link from 'next/link';

const Logo = () => {
	return (
		<Link href='/'>
			<a className='font-bold text-xl tracking-wide hover:tracking-widest transform-all ease-in-out duration-700'>
				LOGO
			</a>
		</Link>
	);
};

export default Logo;
