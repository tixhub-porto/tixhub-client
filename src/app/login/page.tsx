"use client";
import FormLogin from "@/components/FormLogin";
import FormRegister from "@/components/FormRegister";
import { useState } from "react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)
  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <>
      {
        !isRegister ? (<FormLogin onToggle={toggleForm} />) : (<FormRegister onToggle={toggleForm} />)
      }
    </>
  );
}
