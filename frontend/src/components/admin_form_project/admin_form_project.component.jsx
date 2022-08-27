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
        id="link"
      />
      <label>Personal</label>
      <input
        type="checkbox"
        id="personal"
        defaultValue={data ? data.personal : false}
      />
      <label>Tags</label>
      <select id="tags" className="text-black" multiple={true}>
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
