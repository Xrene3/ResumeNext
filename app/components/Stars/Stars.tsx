"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import type { ISourceOptions } from "@tsparticles/engine";

function Stars() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options: ISourceOptions = {
    preset: "stars",
    fullScreen: { enable: true, zIndex: -1 },
    background: {
        color: "transparent",
    },
  };

  return ready ? <Particles id="tsparticles" options={options} /> : null;
}

export default Stars;