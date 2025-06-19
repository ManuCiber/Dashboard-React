import "./navbar.scss"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>Dashboard</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" />
                <img src="/app.svg" alt="" />
                <img src="/expand.svg" alt="" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/shikamaru.webp" alt="user" />
                    <span>Carlos</span>
                </div>
                <img src="/settings.svg" className="icon" />
            </div>
        </div>
    );
};

export default Navbar;