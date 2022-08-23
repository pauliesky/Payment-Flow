import './button.css'



function Button({ next, value }) {

  return (
    <div className="button-container">
      <input
        className=' next'
        type='submit'
        value={value} onClick={next} />

      <input
        className='close'
        type='submit'
        value='Cancel Payment' />
    </div>

  )
}

export default Button;