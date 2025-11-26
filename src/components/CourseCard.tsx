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
  return (
    <Card className="group overflow-hidden border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="relative overflow-hidden">
        <Link to={`/course/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
        <div>
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {category}
          </Badge>
          <section
            onClick={(e) => {
              e.stopPropagation();

              const stored = localStorage.getItem("favorites");
              const favorites = stored ? JSON.parse(stored) : [];

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

              const exists = favorites.some((item: any) => item.id === id);

              let updated;

              if (exists) {
                updated = favorites.filter((item: any) => item.id !== id);
              } else {
                updated = [...favorites, courseData];
              }

              localStorage.setItem("favorites", JSON.stringify(updated));

              console.log("Updated favorites:", updated);
            }}
            className="absolute top-3 right-3 cursor-pointer bg-red-500/80 p-2 rounded-full"
          >
            <Heart
              onClick={() => alert("Your Course added in wishlis")}
              size={22}
              color="#fff"
            />
          </section>
        </div>
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
            <span>{Number(students).toLocaleString()}</span>
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
    </Card>
  );
};

export default CourseCard;
