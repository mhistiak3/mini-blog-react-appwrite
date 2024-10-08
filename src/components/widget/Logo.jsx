export const Logo = ({classNames="text-white"}) => {
  return (
    <div className={"flex items-center  " + classNames}>
      <img src="logo.png" alt="logo" className="w-10 me-2" />
      <span className="text-2xl font-bold ">MinBlog</span>
    </div>
  );}
