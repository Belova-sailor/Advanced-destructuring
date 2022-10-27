export default function getData(character) {
  const array = [];
  const { special } = character;
  for (const keys of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = keys;
    array.push({
      id,
      name,
      icon,
      description,
    });
  }
  return array;
}
