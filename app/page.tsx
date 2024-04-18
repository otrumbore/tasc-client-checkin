'use client';

import React, { useState } from 'react';
import NameForm from '@/components/checkinPages/NameForm';
import Welcome from '@/components/checkinPages/Welcome';
import { ClientInfo } from '@/app/types';

export default function Home() {
	const [step, setStep] = useState<number>(1);
	const [clientInfo, setClientInfo] = useState<ClientInfo>({});

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

	const renderStep = () => {
		switch (step) {
			case 1:
				return <Welcome nextStep={nextStep} setClientInfo={setClientInfo} />;
			case 2:
				return (
					<NameForm
						nextStep={nextStep}
						prevStep={prevStep}
						clientInfo={clientInfo}
						setClientInfo={setClientInfo}
					/>
				);
			default:
				return <div>Unknown step</div>;
		}
	};

	return renderStep();
}
