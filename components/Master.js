import Head from "next/head";
import Navegacion from "./Navegacion";


const MasterPage = props => {
    return (
    <div>
        <Head>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Bitcoin App</title>
            <link rel='stylesheet' type="text/css" href="https://bootswatch.com/5/cerulean/bootstrap.min.css" />
        </Head>
        <Navegacion />
        <div className='container mt-3'>
            {props.children}
        </div>
    </div>)
}

export default MasterPage;