import './paymentAdvice.css'


function PaymentAdvice() {
  return (
    <div className='payment-container'>
      <div className='PC1'>
        <div className='box  box-1'>Item Name</div>
        <div className='box box-2'>N Price</div>
      </div>
      <div className='PC2'>
        <div className='box box-3'>Data Science</div>
        <div className='box box-4'>50,000.00</div>
      </div>
      <div className='PC3'>
        <div className='box box-5'>Shipping</div>
        <div className='box box-6'>0.00</div>
      </div>

      <div className='PC5'>
        <hr></hr>
      </div>

      <div className='PC4'>
        <div className='box box-7'>Total</div>
        <div className='box box-8'>N50,000.00</div>
      </div>

    </div>

  )
}

export default PaymentAdvice;