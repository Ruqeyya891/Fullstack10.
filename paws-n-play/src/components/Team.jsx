import React from 'react';

const Team = () => {
  const members = [
    { name: 'Dr. Olivia Rhye', role: 'Senior Veterinarian', img: '/src/assets/images/team-1.jpg' },
    { name: 'Phoenix Baker', role: 'Asst. Veterinarian', img: '/src/assets/images/team-2.jpg' },
    { name: 'Lana Steiner', role: 'Resident Veterinarian', img: '/src/assets/images/team-3.jpg' },
    { name: 'Demi Wilkinson', role: 'Intern Veterinarian', img: '/src/assets/images/team-4.jpg' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-10">
          <span className="text-2xl">🐾</span>
          <h2 className="text-2xl font-bold">Our Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{m.name}</h3>
                <p className="text-gray-500">{m.role}</p>
              </div>
          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
