import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout  = () => {
    return (
    <div className='App'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Sidebar />
        <div className='page'>

            <Outlet/>

        </div>
    </div>
)
}

export default Layout