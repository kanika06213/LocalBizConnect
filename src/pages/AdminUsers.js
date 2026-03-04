import { useState } from "react";
import "./../styles/Admin.css";

function AdminUsers() {

  const [users, setUsers] = useState([
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Anita", email: "anita@gmail.com" },
    { id: 3, name: "Ramesh", email: "ramesh@gmail.com" },
    { id: 4, name: "Priya", email: "priya@gmail.com" },
    { id: 5, name: "Amit", email: "amit@gmail.com" },
    { id: 6, name: "Sneha", email: "sneha@gmail.com" },
    { id: 7, name: "Karan", email: "karan@gmail.com" },
    { id: 8, name: "Pooja", email: "pooja@gmail.com" },
    { id: 9, name: "Vikas", email: "vikas@gmail.com" },
    { id: 10, name: "Neha", email: "neha@gmail.com" },
    { id: 11, name: "Arjun", email: "arjun@gmail.com" },
    { id: 12, name: "Simran", email: "simran@gmail.com" },
    { id: 13, name: "Rohit", email: "rohit@gmail.com" },
    { id: 14, name: "Meena", email: "meena@gmail.com" },
    { id: 15, name: "Varun", email: "varun@gmail.com" },
    { id: 16, name: "Nisha", email: "nisha@gmail.com" },
    { id: 17, name: "Sahil", email: "sahil@gmail.com" },
    { id: 18, name: "Kavita", email: "kavita@gmail.com" },
    { id: 19, name: "Deepak", email: "deepak@gmail.com" },
    { id: 20, name: "Anjali", email: "anjali@gmail.com" },
    { id: 21, name: "Yash", email: "yash@gmail.com" },
    { id: 22, name: "Ritu", email: "ritu@gmail.com" },
    { id: 23, name: "Manish", email: "manish@gmail.com" },
    { id: 24, name: "Suman", email: "suman@gmail.com" }
  ]);

  function deleteUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <div className="admin-container">

      <h1>Manage Users</h1>

      <div className="manage-products">

        {users.map((user) => (
          <div key={user.id} className="product-row">

            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteUser(user.id)}
            >
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminUsers;