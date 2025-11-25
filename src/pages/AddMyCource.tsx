import { useState } from "react";
import { BookOpen } from "lucide-react";
import { useDispatch } from "react-redux";
import { AddNewCourse } from "@/reducers/coursesSlice";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [imageUrl, setImageUrl] = useState("");

    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    const [addtitle, setaddtitle] = useState("")
    const [addinstructor, setaddinstructor] = useState("")
    const [addimg, setaddimg] = useState("")
    const [addprice, setaddprice] = useState("")
    const [addreating, setaddreating] = useState("")
    const [addstudents, setaddstudents] = useState("")
    const [addduraction, setaddduraction] = useState("")
    const [addcategory, setaddcategory] = useState("")
    const [addinstuctorid, setaddinstuctorid] = useState("")
    
    const [modalOpen, setModalOpen] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);

    function AddICourse() {
        const add = {
          title: addtitle,
          instructor: addinstructor,
          image: addimg,
          price: addprice,
          rating: addreating,
          students: addstudents,
          duration: addduraction,
          category: addcategory,
          instructorId:addinstuctorid,
        };
        dispatch(AddNewCourse(add))
        if (AddICourse) {
          setSuccess(true);
          setModalOpen(true);
        } else {
          setSuccess(false);
          setModalOpen(true);
        }

    }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 shadow-lg">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Add New Course
          </h1>
          <p className="text-muted-foreground text-lg">
            Create and publish your course to reach thousands of students
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-2xl border border-border backdrop-blur-sm">
          <div className="space-y-8">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-foreground"
              >
                Course Title
              </label>
              <input
                value={addtitle}
                onChange={(e) => setaddtitle(e.target.value)}
                id="title"
                type="text"
                placeholder="e.g., Complete Web Development Bootcamp"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
              />
            </div>

            {modalOpen && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-white shadow-xl rounded-xl p-6 w-80 text-center animate-fadeIn">
                  {success ? (
                    <>
                      <h2 className="text-xl font-bold text-green-600">
                        Success!
                      </h2>
                      <p className="text-gray-600 mt-2">
                        Курси шумо бомуваффақият добавит шуд.
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-red-600">
                        Failed!
                      </h2>
                      <p className="text-gray-600 mt-2">
                        Курс добавит нашуд. Аз нав кӯшиш кунед.
                      </p>
                    </>
                  )}

                  <button
                    className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
                    onClick={() => {
                      setModalOpen(false);
                      success ? navigate("/") : navigate("/about");
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="instructor"
                  className="block text-sm font-semibold text-foreground"
                >
                  Instructor Name
                </label>
                <input
                  value={addinstructor}
                  onChange={(e) => setaddinstructor(e.target.value)}
                  id="instructor"
                  type="text"
                  placeholder="e.g., John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold text-foreground"
                >
                  Category
                </label>
                <select
                  value={addcategory}
                  onChange={(e) => setaddcategory(e.target.value)}
                  id="category"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50 cursor-pointer"
                >
                  <option value="Design">Design</option>
                  <option value="Programming">Programming</option>
                  <option value="Art">Art</option>
                  <option value="Music">Music</option>
                  <option value="Languages">Languages</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="instructor"
                  className="block text-sm font-semibold text-foreground"
                >
                  instructorId
                </label>
                <input
                  value={addinstuctorid}
                  onChange={(e) => setaddinstuctorid(e.target.value)}
                  id="instructorid"
                  type="text"
                  placeholder="Instructo Id"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="image"
                className="block text-sm font-semibold text-foreground"
              >
                Course Image URL
              </label>
              <input
                value={addimg}
                onChange={(e) => setaddimg(e.target.value)}
                id="image"
                type="url"
                placeholder="https://example.com/course-image.jpg"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
              />
              {imageUrl && (
                <div className="mt-4 rounded-xl overflow-hidden border border-border shadow-md">
                  <img
                    src={imageUrl}
                    alt="Course preview"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-foreground"
                >
                  Price ($)
                </label>
                <input
                  value={addprice}
                  onChange={(e) => setaddprice(e.target.value)}
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="49.99"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="rating"
                  className="block text-sm font-semibold text-foreground"
                >
                  Rating (0-5)
                </label>
                <input
                  value={addreating}
                  onChange={(e) => setaddreating(e.target.value)}
                  id="rating"
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="4.5"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="students"
                  className="block text-sm font-semibold text-foreground"
                >
                  Students Enrolled
                </label>
                <input
                  value={addstudents}
                  onChange={(e) => setaddstudents(e.target.value)}
                  id="students"
                  type="number"
                  min="0"
                  placeholder="1000"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="duration"
                className="block text-sm font-semibold text-foreground"
              >
                Course Duration
              </label>
              <input
                value={addduraction}
                onChange={(e) => setaddduraction(e.target.value)}
                id="duration"
                type="text"
                placeholder="e.g., 12 weeks, 40 hours"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
              />
            </div>

            <button
              onClick={AddICourse}
              className="w-full py-4 px-6 rounded-xl font-semibold text-lg text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Create Course
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All fields are required. Make sure to provide accurate information.
        </p>
      </div>
    </div>
  );
};

export default AddCourse;
