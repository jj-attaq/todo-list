export default function Button({value, onClick, style}) {
    return (
        <button className={`${style}`} onClick={onClick} >{value}</button>
    );
}
