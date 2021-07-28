import Noticia from "./Noticia";

const Noticias = props => {
    return (
        <div className='row'>
            {props.noticias.map(noticia=>{
                return <Noticia key={noticia.publishedAt} noticia={noticia}/>
            })}
        </div>
    )
}

export default Noticias;