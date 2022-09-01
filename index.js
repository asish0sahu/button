const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
  //  Write your code here.
};

const element = (
  <div className="bg-page">
    <h1 className="heading">Social Buttons</h1>
    <div className="text-center d-flex flex-row justify-content-center">
      <Button buttonText="Like" className="like1" />
      <Button buttonText="Comment" className="comment1" />
      <Button buttonText="Share" className="share1" />
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
