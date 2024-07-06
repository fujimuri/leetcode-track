import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ColumnItem from './ColumnItem';

function Column({ name }) {
    const defaultItems = [
        {content: "Pet Sophie", id: uuidv4() }
    ]

    const [items, setItems] = useState(defaultItems)
    
    return (
        <div className="column">
            <h3 className="column-title">
                {name}
            </h3>
            <ul className="column-items">
                {items.map((item) => (
                    <ColumnItem id={item.id} content={item.content} />
                ))}
            </ul>
            <button className="add-item-btn btn">
                add item
            </button>
        </div>
    )
}

export default Column;