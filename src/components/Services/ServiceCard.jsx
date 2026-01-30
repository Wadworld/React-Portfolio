import React from 'react'

const ServiceCard = ({ icon, title, subtitle, description, tags }) => {
  return (
    <div
      className="
        bg-slate-800/80
        border border-white/10
        rounded-2xl
        p-6
        flex
        flex-col
        hover:bg-slate-900/90
        hover:border-white/25
        transition
        transform
        hover:-translate-y-3
        duration-300
        ease-in-out
        h-full
      "
    >
      {/* Icon */}
      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-white text-left mb-1">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm md:text-lg text-left text-gray-400 mb-4">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-left  leading-relaxed mb-6 flex grow">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="
              text-sm
              bg-slate-700
              border border-white/10
              px-3 py-1
              rounded-xl
              text-gray-300
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard
