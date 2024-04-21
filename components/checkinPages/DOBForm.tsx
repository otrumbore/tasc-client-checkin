import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ClientInfo } from '@/app/types';
import PageHeading from '../pageHeading';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { Label } from '@/components/ui/label';

interface DOBFormProps {
	nextStep: () => void;
	prevStep: () => void;
	clientInfo: ClientInfo;
	setClientInfo: (info: ClientInfo) => void;
}

const DOBForm: React.FC<DOBFormProps> = ({
	nextStep,
	prevStep,
	clientInfo,
	setClientInfo,
}) => {
	const [dob, setDob] = useState<string>('');
	const months = Array.from({ length: 12 }, (_, index) =>
		(index + 1).toString()
	);
	const [displayMonths, setDisplayMonths] = useState<Array<string>>([
		'1 - January',
		'2 - February',
		'3 - March',
		'4 - April',
		'5 - May',
		'6 - June',
		'7 - July',
		'8 - August',
		'9 - September',
		'10 - October',
		'11 - November',
		'12 - December',
	]);

	const days = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
	const getCurrentYear = () => {
		const currentDate = new Date();
		return currentDate.getFullYear(); // Gets the current year
	};

	const startYear = 1900;
	const endYear = getCurrentYear(); // Get the current year

	// Calculate the number of years between startYear and endYear
	const years = Array.from(
		{ length: endYear - startYear + 1 },
		(_, index) => (endYear - index).toString() // Generates years from endYear to startYear
	);

	useEffect(() => {
		//console.log(clientInfo);
	}, []);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setClientInfo({ ...clientInfo, dob: '' });
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
							? 'Please enter your date of birth'
							: 'Por favor introduce tu primer nombre y apellido'}
					</h3>
					<form
						className='flex flex-col p-4 w-full lg:w-10/12 gap-12'
						onSubmit={handleSubmit}
					>
						<div className='flex w-full gap-4 justify-between'>
							<div className='flex flex-col gap-2'>
								<Label htmlFor='dob'>
									{clientInfo.language === 'english'
										? 'Month:'
										: 'Nombre de pila:'}
								</Label>
								<Select>
									<SelectTrigger className='w-[12.5rem] h-[4rem] text-xl'>
										<SelectValue
											placeholder={
												clientInfo.language === 'english'
													? 'Month'
													: 'Nombre de pila:'
											}
										/>
									</SelectTrigger>
									<SelectContent>
										{months.map((month) => (
											<SelectItem
												className='text-xl h-[4rem]'
												key={month}
												value={month}
											>
												{displayMonths[parseInt(month) - 1]}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className='flex flex-col gap-2'>
								<Label htmlFor='dob'>
									{clientInfo.language === 'english'
										? 'Day:'
										: 'Nombre de pila:'}
								</Label>
								<Select>
									<SelectTrigger className='w-[7.5rem] h-[4rem] text-xl'>
										<SelectValue
											placeholder={
												clientInfo.language === 'english'
													? 'Day'
													: 'Nombre de pila:'
											}
										/>
									</SelectTrigger>
									<SelectContent>
										{days.map((day) => (
											<SelectItem
												className='text-xl h-[4rem]'
												key={day}
												value={day}
											>
												{day}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className='flex flex-col gap-2'>
								<Label htmlFor='dob'>
									{clientInfo.language === 'english'
										? 'Year:'
										: 'Nombre de pila:'}
								</Label>
								<Select>
									<SelectTrigger className='w-[11.25rem] h-[4rem] text-xl'>
										<SelectValue
											placeholder={
												clientInfo.language === 'english'
													? 'Year'
													: 'Nombre de pila:'
											}
										/>
									</SelectTrigger>
									<SelectContent>
										{years.map((year) => (
											<SelectItem
												className='text-xl h-[4rem]'
												key={year}
												value={year}
											>
												{year}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
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

export default DOBForm;
