import React from 'react'

function ServiceCard({title, description, icon}) {
  return (
    <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
    <div className="text-pink-400 mb-6">
       {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-neutral-400 mb-4">{description}</p>
</div>
  )
}

export default ServiceCard
