import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ColumnItem from './ColumnItem';

function Column({ name }) {
    const defaultItems = [
        {content: "Pet Sophie", id: uuidv4() }
    ]

    const [items, setItems] = useState(defaultItems);

    function handleOnDrag(e, id, content) {
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("content", content);
    }

    function handleDrop(e) {
        const id = e.dataTransfer.getData("id");
        const content = e.dataTransfer.getData("content");
        console.log(id)
        console.log(content)
        setItems([...items, {id, content}])
    }

    function handleDragOver(e) {
        e.preventDefault();
    }
    
    return (
        <div className="column" onDrop={handleDrop} onDragOver={handleDragOver}>
            <h3 className="column-title">
                {name}
            </h3>
            <ul className="column-items">
                {items.map((item) => (
                    <ColumnItem
                    id={item.id}
                    content={item.content}
                    handleOnDrag={handleOnDrag} />
                ))}
            </ul>
            <button className="add-item-btn btn">
                add item
            </button>
        </div>
    )
}

export default Column;