import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Course } from "@/reducers/coursesSlice";

const Wishlist = () => {
  const [favorites, setFavorites] = useState<Course[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    const favs = stored ? JSON.parse(stored) : [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <Navbar />

      {favorites.length === 0 && <p>No any Courses 😢</p>}

      <div className="mt-[100px] flex justify-center gap-[30px] flex-wrap">
        {favorites.map((elem) => (
          <div key={elem.id} className="w-[340px]">
            <Card className="group overflow-hidden border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card">
              <div className="relative overflow-hidden">
                <Link to={`/course/${elem.id}`}>
                  <img
                    src={elem.image}
                    alt={elem.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
                <div>
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {elem.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {elem.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {elem.instructor}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{elem.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{elem.students.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">
                    {elem.rating}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    (Reviews)
                  </span>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-border mt-auto">
                <span className="text-2xl font-bold text-primary">
                  ${elem.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  Free preview
                </span>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
