export default function FormCheckbox({ placeholder, labelFor }) {
  return(
    <>
      <label for={labelFor}>{labelFor}</label>
      <input
        className="m-2"
        type="checkbox"
        label={labelFor}
      />
    </>
  )
}