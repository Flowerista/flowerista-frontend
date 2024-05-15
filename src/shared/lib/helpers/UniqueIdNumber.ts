import { v4 as uuidv4 } from 'uuid';

// Генеруємо унікальне числове id
export function generateUniqueId(): number {
  // Генеруємо UUID
  const uuid = uuidv4();

  // Перетворюємо UUID у числовий id
  const id = uuid.split('-').reduce((acc, part) => acc + parseInt(part, 16), 0);

  return id;
}
