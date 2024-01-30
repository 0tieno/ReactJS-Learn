
function Footer(){
    return(
        <>
            <hr />
            <footer className="footer">
                <p>
                    &copy; {new Date().getFullYear()} - My React App
                </p>
            </footer>
        </>
    );
}

export default Footer;