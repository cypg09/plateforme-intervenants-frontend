export default function FormCheckbox({ labelFor }) {
  return(
    <>
      <label htmlFor={labelFor}>{labelFor}</label>
      <input
        className="m-2"
        type="checkbox"
        label={labelFor}
      />
    </>
  )
}