import { useNavigate } from "react-router-dom";

const models = [
  "NoticiasCortas",
  "Obras",
  "MapaDistrito",
  "Alertas",
  "Queja",
  "Solicitud",
  "PuntoReciclaje",
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {models.map((model) => (
          <button
            key={model}
            onClick={() => navigate(`/create-${model.toLowerCase()}`)}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            + Crear {model}
          </button>
        ))}
      </div>
    </main>
  );
}
