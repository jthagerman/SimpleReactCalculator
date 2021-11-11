import React from "react";
import PushButton from "./PushButtons";

const Keypad = (props) => {
  return (
    <div>
      <PushButton title="7" func={props.numEntry} />
      <PushButton title="8" func={props.numEntry} />
      <PushButton title="9" func={props.numEntry} />
      <PushButton title="/" func={props.selectOpp} />
      <PushButton title="4" func={props.numEntry} />
      <PushButton title="5" func={props.numEntry} />
      <PushButton title="6" func={props.numEntry} />
      <PushButton title="x" func={props.selectOpp} />
      <PushButton title="1" func={props.numEntry} />
      <PushButton title="2" func={props.numEntry} />
      <PushButton title="3" func={props.numEntry} />
      <PushButton title="-" func={props.selectOpp} />
      <PushButton title="0" func={props.numEntry} />
      <PushButton title="." func={props.numEntry} />
      <PushButton title="+" func={props.selectOpp} />
      <PushButton title="=" func={props.equals} />
    </div>
  );
};

export default Keypad;
