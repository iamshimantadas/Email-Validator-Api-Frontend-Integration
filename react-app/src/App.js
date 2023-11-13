import { useState } from "react";

function App() {

  const [myemail, setEmail] = useState();

  const saveForm = (event) => {
    event.preventDefault();
    console.warn(myemail);

    var email = myemail;
    let item = { email };
    fetch("https://microcodes.in/emailvalidatorapi/public/api/validate_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
      })


  }

  return (
    <>

      <br />
      <br />


      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">

          {/*  form */}
          <form onSubmit={saveForm}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" value={myemail} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
        <div className="col-2"></div>
      </div>

    </>
  );
}

export default App;
