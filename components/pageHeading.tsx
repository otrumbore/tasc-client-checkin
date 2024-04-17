import React from 'react';
import Image from 'next/image';

const PageHeading: React.FC = () => {
	return (
		<div className='w-full flex items-center justify-center pt-2'>
			<Image
				alt='TASC Logo'
				src='http://berkstasc.org/wp/wp-content/uploads/2017/07/logofinal.png'
				width={300}
				height={150}
				unoptimized={true} // Only if you are handling optimization manually or have external reasons to bypass Next.js optimization
			/>
		</div>
	);
};

export default PageHeading;
