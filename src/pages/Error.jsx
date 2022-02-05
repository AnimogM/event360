import React from 'react';
import MenuLayout from '../layouts/MenuLayout';

const Error = () => {
  return (
		<MenuLayout>
			<div className="text-center text-blue pt-5 full-page" >
				<h1>404</h1>
				<p className='fw-700 pt-2'>sorry, page not found</p>
			</div>
		</MenuLayout>
  );
};

export default Error;
