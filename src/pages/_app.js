import '../styles/global.scss'


import { CookiesProvider } from 'react-cookie';


function App({Component, pageProps}) {

    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(

            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>


    );
}

export default App
