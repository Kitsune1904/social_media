import classes from "./Main.module.css";
import Posts from "./Posts/Posts";
const Main = () => {
    return(
        <div className={classes.main_holder}>
            <div className={classes.bannerHolder}>
            </div>
            <Posts />
        </div>
    )
}

export default Main