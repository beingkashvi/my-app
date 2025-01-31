import Image from "next/image";

const templates = [
  { id: 1, src: "/templates/template1.png", alt: "Template 1" },
  { id: 2, src: "/templates/template2.png", alt: "Template 2" },
  { id: 3, src: "/templates/template3.png", alt: "Template 3" },
  { id: 4, src: "/templates/template4.png", alt: "Template 4" },
  { id: 5, src: "/templates/template5.png", alt: "Template 5" },
  { id: 6, src: "/templates/template6.png", alt: "Template 6" },
];

const TemplateSelector = () => {
  return (
    <div className="bg-black p-6 rounded absolute inset-y-0 right-0">
      <h2 className="text-2xl font-bold mb-6">Select a template:</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="cursor-pointer transition-transform transform hover:scale-105">
            <Image
              src={template.src}
              alt={template.alt}
              width={200}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
