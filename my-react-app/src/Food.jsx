

function Food(){
    const food1 = "Orange";
    const food2 = "Mango";

    return(
        <>
            <h2>Food</h2>
            <ol>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ol>
            <hr />
        </>
    );
}

export default Food;