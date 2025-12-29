/**
 * EditorPreview
 * Visual representation of the label.
 * No state, no logic, only rendering.
 */
export default function EditorPreview({ template, values }) {
  return (
    <div className="label-preview">
      <div className="label-canvas">
        {/* Header / title */}
        <div className="label-header">
          <strong>{template.name}</strong>
        </div>

        {/* Fields */}
        <div className="label-fields">
          {template.fields.map((field) => (
            <div key={field.id} className="label-field">
              <span className="label-field-name">{field.label}</span>
              <span className="label-field-value">
                {values[field.id] || "—"}
              </span>
            </div>
          ))}
        </div>

        {/* Fake barcode / placeholder */}
        <div className="label-barcode">
          <div className="barcode-placeholder" />
        </div>
      </div>
    </div>
  );
}