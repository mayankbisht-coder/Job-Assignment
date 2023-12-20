import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContext";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchedData();
  }, []);

  // get the accessToken from localStorage or sessionStorage
  async function fetchedData() {
    const response = await axiosClient.get("/course/all");
    console.log("got the response", response.result);

    setCourses(response.result);
  }

  async function handleLogout(e) {
    e.preventDefault();
    removeItem(KEY_ACCESS_TOKEN);
    window.location.replace("/", "_self");
    console.log("logged out");
  }

  return (
    <>
      <div className="container">
        <main>
          <h1>Welcome to freeCodeCamp.org</h1>
          <br />
          <div className="desc">
            <p>
              "I have not failed. I've just found 10,000 ways that won't work."
            </p>
            <p>— Thomas A. Edison</p>
          </div>
          <div className="buttons">
            {courses.map((course) => (
              <button key={course._id}>
                {course.title} ({course.duration})
              </button>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
