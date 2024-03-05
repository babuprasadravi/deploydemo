
function Table({userdata , handleDelete}) {
  return (
    <div className="container">
      <table className="table table-striped">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {userdata.map((i,index) => (
        <tr key = {index} >
        <th scope="row">{index+1}</th>
        <td>{i.fname}</td>
        <td>{i.lname}</td>
        <td>{i.mail}</td>
        <td>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </td>
      </tr>
    ))}
    
  </tbody>
</table>
    </div>
  );
}

export default Table;
