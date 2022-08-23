import './spInputBars.css'




function SpInputBars() {
  return (

    <div className='sp-input-bar'>
      <div className='sp-input-bar_LG'>
        <h4>Local Government</h4>
        <label className='input-bar label '>
          <input
            type='text'
            placeholder="Surulere"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h4>State</h4>
        <label className='input-bar label '>
          <select>
            <option>Lagos</option>
          </select>
        </label>
      </div>


    </div>
  )


}

export default SpInputBars;