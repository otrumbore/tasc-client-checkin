import PageHeading from '@/components/pageHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

const Login = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center p-4 bg-[#003873]'>
			<div className='w-full h-auto max-w-[48rem] bg-white border shadow-lg shadow-black rounded-lg py-6'>
				<PageHeading />
				<div className='mt-12 w-full h-full flex flex-col items-center justify-center'>
					<h3 className='text-center text-3xl mb-12'>Login</h3>
					<form
						className='flex flex-col p-4 w-full lg:w-8/12 gap-8'
						//onSubmit={handleSubmit}
					>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='username'>Username</Label>
							<Input
								id='username'
								type='text'
								// value={firstName}
								// onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='lastName'>Password</Label>
							<Input
								id='password'
								type='password'
								// value={lastName}
								// onChange={(e) => setLastName(e.target.value)}
							/>
						</div>

						<div className='flex flex-col-reverse landscape:flex-row lg:flex-row justify-between gap-4'>
							{/* <Button variant={'tasc_two'} size={'xxl'} onClick={prevStep}>
								{clientInfo.language === 'english' ? 'Back' : 'Atrás'}
							</Button> */}
							<Button variant={'tasc'} size={'xxl'}>
								Login
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
