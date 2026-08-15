function StatsCard({ title, value, icon }) {
  return (
    <div className="stats-card">
      <span className="stats-icon">{icon}</span>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default StatsCard;
