import { useGetTodosQuery } from '../services/todo';

const ReduxWay = () => {
	const { data, error, isLoading } = useGetTodosQuery();
	return (
		<div>
			<h1>Redux Way</h1>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<ul>
						{data.map((item) => (
							<li key={item.id}>{item.title}</li>
						))}
					</ul>
				</>
			) : null}
		</div>
	);
};

export default ReduxWay;
