import { useState, useEffect } from 'react';
import './App.css';
import ClickArea from './components/ClickArea/ClickArea';
import Store from './components/Store/Store';

function App() {
  const [fans, setFans] = useState(0);
  const [passiveFans, setPassiveFans] = useState(0);
  const [money, setMoney] = useState(0)
  const moneyChance = 1

  useEffect(() => {
    const interval = setInterval(() => {
      setFans((prevFans) => prevFans + passiveFans);

      // 33% de chance de gagner de l'argent
      if (Math.random() < moneyChance) {
        setMoney((prevMoney) => prevMoney + fans * 0.001);
      }
    }, 1000);

    return () => clearInterval(interval); // nettoyage propre
  }, [fans, passiveFans]); // relance si passiveFans change




  return (
    <>
      <ClickArea fans={fans} setFans={setFans} passiveFans={passiveFans} money={money} setMoney={setMoney} />
      <Store fans={fans} setFans={setFans} passiveFans={passiveFans} setPassiveFans={setPassiveFans} money={money} setMoney={setMoney} />
    </>
  );
}

export default App;
