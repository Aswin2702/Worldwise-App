import AppNav from "../Components/AppNav";
import PageNav from "../Components/PageNav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      <Link to={"/app"}>Go to App</Link>
    </div>
  );
}

export default Home;
