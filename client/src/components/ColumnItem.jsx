function ColumnItem({ id, content }) {
    return (
        <li key={id}>
            {content}
        </li>
    )
}

export default ColumnItem;