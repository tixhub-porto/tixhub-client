"use client";
import FormLogin from "@/components/FormLogin";
import FormRegister from "@/components/FormRegister";
import { useLoading } from "@/context/LoadingContext";
import { useEffect, useState } from "react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)
  const { setLoading } = useLoading();
  const toggleForm = () => setIsRegister(!isRegister);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {
        !isRegister ? (<FormLogin onToggle={toggleForm} />) : (<FormRegister onToggle={toggleForm} />)
      }
    </>
  );
}
