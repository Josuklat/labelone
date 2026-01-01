import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import templates from "../../data/templates";
import EditorForm from "../../components/editor/EditorForm";
import EditorPreview from "../../components/editor/EditorPreview";
import "./Editor.css";

export default function Editor() {
  // Get template id from URL: /editor/:templateId
  const { templateId } = useParams();

  // Find the selected template by id
  const template = templates.find((t) => t.id === templateId);

  /**
   * Create initial values object from template fields
   * This runs ONLY when template changes
   * Example:
   * {
   *   lotNumber: "",
   *   origin: "",
   *   destination: ""
   * }
   */
  const initialValues = useMemo(() => {
    if (!template) return {};

    return template.fields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {});
  }, [template]);

  /**
   * Store user input values
   * This state is shared between form and preview
   */
  const [values, setValues] = useState(initialValues);

  // If template does not exist, show error
  if (!template) {
    return <p>Template not found</p>;
  }

  return (
    <div className="editor-page">
      <h1>Label editor</h1>
      <h2>{template.name}</h2>
      <p>{template.description}</p>

      {/* Main editor layout */}
      <div className="editor-layout">
        
        {/* Left column: form */}
        <div className="editor-left">
          <EditorForm
            template={template}
            values={values}
            setValues={setValues}
          />
        </div>

        {/* Right column: preview */}
        <div className="editor-right">
          <EditorPreview
            template={template}
            values={values}
          />
        </div>

      </div>
    </div>
  );
}