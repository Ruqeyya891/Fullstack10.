function StudentCard({ image, name, surname, grade }) {
  return (
    <li className="bg-white py-4 px-2 shadow-sm border border-slate-200 rounded-lg hover:scale-105 transition-all duration-500">

      <div className="bg-gray-50 w-28 h-28 rounded-full mx-auto overflow-hidden sm:w-36 sm:h-36">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={name}
        />
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-slate-900 text-base font-semibold">
          {name} {surname}
        </h3>

        <p className={`text-sm font-semibold mt-2 ${
          grade < 51 ? "text-red-500" : "text-green-600"
        }`}>
          Bal: {grade}
        </p>

        <p className="text-sm text-slate-500 mt-2">
          {grade < 51 ? "Tələbə kəsildi" : "Tələbə imtahandankeçdi"}
        </p>

        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
          grade < 51
            ? "bg-red-100 text-red-600"
            : "bg-green-100 text-green-600"
        }`}>
          {grade < 51 ? "Kəsildi" : "Keçdi"}
        </span>
      </div>

    </li>
  );
}

export default StudentCard;