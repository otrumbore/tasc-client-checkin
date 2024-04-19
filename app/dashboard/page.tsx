import PageHeading from '@/components/pageHeading';
import React from 'react';

const Dashboard = () => {
	const clients = [
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
			checkinTime: '4/17/2024 @ 3:01 PM',
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
			checkinTime: '4/17/2024 @ 3:01 PM',
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
			checkinTime: '4/17/2024 @ 3:01 PM',
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
			checkinTime: '4/17/2024 @ 3:01 PM',
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
		{
			firstname: 'odnel',
			lastname: 'trumbore',
			queueNum: 27,
			dob: '01/08/1995',
			lastFourSSN: 1234,
		},
	];
	return (
		<div className='min-h-screen max-h-screen min-w-screen bg-[#003873] p-12 flex flex-row gap-4'>
			{/* Side bar
			<div className='w-2/12 p-4 bg-[#F47940] border-r-2 border-gray-700 rounded-md shadow-md shadow-black'>
				<ul>
					<li>Home</li>
					<li>Queue</li>
					<li>Scheduled</li>
				</ul>
			</div> */}
			<div className='bg-white w-full max-h-screen p-4 rounded-lg shadow-lg shadow-black overflow-auto'>
				<div className='flex w-full justify-between items-center px-4 text-lg'>
					<div className='w-1/3'>Hello, Admin</div>
					<PageHeading />
					<div className='w-1/3 flex justify-end'>Logout</div>
				</div>

				{/* Main */}
				<div className='w-full p-4'>
					<div className='flex flex-col gap-4'>
						<div className='border-2 border-[#F47940] rounded-md w-full grid grid-cols-6 p-4 text-xl'>
							<p className='font-bold'>Check In Time</p>
							<p className='font-bold'>Queue #</p>
							<p className='font-bold'>Name</p>
							<p className='font-bold'>Date of Birth</p>
							<p className='font-bold'>Last 4 SSN</p>
							<p className='font-bold'>Actions</p>
						</div>
						<div className='border-2 border-[#F47940]/90 rounded-md'>
							{clients.map((client) => (
								<div
									className={`${
										client.checkinTime ? 'bg-red-300' : ''
									} w-full grid grid-cols-6 p-4 border-b-2 border-gray-300 text-xl`}
									key={client.queueNum}
								>
									<p>{client.checkinTime}</p>
									<p>{client.queueNum}</p>
									<p>{client.firstname + ' ' + client.lastname}</p>
									<p>{client.dob}</p>
									<p>{client.lastFourSSN}</p>
									<p>Button 1, button 2</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
