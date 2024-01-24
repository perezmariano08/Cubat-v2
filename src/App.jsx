import { useEffect } from "react"
import Routes from "./routes/Routes"
import { useSelector } from "react-redux";

function App() {
  const hiddenCart = useSelector((state) => state.cart.hidden)
  useEffect(() => {
    if (!hiddenCart) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [hiddenCart]);
  return (
    <>
      <Routes/>
    </>
  )
}

export default App
