import React from 'react';
import { Button } from '@/components/ui/button';
import PageHeading from '../pageHeading';
import { ClientInfo } from '@/app/types';

interface WelcomeProps {
	nextStep: () => void;
	setClientInfo: (updateFn: (prev: ClientInfo) => ClientInfo) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ nextStep, setClientInfo }) => {
	const changeLanguage = (lang: string) => {
		setClientInfo((prev) => ({ ...prev, language: lang }));
		nextStep();
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-4 bg-[#003873]'>
			<div className='w-full h-auto max-w-[48rem] bg-white border shadow-lg shadow-black rounded-lg py-6'>
				<PageHeading />
				<div className='w-full h-full flex-col items-center justify-center'>
					<div className='mt-16'>
						<h3 className='text-center text-3xl mb-12'>Welcome to TASC</h3>
						<p className='px-8 mb-8 text-lg'>
							Please use this kiosk to check in with our staff. If you haven't
							already please be sure to have received a number from security
							prior to checking in.
						</p>
						<p className='px-8 text-lg'>
							Utilice este quiosco para registrarse con nuestro personal. Si aún
							no lo ha hecho, asegúrese de haber recibido un número de seguridad
							antes de registrarse.
						</p>
					</div>
					<div className='mt-12'>
						<h4 className='text-center text-xl mb-4 font-bold'>
							Please select your language below
						</h4>
						<h4 className='text-center text-xl mb-12 font-bold'>
							Por favor seleccione su idioma a continuación
						</h4>
					</div>
					<div className='flex justify-center'>
						<div className='w-7/12 flex flex-col landscape:flex-row lg:flex-row gap-6 justify-between items-center '>
							<Button
								variant='tasc'
								size='xxl'
								onClick={() => changeLanguage('english')}
							>
								English
							</Button>
							<Button
								variant='tasc'
								size='xxl'
								onClick={() => changeLanguage('spanish')}
							>
								Español
							</Button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Welcome;
