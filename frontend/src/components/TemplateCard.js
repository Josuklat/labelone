import { useNavigate } from "react-router-dom";

export default function TemplateCard({ id, name, description }) {
  const navigate = useNavigate();

  return (
    <div className="template-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => navigate(`/editor/${id}`)}>
        Use template
      </button>
    </div>
  );
}