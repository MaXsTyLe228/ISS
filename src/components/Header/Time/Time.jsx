import s from '../Header.module.css'

function Time() {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
    };


    let min = date.getMinutes()
    if (min < 10) {
        min = "0" + min
    }
    return (
        <div className={s.block}>
            <div className={s.title}>Current UTC
                time: {`${date.getHours()}:${min}`}
            </div>
            <div
                className={s.text}>{`${date.toLocaleString("ru", options)}`}</div>
        </div>
    )
}

export default Time