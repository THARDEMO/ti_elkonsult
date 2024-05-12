import './footer.css'
const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return ( 

        <footer>
            <p>©COPYRIGHT ALL RIGHTS RESERVED<br />{year} @ <a target='_blank' href='https://www.thardemo.com'>THARDEMO.COM</a></p>
        </footer>

    )
}

export default Footer;