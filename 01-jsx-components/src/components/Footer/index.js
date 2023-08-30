function Footer(props){
    // { name, text }
    // props
    return (
        <>
            <h1>The name of component is {props.name} - ReactJS Course</h1>
            <p>{props.text}</p>
        </>
    );
}

export default Footer;