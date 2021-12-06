import { useQuery } from 'react-query';

import { getTodos } from '../services/todoReactQuery';

const ReactQueryWay = () => {
	const { isLoading, error, data } = useQuery('todos', getTodos);

	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<div>
			<h1>React Query Way</h1>
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default ReactQueryWay;
