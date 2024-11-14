import "./App.css";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/Navbar/NavBar";
import PopularCourses from "./Component/PopularCourses/PopularCourses";
import Provide from "./Component/Provide/Provide";
import Testimonial from "./Component/Testimonial/Testimonial";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <Provide></Provide>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default App;
