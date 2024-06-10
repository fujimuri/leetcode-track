import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Column() {
    const defaultItems = [
        {name: "Pet Sophie", id: uuidv4() }
    ]
    const [items, setItems] = useState(defaultItems)
    
    return (
        <div className="column">
            <h3 className="column-title">
                Column Name
            </h3>
            <ul className="items">
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
            <button className="add-items-btn btn">
                add items
            </button>
        </div>
    )
}

export default Column;