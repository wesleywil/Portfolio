import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { close } from "../../redux/adminForm/adminFormSlice";
import AdminFormProject from "../admin_form_project/admin_form_project.component";

import {
  updateProject,
  createProject,
} from "../../redux/projects/projectsSlice";
import { createTag, updateTag } from "../../redux/tags/tagsSlice";
import {
  created,
  updated,
  done,
} from "../../redux/messageStatus/messageStatusSlice";

const AdminForm = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.adminForm.title);
  const data = useSelector((state) => state.adminForm.data);
  const isProject = useSelector((state) => state.adminForm.isproject);
  const error = useSelector((state) => state.projects.error);

  useEffect(() => {
    console.log("PROJECT => ", isProject);
    console.log("ERRROR_> ", error);
  }, [dispatch, text, data, isProject]);

  const submitForm = (e) => {
    e.preventDefault();
    if (isProject === true) {
      const tagsArray = Array.from(
        e.target.tags.selectedOptions,
        (option) => option.value
      );
      const projectData = {
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        link: e.target.elements.link.value,
        tags: tagsArray,
        personal: e.target.elements.personal.value,
      };
      const infoProject = {
        data: data,
        newProject: projectData,
      };
      {
        data
          ? dispatch(updateProject(infoProject))
          : dispatch(createProject(infoProject));
      }
    } else {
      const tagData = {
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
      };
      const infoTag = {
        data: data,
        newTag: tagData,
      };
      {
        data ? dispatch(updateTag(infoTag)) : dispatch(createTag(infoTag));
      }
    }
    if (data) {
      dispatch(updated());
      setTimeout(() => {
        dispatch(done());
      }, 3000);
    } else {
      dispatch(created());
      setTimeout(() => {
        dispatch(done());
      }, 3000);
    }
  };

  return (
    <div>
      <h1 className="text-white text-3xl uppercase">{text}</h1>
      <form className="flex flex-col text-white text-xl" onSubmit={submitForm}>
        <label>Title</label>
        <input
          type="text"
          className="text-black font-semibold px-2"
          defaultValue={data ? data.title : ""}
          id="title"
        />
        <label>Description</label>
        <textarea
          className="text-black font-semibold px-2"
          defaultValue={data ? data.description : ""}
          id="description"
        ></textarea>
        {isProject ? (
          <AdminFormProject data={data} />
        ) : data ? (
          data.link ? (
            <AdminFormProject data={data} />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <div className="flex gap-2 justify-center my-2">
          <button className="bg-red-400 hover:bg-red-500 text-2xl font-semibold px-2 rounded-xl">
            Submit
          </button>
          <button
            type="button"
            className="bg-blue-400 hover:bg-blue-500 text-2xl font-semibold px-2 rounded-xl"
            onClick={() => dispatch(close())}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
