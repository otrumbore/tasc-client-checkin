import Image from 'next/image';

export default function Home() {
	let name: String;

	name = 'World';

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<p>Hello {name}</p>
		</main>
	);
}
