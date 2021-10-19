import s from "./Content.module.css";
import SimpleMap from "./Map/Map";
import People from "./People/People";

function Content() {
    return (
        <div className={s.content}>
            <SimpleMap/>
            <People/>
        </div>
    )
}

export default Content