	import { useEffect, useState } from 'react';

	const ReactWay = () => {
		const [apiData, setApiData] = useState([]);
		const [isLoading, setIsLoading] = useState(false);
		const [error, setError] = useState('');

		useEffect(() => {
			const fetchData = async () => {
				setIsLoading(true);
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/todos'
				);
				const data = await response.json();
				setApiData(data);
				setIsLoading(false);
			};

			fetchData().catch((e) => setError(e.message));
		}, []);

		return (
			<div>
				<h1>React Way</h1>
				{error ? (
					<>Oh no, there was an error</>
				) : isLoading ? (
					<>Loading...</>
				) : apiData ? (
					<>
						<ul>
							{apiData.map((item) => (
								<li key={item.id}>{item.title}</li>
							))}
						</ul>
					</>
				) : null}
			</div>
		);
	};

	export default ReactWay;
