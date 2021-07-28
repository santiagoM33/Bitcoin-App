import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';

const Index = props => {
    return (
    <MasterPage>
        <div className='row'>
            <div className='col-12'>
                <h2>Precio Bircoin</h2>
                <Precio precio={props.precioCriptos[0]} />
            </div>
            <div className='col-md-8 mt-3'>
                <h3>Noticias sobre Bitcoin</h3>
                <Noticias noticias={props.noticias} />
            </div>
            <div className='col-md-4 mt-3'>
                <h3>Eventos Bitcoin</h3>
                <Eventos eventos={props.eventos.events} />
            </div>
        </div>
    </MasterPage>)
}

Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4a5028074bdd4c72a7e3322a71f177a3');
    const eventos = await fetch('https://www.eventbrite.com/api/v3/destination/events/?event_ids=164527459059,159510519257,162409973603,162956901479,161029205689,159718346875,164753966549,135397466467,141844774539,158512397849,158514630527,161814279867,161814229717,135915838933,161815132417,161815320981,131586786621,161815481461,160533527101,163086910339&expand=event_sales_status,primary_venue,image,saves,my_collections,ticket_availability,primary_organizer&page_size=20');
    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();

    return {
        precioCriptos: resPrecio,
        noticias: resNoticias.articles,
        eventos: resEventos
    }
}

export default Index;