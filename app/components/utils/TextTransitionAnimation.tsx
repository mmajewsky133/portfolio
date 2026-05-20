"use client";

import React from "react";
import TextTransition, { presets } from "react-text-transition";

export default function TextTransitionAnimation({ list }: { list: String[] }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Prevent animation queue buildup when the tab is inactive
      if (typeof document !== 'undefined' && !document.hidden) {
        setIndex((index) => index + 1);
      }
    }, 2500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <TextTransition 
      springConfig={presets.slow} 
      inline={true} 
      style={{ whiteSpace: "nowrap" }}
    >
      {list[index % list.length]}
    </TextTransition>
  );
}
