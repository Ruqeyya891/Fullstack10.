import { features } from "../../data";

export default function Features() {
  return (
    <section className="container-x my-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ id, icon: Icon, title, text }) => (
          <div key={id} className="text-center sm:text-left">
            <Icon className="mx-auto text-4xl text-primary sm:mx-0" />
            <h5 className="mt-4 text-lg font-semibold text-gray-900">{title}</h5>
            <p className="mt-2 text-sm text-gray-500">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
