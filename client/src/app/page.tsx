"use client";
// import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Form } from "../../components/form";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main className="p-3" style={{ maxWidth: 500 }}>
      <Form />
    </main>
  );
}
