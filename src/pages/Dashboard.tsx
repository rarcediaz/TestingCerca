import React from "react";

export default function Dashboard() {
  const models = [
    "NoticiasCortas",
    "Obras",
    "MapaDistrito",
    "Alertas",
    "Queja",
    "Solicitud",
    "PuntoReciclaje",
  ];

  function handleCreate(modelName: string) {
    alert(`Create new ${modelName} (form not implemented yet)`);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>Select a service to create a new entry:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {models.map((model) => (
          <button
            key={model}
            onClick={() => handleCreate(model)}
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: 6,
              border: "1px solid #ccc",
              backgroundColor: "#f0f0f0",
            }}
          >
            Create {model}
          </button>
        ))}
      </div>
    </main>
  );
}
