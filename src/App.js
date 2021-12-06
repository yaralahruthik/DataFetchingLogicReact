import ReactWay from './components/ReactWay';
import ReduxWay from './components/ReduxWay';
import ReactQueryWay from './components/ReactQueryWay';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App = () => {
	return (
		<div className='center'>
			<ReactWay />
			<ReduxWay />
			<QueryClientProvider client={queryClient}>
				<ReactQueryWay />
			</QueryClientProvider>
		</div>
	);
};

export default App;
