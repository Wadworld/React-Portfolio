import React from 'react'

function ExperienceCard({ role, company, location, description, tech, date }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur border border-white/10 rounded-2xl p-5 shadow-lg text-left">
      <h3 className="text-xl font-bold mb-4 text-white">{role}</h3>
      <p className="text-white/80 font-semibold text-lg mb-3">{company}</p>
      {/* {location && <p className="text-sm text-white/50 mt-3 mb-1">{location}</p>} */}

      <ul className="text-sm text-white/80 list-disc list-inside mb-4 ml-2 space-y-1 md:text-lg">
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      
      <hr className="mt-3 mb-4 text-gray-700"/>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-xs rounded-full bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-xs text-white/80 font-bold mt-3">{date}</p>
    </div>
  );
}


export default ExperienceCard
