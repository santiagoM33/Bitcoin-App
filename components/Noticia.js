const Noticia = (props) => {
    const {urlToImage, url, title, description, source} = props.noticia;
    let imagen;
    if(urlToImage !== ''){
        imagen = <img src={urlToImage} alt={title} className='card-img-top' />
    } else {
        imagen = <p className='text-center my-5'>Imagen No Disponible</p>
    }
    return (
        <div className='col-12 col-md-6 mb-3'>
            <div className='card'>
                <div className='card-image'>
                    {imagen}
                </div>
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text'>{description}</p>
                    <p className='card-text'>{source.name}</p>
                    <a href={url} target='_blank' className='btn btn-primary btn-block'>Leer Mas</a>
                </div>
            </div>
        </div>
    )
}

export default Noticia;