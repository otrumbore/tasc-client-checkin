'use client';

import PageHeading from '@/components/pageHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login: React.FC = () => {
	const router = useRouter();
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (username && password) {
			if (username === 'admin' && password === '1234') {
				router.push('/dashboard');
			} else {
				alert('Incorrect username or password.');
			}
		} else {
			alert('Please enter both username and password.');
		}
	};

	return (
		<div className='flex min-h-screen flex-col items-center justify-center p-4 bg-[#003873]'>
			<div className='w-full h-auto max-w-[48rem] bg-white border shadow-lg shadow-black rounded-lg py-6'>
				<PageHeading />
				<div className='mt-12 w-full h-full flex flex-col items-center justify-center'>
					<h3 className='text-center text-3xl mb-12'>Kiosk Login</h3>
					<form
						className='flex flex-col p-4 w-full lg:w-8/12 gap-8'
						onSubmit={handleSubmit}
					>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='username'>Username</Label>
							<Input
								id='username'
								type='text'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='password'>Password</Label>
							<Input
								id='password'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div className='w-full flex justify-end'>
							<Button variant={'tasc'} size={'xxl'} type='submit'>
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
