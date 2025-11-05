import React, { useEffect, useState } from "react";
import BookCategories from "./BookCategories";
import BookList from "./BookList";

export default function Book() {
  const [books, setBooks] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [showAll, setShowAll] = useState(false);
  


  useEffect(() => {
    fetch("/Department.json")
      .then((res) => res.json())
      .then((data) => setBooks(data.categories));
  }, []);

  const categories = ["All", ...books.map((b) => b.department)];

  const filteredDepartments =
    selectedDepartment === "All"
      ? books
      : books.filter((b) => b.department === selectedDepartment);
      

  return (
    <div className="p-5">
      <BookCategories
        categories={categories}
        selectCategories={selectedDepartment}
        setSelectCategories={(dept) => {
          setSelectedDepartment(dept);
          setShowAll(false);
        }}
      />

      {filteredDepartments.map((dept, deptIndex) => {
        const visibleSemesters =
          selectedDepartment === "All"
            ? showAll
              ? dept.semesters
              : dept.semesters.slice(0, 1)
            : dept.semesters;

        return (
          <div key={deptIndex} className="my-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-600">
              {dept.department}
            </h2>

            {visibleSemesters.map((semester, semIndex) => (
              <div key={semIndex} className="mb-5">
                <h3 className="text-lg font-semibold mb-2">
                  {semester.semester}
                </h3>
                <BookList books={semester.subjects} />
              </div>
            ))}

            {selectedDepartment === "All" && dept.semesters.length > 1 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-5 py-2 bg-amber-500 text-white rounded hover:bg-black transition"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
