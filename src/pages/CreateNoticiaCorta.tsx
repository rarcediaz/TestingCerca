import React, { useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useNavigate } from "react-router-dom";

const client = generateClient<Schema>();

export default function CreateNoticiaCorta() {
  const [nombre, setNombre] = useState("");
  const [fechaEscrita, setFechaEscrita] = useState("");
  const [autor, setAutor] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [imagen, setImagen] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await client.models.NoticiasCortas.create({
        nombre,
        fechaEscrita: new Date(fechaEscrita),
        autor,
        mensaje,
        imagen: imagen || undefined,
      });
      alert("Noticia Corta creada!");
      navigate("/"); // Navigate back to dashboard
    } catch (error) {
      console.error("Error creating noticia corta:", error);
      alert("Error creating noticia corta.");
    } finally {
      setLoading(false);
    }
  }

  return (
        <form
    onSubmit={handleSubmit}
    style={{
        maxWidth: 600,
        margin: "auto",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: "1rem", // space between fields
    }}
    >
    <h1>Crear Noticia Corta</h1>

    <label style={{ display: "flex", flexDirection: "column" }}>
        Nombre:
        <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        style={{ padding: "8px", fontSize: "1rem" }}
        />
    </label>

    <label style={{ display: "flex", flexDirection: "column" }}>
        Fecha Escrita:
        <input
        type="date"
        value={fechaEscrita}
        onChange={(e) => setFechaEscrita(e.target.value)}
        required
        style={{ padding: "8px", fontSize: "1rem" }}
        />
    </label>

    <label style={{ display: "flex", flexDirection: "column" }}>
        Autor:
        <input
        type="text"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        required
        style={{ padding: "8px", fontSize: "1rem" }}
        />
    </label>

    <label style={{ display: "flex", flexDirection: "column" }}>
        Mensaje:
        <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
        rows={5}
        style={{ padding: "8px", fontSize: "1rem" }}
        />
    </label>

    <label style={{ display: "flex", flexDirection: "column" }}>
        Imagen URL (opcional):
        <input
        type="text"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        style={{ padding: "8px", fontSize: "1rem" }}
        />
    </label>

    <button
        type="submit"
        disabled={loading}
        style={{
        padding: "12px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: 4,
        cursor: loading ? "not-allowed" : "pointer",
        fontSize: "1rem",
        }}
    >
        {loading ? "Creando..." : "Crear"}
    </button>
    </form>

  );
}
