function DashboardCard({
  title,
  count,
  icon,
}) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>
        {icon}
      </div>

      <h3>{title}</h3>

      <h1>{count}</h1>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow:
      "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
    transition: "0.3s",
  },

  icon: {
    fontSize: "40px",
    marginBottom: "10px",
  },
};

export default DashboardCard;