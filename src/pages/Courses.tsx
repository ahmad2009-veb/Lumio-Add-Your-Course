import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import courseDesign from "@/assets/course-design.jpg";
import courseProgramming from "@/assets/course-programming.jpg";
import courseArt from "@/assets/course-art.jpg";
import courseMusic from "@/assets/course-music.jpg";
import courseLanguage from "@/assets/course-language.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getCourse, getCourseByCategory, getCourseByPrice } from "@/reducers/coursesSlice";
import { useLocation } from "react-router-dom";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const location = useLocation();
  const dispatch = useDispatch();
  const allCourses = useSelector((state: RootState) => state.courses.courses);

  const query = new URLSearchParams(location.search);
  const category = query.get("category") || "all";

  useEffect(() => {
    dispatch(getCourseByCategory(category));
  }, [dispatch, category]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our Courses
            </h1>
            <p className="text-xl opacity-90">
              Discover thousands of lessons from expert instructors
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 flex-wrap">
              <Select
                value={selectedCategory}
                onValueChange={(value) => {
                  dispatch(getCourseByCategory(value));
                  setSelectedCategory(value);
                }}
              >
                <SelectTrigger className="w-[200px] bg-background">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Category</SelectItem>
                  <SelectItem value="Languages">Languages</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Programming">Programming</SelectItem>
                  <SelectItem value="Art">Art</SelectItem>
                  <SelectItem value="Music">Music</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedPrice} onValueChange={(value) => {
                dispatch(getCourseByPrice(value))
                setSelectedPrice(value)
              }}>
                <SelectTrigger className="w-[200px] bg-background">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="under50">Under $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="over100">Over $100</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {allCourses.length} courses
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="default" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
