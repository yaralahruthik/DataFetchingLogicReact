import { useEffect, useState } from 'react';

const ReactWay = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/todos'
			);
			const data = await response.json();
			setApiData(data);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>React Way</h1>
			<ul>
				{apiData.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default ReactWay;
