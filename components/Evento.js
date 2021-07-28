const Evento = props => {
    const {name, url, summary} = props.info; 
    
    return (
        <a href={url} target='_blank' className='list-group-item active text-light mb-1'>
            <h4 className='text-white mb-4'>{name}</h4>
            <p className='mb-1'>{summary}</p>
        </a>
    )
}

export default Evento;