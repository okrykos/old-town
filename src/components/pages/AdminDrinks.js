import Table from "react-bootstrap/Table";
import {
  doc,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import db from "../../firebase";

import { useState, useEffect } from "react";
import "./Admin.css";
function AdminDrinks() {
  const [drinks, setDrinks] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    type: "",
    recommended: false,
    weight: 0,
    price: 0,
  });

  const updateDrinks = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(
    () =>
      onSnapshot(collection(db, "drinks"), (snapshot) =>
        setDrinks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const handleAdd = async () => {
    const collectionRef = collection(db, "drinks");
    await addDoc(collectionRef, newItem);
  };
  const handleDelete = async (id) => {
    const docRef = doc(db, "drinks", id);
    deleteDoc(docRef);
  };
  return (
    <>
      <div className="admin-container">
        <Table striped bordered size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>

              <th>Weigth</th>
              <th>Price</th>
              <th>Recommended</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <form id="addForm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    name="name"
                    onChange={updateDrinks}
                  />
                </form>
              </td>
              <td>
                <input
                  form="addForm"
                  type="text"
                  className="form-control"
                  placeholder="Type"
                  aria-label="Type"
                  name="type"
                  onChange={updateDrinks}
                />
              </td>

              <td>
                <input
                  form="addForm"
                  type="number"
                  className="form-control"
                  placeholder="Weight"
                  aria-label="Weight"
                  name="weight"
                  onChange={updateDrinks}
                />
              </td>
              <td>
                <input
                  form="addForm"
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  aria-label="Price"
                  name="price"
                  onChange={updateDrinks}
                />
              </td>
              <td>
                <div className="col-12">
                  <span>is recommended ?</span>
                  <div className="form-check">
                    <input
                      form="addForm"
                      className="form-check-input"
                      type="radio"
                      id="gridCheck"
                      aria-label="Recommended"
                      name="recommended"
                      value={true}
                      onChange={updateDrinks}
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      form="addForm"
                      className="form-check-input"
                      type="radio"
                      id="gridCheck2"
                      aria-label="Recommended"
                      name="recommended"
                      value={false}
                      onChange={updateDrinks}
                    />
                    <label className="form-check-label" htmlFor="gridCheck2">
                      No
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </td>
            </tr>
            {drinks.map((drinks) => (
              <tr key={drinks.id}>
                <td>{drinks.name}</td>
                <td>{drinks.type}</td>

                <td>{drinks.weight}</td>
                <td>{drinks.price}</td>
                <td>{drinks.recommended}</td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={() => handleDelete(drinks.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AdminDrinks;
