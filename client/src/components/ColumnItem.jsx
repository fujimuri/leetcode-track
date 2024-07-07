function ColumnItem({ id, content, handleOnDrag }) {
    return (
        <li className="column-item"
            draggable
            onDragStart={(e) => handleOnDrag(e, id, content)}
            key={id}>
            {content}
        </li>
    )
}

export default ColumnItem;