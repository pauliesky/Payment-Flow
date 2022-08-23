
import './App.css';
import PersonalInfo from './commponents/personalInfo';
import BillingInfo from './commponents/billingInfo';
import BillingInfo2 from './commponents/billingInfo2';
import PurchaseCard from './commponents/purchaseCard';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0)
  return (
    <div className="App">
      {page === 0 && <PersonalInfo onNext={() => setPage(1)} onTab={(value) => setPage(value)} />}
      {page === 1 && <BillingInfo onNext={() => setPage(2)} onTab={(value) => setPage(value)} />}
      {page === 2 && <BillingInfo2 onNext={() => setPage(3)} onTab={(value) => setPage(value)} />}
      {page === 3 && <PurchaseCard />}

    </div>
  );
}

export default App;
