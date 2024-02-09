export default function Button(props) {
  const { btnName, customClass, eventClick } = props;

  const strClass = customClass || "default-class";
  return (
    <button className={strClass} onClick={eventClick}>
      {btnName}
    </button>
  );
}
