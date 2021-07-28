import Link from 'next/link';

const Navegacion = () => {
    return (
    <nav className='navbar navbar-expand navbar-dark bg-primary'>
        <div className='container'>
            <Link href='/'><a className='navbar-brand'>Todo Bitcoin</a></Link>
            <div className='collapse navbar-collapse ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link href='/'><a className='nav-link'>Inicio</a></Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/nosotros'><a className='nav-link'>Nosotros</a></Link>
                    </li>
                </ul>
            </div>
        </div>
        {/*<style jsx>{`
            h1{
                color: blue
            }
            ul{
                background-color: #333;
                list-style: none;
                display: flex;
            }
            ul li {
                padding: .5rem 0;
                margin-right: 1rem;
            }
            ul li a {
                font-size: 1.2rem;
                color: white;
                text-decoration: none;
            }
        `}
        </style>*/}
    </nav>)
}

export default Navegacion;