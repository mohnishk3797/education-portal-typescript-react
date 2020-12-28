import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

export default function generateTokenID() {
  return {
    id: uuidv1(),
    token: uuidv4(),
  };
}
// Array.from({ length: 45 }, (_, i) => i + 1976)
