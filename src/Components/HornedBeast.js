export default function HornedBeast({ title, imgUrl, description }) {
  return (
    <>
      <h2>{title}</h2>
      <img src={imgUrl} alt={title} />
      <p>{description}</p>
    </>
  )
}
