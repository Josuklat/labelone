import news from "../../data/news";

export default function NewsSection() {
  return (
    <section>
      <h2>Latest news</h2>

      <div className="news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}