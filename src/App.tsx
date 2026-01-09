import { useClickRef } from "@make-software/csprclick-ui";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home";
import Swap from "./pages/swap";
import Faucet from "./pages/faucet";
import Earn from "./pages/Earn";

const App = () => {
  const clickRef = useClickRef();

  useEffect(() => {
    console.log("ClickRef:", clickRef);
  }, [clickRef?.on]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faucet" element={<Faucet />} />
      <Route path="/swap" element={<Swap />} />
      <Route path="/earn" element={<Earn />} />
    </Routes>
  );
};

export default App;
