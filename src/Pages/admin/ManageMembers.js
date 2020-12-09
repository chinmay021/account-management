import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./ManageMembers.css";
import { addMembers, removeMembers } from "../../axios/requests";

export const AddMembers = () => {
  const [name, setName] = useState("");
  const [sic, setSic] = useState("");
  const [branch, setBranch] = useState("");
  const [contact, setContact] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const newMember = {
      Name: name,
      Sic: sic,
      Branch: branch,
      Contact: contact,
    };
    setName("");
    setSic("");
    setBranch("");
    setContact("");
    console.log(`hello`);
    const message = await addMembers(newMember);
    window.alert(message);
  };

  if (!sessionStorage.getItem("clubName")) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="manage__members">
        <div className="container">
          <div className="text ">Add Member</div>
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label htmlFor="">Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  value={sic}
                  onChange={(e) => setSic(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label htmlFor="">Sic.</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label htmlFor="">Branch</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label htmlFor="">Contact</label>
              </div>
            </div>
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
export const RemoveMembers = () => {
  const [removeName, setRemoveName] = useState("");
  const [removeSic, setRemoveSic] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const deleteMember = {
      Name: removeName,
      Sic: removeSic,
    };
    setRemoveName("");
    setRemoveSic("");
    console.log(`hello`);
    const message = await removeMembers(deleteMember);
    window.alert(message);
  };

  if (!sessionStorage.getItem("clubName")) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="manage__members">
        <div className="container">
          <div className="text">Remove Member</div>
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  value={removeName}
                  onChange={(e) => setRemoveName(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label htmlFor="">Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  value={removeSic}
                  onChange={(e) => setRemoveSic(e.target.value)}
                  required
                />
                <div className="underline"></div>
                <label htmlFor="">Sic.</label>
              </div>
            </div>
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
