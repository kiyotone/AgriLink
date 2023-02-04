const MadeContainer = (props) => {
  const containerClass = " mx-auto text-center " + props.className;
  return <div className={containerClass}>{props.children}</div>;
};

export default MadeContainer;
