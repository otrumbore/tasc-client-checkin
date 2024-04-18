import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ClientInfo } from '@/app/types';
import PageHeading from '../pageHeading';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface NameFormProps {
	nextStep: () => void;
	prevStep: () => void;
	clientInfo: ClientInfo;
	setClientInfo: (info: ClientInfo) => void;
}

const NameForm: React.FC<NameFormProps> = ({
	nextStep,
	prevStep,
	clientInfo,
	setClientInfo,
}) => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');

	useEffect(() => {
		console.log(clientInfo);
	}, []);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setClientInfo({ ...clientInfo, firstname: firstName, lastname: lastName });
		console.log(clientInfo);
		//nextStep();
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-4 bg-[#003873]'>
			<div className='w-full h-auto max-w-[48rem] bg-white border shadow-lg shadow-black rounded-lg py-6'>
				<PageHeading />
				<div className='mt-12 w-full h-full flex flex-col items-center justify-center'>
					<h3 className='text-center text-3xl mb-12'>
						{clientInfo.language === 'english'
							? 'Please enter your first and last name'
							: 'Por favor introduce tu primer nombre y apellido'}
					</h3>
					<form
						className='flex flex-col p-4 w-full lg:w-8/12 gap-8'
						onSubmit={handleSubmit}
					>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='fistName'>
								{clientInfo.language === 'english'
									? 'First Name:'
									: 'Nombre de pila:'}
							</Label>
							<Input
								id='firstName'
								type='text'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='lastName'>
								{clientInfo.language === 'english' ? 'Last Name:' : 'Apellido:'}
							</Label>
							<Input
								id='lastName'
								type='text'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>

						<div className='flex flex-col-reverse landscape:flex-row lg:flex-row justify-between gap-4'>
							<Button variant={'tasc_two'} size={'xxl'} onClick={prevStep}>
								{clientInfo.language === 'english' ? 'Back' : 'Atrás'}
							</Button>
							<Button variant={'tasc'} size={'xxl'} onClick={handleSubmit}>
								{clientInfo.language === 'english' ? 'Next' : 'Próximo'}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default NameForm;
