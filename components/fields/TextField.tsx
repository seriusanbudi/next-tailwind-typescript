interface iProps {
  label?: string
  placeholder?: string
  type?: "text" | "number" | "email" | "password"
  name: string
  field: any
}

const TextField = (props: iProps) => {
  const {
    label,
    placeholder,
    type,
    name,
    field,
  } = props;

  const style = {
    inputGroup: "w-full mb-6",
    label: "block text-gray-700 text-sm font-bold mb-2",
    input: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }

  return (<div className={style.inputGroup}>
    {label && <label className={style.label}>
      {label}
    </label>}
    <input {...field} className={style.input} id={name} type={type ? type : "text"} placeholder={placeholder}/>
  </div>)
}

export default TextField;