import en from "../../i18n/en";
import templates from "../../data/templates";
import TemplateCard from "../../components/library/TemplateCard";

export default function Library() {
  return (
    <div>
      <h1>{en.libraryTitle}</h1>
      <p>{en.libraryDescription}</p>

      <div className="template-grid">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            name={template.name}
            description={template.description}
          />
        ))}
      </div>
    </div>
  );
}