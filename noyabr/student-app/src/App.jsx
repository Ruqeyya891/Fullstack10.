import StudentCard from "./components/StudentCard";

function App() {

  const students = [
    {
      id: 1,
      name: "Ruqeyya",
      surname: "Əhmədzadə",
      grade: 95,
      image: "https://i.imgur.com/Iz4f792_d.jpeg?maxwidth=520&shape=thumb&fidelity=high"
    },
        {
      id: 2,
      name: "Aysel",
      surname: "Məmmədova",
      grade: 45,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuicibtT-H2aD7t-63sSzGDx_xgq7yd96_4EtPq6Ab7A&s=10"
    },

    {
      id: 3,
      name: "Nadir",
      surname: "Xəyalov",
      grade: 81,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj_Ft7qEPHXuVeHAplrUSSMY_YpIGzVgbbCVApx2Gvw&s=10"
    },

 
    {
      id: 4,
      name: "Murad",
      surname: "Əliyev",
      grade: 78,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lR3HEZhHq3Lk-IgiO2sV0oI7CruGQL_iN5c6cmVZxw&s=10"
    },

   
    {
      id: 5,
      name: "Nigar",
      surname: "Həsənova",
      grade: 35,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn976_yi6q3CVw9sfTqoxuC8iZFYeowEQQlSEUWOeR1w&s=10"
    },
    
    {
      id: 6,
      name: "Leyla",
      surname: "İsmayılova",
      grade: 51,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHADlks94w27VOxh7iH-sDyJv4JQtgq_FmcacygNSEUQ&s=10"
    },
    {
      id: 7,
      name: "Orxan",
      surname: "Hüseynov",
      grade: 60,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpfasmMAtgkAV0WI6f6vXUTVI0uYOG-zenBZOesjphA&s=10"
    },
    {
      id: 8,
      name: "Ayan",
      surname: "Əliyeva",
      grade: 40,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrJZaUD7aQafoL4jhxURXnsa0aLFgrLNPjqApDkJ-SQ&s=10"
    }
];

  return(
    <section className="px-4 md:px-6 mt-6">
     <div className="max-w-5xl mx-auto">
      <div className="max-w-5xl max-auto text-center mb-12 md:mb-16">
        <h2 className= "text-3xl font-bold text-color[black] mb-16 md:text-4xl">Tələbə Siyahısı</h2>
        <p className="text-lg leading-relaxed text-color[gray]">Tələbələrin məlumatları və imtahan nəticələri</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {students.map((student) => (
              <StudentCard
                key={student.id}
                image={student.image}
                name={student.name}
                surname={student.surname}
        grade={student.grade}
              />
            ))}

          </ul>
        </div>
     </div>
    </section>
  )
}



  export default App;