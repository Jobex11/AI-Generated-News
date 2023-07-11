import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "1580e20aa848fedb98a83f9a5196b1562e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: () => {},
    });
  }, []);
  return <div>Alan AI News Application</div>;
};

export default App;
