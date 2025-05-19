import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { List, ListItem, ListItemText } from '@mui/material'
import { CSSProperties, useState } from 'react'

export default function Sortable() {
  const [items, setItems] = useState([...Array(5).keys()])

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id as number)
        const newIndex = items.indexOf(over.id as number)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        <List>
          {items.map((item) => (
            <SortableItem key={item} id={item} />
          ))}
        </List>
      </SortableContext>
    </DndContext>
  )
}

function SortableItem({ id }: { id: number }) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id })

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ListItem>
        <ListItemText>sortable, id: {id}</ListItemText>
      </ListItem>
    </div>
  )
}
