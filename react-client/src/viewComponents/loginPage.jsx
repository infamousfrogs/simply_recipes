import React from 'react';


const loginPage = (props) => (
  <div className="container">
    <div className="row">
      <div className="span12">
        <form className="form-horizontal" action='/login' method="POST">
          <fieldset>
            <div id="legend">
              <legend className="">Login</legend>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="username">Username</label>
              <div className="controls">
                <input type="text" id="username" name="username" placeholder="" className="input-xlarge" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="password">Password</label>
              <div className="controls">
                <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
              </div>
            </div>
            <div className="control-group">
              <div className="controls">
                <button className="btn btn-success">Login</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
);

export default loginPage;