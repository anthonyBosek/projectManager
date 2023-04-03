// need to add the update client form
// need to add the update client button
// need to add the update client function
// need to add the update client route
// need to add the update client link
// 4/3/23

const UpdateClient = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card w-50">
          <div className="card-body">
            <h1 className="card-title">Update Client</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="phone" className="form-control" id="phone" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateClient;
