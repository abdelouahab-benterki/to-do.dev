import Search from "./Search";
import AddTaskBtn from "./AddTaskBtn";

const Actions = () => {
  return (
    <div className="flex items-center justify-center gap-12 mt-8 flex-wrap">
      <Search />
      <div className="flex items-center justify-center flex-wrap gap-6">
        <AddTaskBtn />
      </div>
    </div>
  );
};

export default Actions;
