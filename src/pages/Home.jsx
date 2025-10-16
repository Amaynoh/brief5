import React from "react";
import Hero from "../components/Home/Hero";
import DerniersAjouts from "../components/Home/DerniersAjouts";
import SecteursEnTendance from "../components/Home/SecteursEnTendance"
import Evenements from "../components/Home/Evenements";
import StartapDuMois from "../components/Home/StartapDuMois"

export default function Home() {
  return (
    <div>
    <Hero />
    <DerniersAjouts /> 
    <SecteursEnTendance /> 
    <Evenements />
    <StartapDuMois />
    </div>
  );
}
