import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Footer from "./Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      //   console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Error while Fetching", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="flex w-[1200px]  mx-auto flex-wrap justify-center gap-2 mt-2">
          {data.length > 0 ? (
            data.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p>No product available</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
