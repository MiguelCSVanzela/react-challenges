import "./SassStyle.scss";

const SassComponent = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default SassComponent;
