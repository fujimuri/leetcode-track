import Column from "./Column"

function columnContainer() {
    // one column has a list of leetcode questions.
    // the other column will have the dragged items.
    // but overall i have to remember the items.
    return (
        <div className="column-container">
            <Column name={"To Do"}/>
            <Column name={"Done"}/>
        </div>
    )
}

export default columnContainer;