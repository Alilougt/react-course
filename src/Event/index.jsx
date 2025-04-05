export default function Event() {
    const handleClick  = () => {
        alert("Booom !!!")
    }
    return (
        <>
            <button onClick={handleClick}>
                click
            </button>
        </>
    )
}