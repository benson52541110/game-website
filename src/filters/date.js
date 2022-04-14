export default function getData (time) {
  const date = new Date(time * 1000)
  return date.toLocaleDateString()
}
