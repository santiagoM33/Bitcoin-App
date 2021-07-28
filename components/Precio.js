const Precio = props => {
    const {current_price, price_change_percentage_24h, high_24h, low_24h} = props.precio;
    
    return (
        <div className='card text-white bg-success'>
            <div className='card-header'>Precio del Bitcoin</div>
            <div className='card-body'>
                <h4 className='card-title h5'>Precio Actual: ${current_price}</h4>
                <div className='d-md-flex justify-content-between'>
                    <p className='card-text'>
                        <span className='font-weight-bold'>Variacion Precio u/24 Hs: {price_change_percentage_24h}%</span>
                    </p>
                    <p className='card-text'>
                        <span className='font-weight-bold'>Mas alto u/24 Hs: ${high_24h}</span>
                    </p>
                    <p className='card-text'>
                        <span className='font-weight-bold'>Mas bajo u/24 Hs: ${low_24h}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Precio;