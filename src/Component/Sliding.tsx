const Sliding = (props: any) => {
  return (
    <>
      <li>
        <img src={`../../../assets/images/${props.src}`} alt="" />
        <div className="slide-desc">
          <h3>{props.des}</h3>
        </div>
      </li>
    </>
  );
};

export default Sliding;
