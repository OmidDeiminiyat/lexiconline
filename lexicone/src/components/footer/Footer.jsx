import icone from './../../assets/books.png';
import style from './Footer.module.scss';
export const Footer = () => {
    return (
        <>
        <footer className={style.footer}>
            <section>
                <div>
                    <ul>
                        <li>Address:</li>
                        <li>Somestreet 2332</li>
                        <li>Luxamburg</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Conact:</li>
                        <li>Email: somemail@mail.com</li>
                        <li>Phone: 44332343</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>With special thanks to</li>
                        <li>https://dictionaryapi.dev/</li>
                        <li>For the awsome API</li>
                    </ul>
                </div>
                <div>
                    <img src={icone} alt="" />
                </div>
            </section>
        </footer>
        </>
    )
}