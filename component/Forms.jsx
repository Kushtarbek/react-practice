import React from "react";

function Forms({ status }) {
  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  return (
    <form>
      <textarea disabled={status === "submitting"} />
      <br />
      <button disabled={status === "empty" || status === "submitting"}>Submit</button>
      {status === "error" && <p className="Error">Good guess but a wrong answer. Try again!</p>}
    </form>
  );
}

export default Forms;
