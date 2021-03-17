export default function ConnectionPage(props) {
  const { data, role } = props;

  const filtered = data.filter((member) => {
    return member.fields.relationship !== role;
  });
  console.log(filtered);

  //use filter method through entries based on whats in props, get the mentees or mentors
  //output that on the page
  return (
    <div>
      <div className="post-container">
        <form>
          <label htmlFor="post">Make a post</label>
          <input type="text" placeholder="make a post" />
          <label htmlFor="author">Author</label>
          <input type="text" placeholder="Author" />
          <button>Post</button>
        </form>
      </div>
      <div className="connect-container">
        <h3>Let's Connect</h3>
        {filtered.map((person) => {
          const {
            name,
            contact,
            aboutMe,
            relationship,
            language,
          } = person.fields;
          return (
            <div>
              <h1>{name}</h1>
              <p>{language}</p>
              <p>{aboutMe}</p>
              <p>{relationship}</p>
              <p>{contact}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
