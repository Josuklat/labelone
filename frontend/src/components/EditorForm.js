export default function EditorForm({ template, values, setValues }) {
  return (
    <div>
      <h3>Fields</h3>
      <form>
        {template.fields.map((field) => (
          <div key={field.id}>
            <label>
              {field.label}
              <br />
              <input
                type={field.type === "barcode" ? "text" : field.type}
                placeholder={field.label}
                value={values[field.id]}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [field.id]: e.target.value,
                  })
                }
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}