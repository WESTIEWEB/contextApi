interface ISelectInputProps {
    children: React.ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectInput = ( { children, value, onChange }: ISelectInputProps) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <select value={value} className='form-select form-select-lg' onChange={onChange}>
            {children}
          </select>
        </div>
      </div>
    </div>
  )
}

export default SelectInput
