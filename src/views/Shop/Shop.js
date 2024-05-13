import React from "react";
import "./Shop.css";
import Header from "../../components/Header/Header";
import SearchComponent from "../../components/cart/SearchComponenet";
import ShowCourseComponent from "../../components/cart/ShowCourseComponenet";
import UserCartComponent from "../../components/cart/UserCartComponenet";
import { useState } from "react";

function Shop() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Beach Moody",
      price: 499,
      image:
        "https://i0.wp.com/www.psdly.com/wp-content/uploads/2021/08/Bangset-Beach-Pack-20-Video-LUTs.jpg?resize=750%2C535&ssl=1",
    },
    {
      id: 2,
      name: "DARK Moody",
      price: 699,
      image:
        "https://i0.wp.com/www.psdly.com/wp-content/uploads/2022/03/Hypenvibe-Dark-Moody-Presets.jpg?resize=750%2C535&ssl=1",
    },
    {
      id: 3,
      name: "Blue Moody",
      price: 799,
      image:
        "https://i0.wp.com/www.psdly.com/wp-content/uploads/2021/12/Blue-Moody-Lightroom-Presets.jpg?resize=750%2C536&ssl=1",
    },
    {
      id: 1,
      name: "Beach Moody",
      price: 499,
      image:
        "https://i0.wp.com/www.psdly.com/wp-content/uploads/2021/08/Bangset-Beach-Pack-20-Video-LUTs.jpg?resize=750%2C535&ssl=1",
    },
    {
      id: 2,
      name: "DARK Moody",
      price: 699,
      image:
        "https://i0.wp.com/www.psdly.com/wp-content/uploads/2022/03/Hypenvibe-Dark-Moody-Presets.jpg?resize=750%2C535&ssl=1",
    },
    {
      id: 3,
      name: "Blue Moody",
      price: 799,
      image:
        "https://i0.wp.com/www.psdly.com/wp-content/uploads/2021/12/Blue-Moody-Lightroom-Presets.jpg?resize=750%2C536&ssl=1",
    },
  ]);

  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses.find(
      (item) => item.product.id === GFGcourse.id
    );
    
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map((item) =>
        item.product.id === GFGcourse.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };



  const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses.filter(
      (item) => item.product.id !== GFGCourse.id
    );
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      
      <main className="App-main">

      <SearchComponent
        searchCourse={searchCourse}
        courseSearchUserFunction={courseSearchUserFunction}
      />
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />
       
        <UserCartComponent
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartCourses={setCartCourses}
        />
       
      </main>
     
    </div>
  );
}

export default Shop;
