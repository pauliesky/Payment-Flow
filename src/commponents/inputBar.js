import './inputBar.css'


function InputBar(props) {

  return (

    <div className='input-bar'>
      <h4>{props.name}</h4>
      <label className='input-bar-label '> <p>{props.label}</p>
        <input
          type='text'
          placeholder={props.placeholder}
        // value={name}
        // onChange={(e) => setName(e.target.value)}
        />
      </label>

    </div>
  )

}

export default InputBar;