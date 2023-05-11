const Header = () => {
    return(
        <>
            <header>
                <div className="row">
                    <div className="col">
                        <img className="style-logo" src="images/logo.png" alt="logo"/>
                        <nav className="style-nav">
                                <ul>
                                    <li><a href="#">acchitecture</a></li>
                                    <li><a href="#">Travel</a></li>
                                    <li><a href="#">Art</a></li>
                                    <li><a href="#">Food</a></li>
                                </ul>
                        </nav>                       
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;