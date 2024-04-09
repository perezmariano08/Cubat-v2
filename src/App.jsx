import { useEffect } from "react"
import Routes from "./routes/Routes"
import { useSelector } from "react-redux";

function App() {
  const hiddenCart = useSelector((state) => state.cart.hidden)
  const hiddenMenu = useSelector((state) => state.menu.hidden)
  useEffect(() => {
    if (!hiddenCart) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [hiddenCart]);
  useEffect(() => {
    if (!hiddenMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [hiddenMenu]);
  return (
    <>
      <Routes/>
    </>
  )
}

export default App
