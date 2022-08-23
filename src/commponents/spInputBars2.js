import './spInputBars2.css'


function SpInputBars2() {
  return (

    <div className='sp-input-bar'>
      <div className='sp-input-bar_CD'>
        <h4>Card Details</h4>
        <label className='input-bar label '>
          <input
            type='text'
            placeholder='44960                 44960                 44960                44960'
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h4>Expiry Date</h4>
        <label className='input-bar label '>
          <input
            type='text'
            placeholder='04/23'
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h4>CVV</h4>
        <label className='input-bar label '>
          <input
            type='text'
            placeholder='923'
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>


    </div>
  )


}

export default SpInputBars2;