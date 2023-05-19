
const Blog = () => {
  return (
    <div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-indigo-600 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-indigo-600">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?{" "}
        </div>
        <div className="collapse-content bg-indigo-600 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
          <p>
            Refresh tokens allow you to balance your users' access needs with
            your organization's security practices. Access tokens help users get
            the resources they need to complete their tasks, but such tokens can
            also expose your organization to data compromise or other malicious
            actions if a hacker is able to steal them.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-indigo-600 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content bg-indigo-600 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
          <p>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-indigo-600 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
          What is express js? What is Nest JS ?{" "}
        </div>
        <div className="collapse-content bg-indigo-600 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
          <p>
            Express is a minimalist and flexible framework that is easy to use
            and has a large community of developers. NestJS, on the other hand,
            is a newer framework that provides additional features such as
            dependency injection, a modular architecture, and an intuitive CLI.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-indigo-600 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
          What is MongoDB aggregate and how does it work ?{" "}
        </div>
        <div className="collapse-content bg-indigo-600 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
          <p>
            What is Aggregation in MongoDB? Aggregation is a way of processing a
            large number of documents in a collection by means of passing them
            through different stages. The stages make up what is known as a
            pipeline. The stages in a pipeline can filter, sort, group, reshape
            and modify documents that pass through the pipeline
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
