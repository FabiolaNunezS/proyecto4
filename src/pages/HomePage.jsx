import { PrincipalInformation } from "../components/PrincipalInformation";
import { Formulario } from "../components/Formulario";
import { Ubicacion } from "../components/Ubicacion";
import { Hero } from "../components/Hero";

export const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <PrincipalInformation />
        <Formulario />
        <Ubicacion />
      </main>
    </>
  );
};
