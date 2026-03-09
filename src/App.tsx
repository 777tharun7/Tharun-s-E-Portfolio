/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Navbar, 
  Hero, 
  StrategicValue,
  Skills, 
  Projects, 
  Experience,
  Research,
  Contact,
  NeuralBackground
} from "./components/PortfolioSections";

export default function App() {
  return (
    <main className="relative selection:bg-emerald-500 selection:text-neutral-950">
      <NeuralBackground />
      <Navbar />
      <Hero />
      <StrategicValue />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <Contact />
    </main>
  );
}
