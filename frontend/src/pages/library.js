import en from "../i18n/en";

export default function Library() {
  return (
    <div>
      <h1>{en.libraryTitle}</h1>

      <p>
        {en.libraryDescription}
      </p>

      <div>
        <p>{en.libraryEmpty}</p>
      </div>
    </div>
  );
}