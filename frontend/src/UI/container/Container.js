const Container = (props) => {
  const containerClass = `max-w-[1200px] mx-auto` + props.className;
  return <div className={containerClass}>{props.children}</div>;
};
