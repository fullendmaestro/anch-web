import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
          Cspr Cross chain liquidity
        </h1>
        <Link to="/swap ">
          <Button size="sm">Swap</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
