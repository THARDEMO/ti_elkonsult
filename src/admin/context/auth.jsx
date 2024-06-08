import PubSub from "../../logic/PubSub.js";
import fetcher, { createRqst } from "../../logic/rqsts.js";

const Auth = () => {

    PubSub.Sub({
        event: 'Fetcher::Error',
        listener: ({message}) => window.alert( message)
    });

    const authenticate = async(rqst) => {
        const data = await fetcher( rqst);
        if(!data)return;

        sessionStorage.setItem( 'auth', data);
        PubSub.Pub({
            event: 'Auth::User',
            detail: null,
        });
    }   

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const pw = document.querySelector( 'input[name=accessInput]').value;
            authenticate(createRqst( 'token/', 'POST', {access_key: pw}));
            
        }}>

            <input name="accessInput" type="password"/>
            <button type="submit">Auth</button>

        </form>
    )
}

export default Auth;