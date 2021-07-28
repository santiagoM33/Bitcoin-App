import Evento from "./Evento";

const Eventos = props => {
    const eventbrite = Object.keys(props.eventos);

    return (
        <div className='list-group'>
            {eventbrite.map(key=> {
                return <Evento 
                    key={key}
                    info={props.eventos[key]}
                />
            })}
        </div>
    )

}

export default Eventos;