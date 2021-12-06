import ReactWay from './components/ReactWay';
import ReduxWay from './components/ReduxWay';
import ReactQueryWay from './components/ReactQueryWay';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App = () => {
	return (
		<>
			<ReactWay />
			<ReduxWay />
			<QueryClientProvider client={queryClient}>
				<ReactQueryWay />
			</QueryClientProvider>
		</>
	);
};

export default App;
