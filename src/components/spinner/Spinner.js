import spinner from "./spinner.svg";

const Spinner = () => {
    return(
        <img src = {spinner} style={{display: 'block',
            margin: 'auto',
            marginTop: '100px'}}/>
    );
}

export default Spinner;