import Menu from './menu';
import TopHeader from './header';
import Footer from './footer';


const Layout = ({children}) => {
    return(
        <div className='Layout'>
            <TopHeader />
            <Menu  />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;