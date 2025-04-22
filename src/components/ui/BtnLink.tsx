import { Link } from "react-router";

export default function BtnLink({path ,title} :{path :string ,title :string}) {
  return <>
  <Link className="bg-main-color text-white p-4 rounded-sm" to={path}>{title}</Link>
  </>;
}
