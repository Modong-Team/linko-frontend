import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from '../modules';
import { GlobalStyle } from '../styles/global';
import RouterGuard from '../components/hocs/RouterGuard';
import Head from 'next/head';

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
		<>
			<Head>
				<meta property='og:title' content='Linko' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://linko.site' />
				<meta
					property='og:image'
					content='https://user-images.githubusercontent.com/98504939/218971732-4345b07c-5357-4dad-82b0-b712cd678e2d.png'
				/>
				<meta property='og:description' content='동아리 리크루팅 솔루션 서비스' />
			</Head>
			<Provider store={store}>
				<RouterGuard>
					<GlobalStyle />
					{getLayout(<Component {...pageProps} />)}
				</RouterGuard>
			</Provider>
		</>
	);
}
