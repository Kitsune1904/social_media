import classes from "./NavBar.module.css";
const NavBar = () => {
    return(
        <div className={classes.navBar_holder}>
            <ul>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#"}>About</a></li>
                <li><a href={"#"}>Gallery</a></li>
                <li><a href={"#"}>News</a></li>
                <li><a href={"#"}>Settings</a></li>
            </ul>
        </div>
    )
}

export default NavBar