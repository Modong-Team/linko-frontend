import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from '../modules';
import { GlobalStyle } from '../styles/global';
import RouterGuard from '../components/hocs/RouterGuard';

/* Redux */
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const enhancer =
	process.env.NODE_ENV === 'production'
		? composeWithDevTools(applyMiddleware(sagaMiddleware))
		: composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page: any) => page);
	return (
		<Provider store={store}>
			<RouterGuard>
				<GlobalStyle />
				{getLayout(<Component {...pageProps} />)}
			</RouterGuard>
		</Provider>
	);
}
