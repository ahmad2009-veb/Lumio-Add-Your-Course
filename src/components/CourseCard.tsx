import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Users, Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  image: string;
  price: number;
  rating: number;
  students: number;
  duration: string;
  category: string;
}

const CourseCard = ({
  id,
  title,
  instructor,
  image,
  price,
  rating,
  students,
  duration,
  category,
}: CourseCardProps) => {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const stored = localStorage.getItem("wishlist");
    const wishlist = stored ? JSON.parse(stored) : [];

    const courseData = {
      id,
      title,
      instructor,
      image,
      price,
      rating,
      students,
      duration,
      category,
    };

    const exists = wishlist.some((item: any) => item.id === id);

    let updated;
    if (exists) {
      updated = wishlist.filter((item: any) => item.id !== id);
      setModalMessage("Course removed from wishlist ❤️");
    } else {
      updated = [...wishlist, courseData];
      setModalMessage("Your course added to wishlist 🎉");
    }

    localStorage.setItem("wishlist", JSON.stringify(updated));
    setShowModal(true);

    setTimeout(() => setShowModal(false), 1000);
  };

  return (
    <Card className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card relative rounded-lg">
      <div className="relative overflow-hidden">
        <Link to={`/course/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>

        <section
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 cursor-pointer bg-red-500/80 p-2 rounded-full hover:bg-red-600 transition-all duration-200 shadow-lg"
        >
          <Heart size={22} color="#fff" />
        </section>
      </div>

      <CardContent className="p-5">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{instructor}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-foreground">{rating}</span>
          <span className="text-sm text-muted-foreground ml-1">(Reviews)</span>
        </div>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-border mt-auto">
        <span className="text-2xl font-bold text-primary">
          {price == 0 ? "Free" : "$" + price}
        </span>
        <span className="text-sm text-muted-foreground">Free preview</span>
      </CardFooter>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 shadow-2xl border-2 border-blue-500 text-center font-semibold text-gray-900 max-w-sm mx-4 animate-fade-in-down">
            <p className="text-lg">{modalMessage}</p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CourseCard;
