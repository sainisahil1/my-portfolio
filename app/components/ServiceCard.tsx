export default function ServiceCard({ title, description, skills }: {title: string, description: string, skills: string}) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-4">{description}</p>
        <p className="text-sm text-gray-500">Skills: {skills}</p>
      </div>
    );
  }
  