const MadeContainer = (props) => {
  const containerClass = "mx-auto my-24 " + props.className;
  return <div className={containerClass}>{props.children}</div>;
};

export default MadeContainer;
