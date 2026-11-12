import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-gray-500">Səhifə tapılmadı.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark"
      >
        Ana səhifəyə qayıt
      </Link>
    </section>
  );
}
