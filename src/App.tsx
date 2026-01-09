import { useClickRef } from "@make-software/csprclick-ui";
import { Button } from "./components/ui/button";
import { useEffect } from "react";

const App = () => {
  const clickRef = useClickRef();

  useEffect(() => {
    console.log("ClickRef:", clickRef);
  }, [clickRef?.on]);

  return (
    <div>
      <Button>Hello world</Button>
      <Button
        onClick={() => {
          clickRef.connect("casper-wallet");
        }}
      >
        Connect
      </Button>
    </div>
  );
};

export default App;
