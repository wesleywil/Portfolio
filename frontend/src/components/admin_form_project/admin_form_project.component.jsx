import { useSelector } from "react-redux";

import { allTags } from "../../redux/tags/tagsSlice";

const AdminFormProject = ({ data }) => {
  const tags = useSelector(allTags);
  return (
    <>
      <label>Link</label>
      <input
        type="text"
        className="text-black font-semibold px-2"
        defaultValue={data ? data.link : ""}
      />
      <label>Personal</label>
      <input type="checkbox" defaultValue={data ? data.personal : false} />
      <label>Tags</label>
      <select className="text-black" multiple={true}>
        {tags.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
};
export default AdminFormProject;
