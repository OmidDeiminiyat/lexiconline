import background from './../../assets/Library.jpg'
import style from './Header.module.scss';
export const Header = () => {
    return(
        <>
        <section className={style.headers}>
            <img src={background} alt="" />
            <h1>lexiconline</h1>
        </section>
        </>
    )
}