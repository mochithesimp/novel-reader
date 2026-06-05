import EbookCard from "../../components/ebooks/EbookCard";
import { ebookList } from "../../constants/ebookData";

const Ebooks = () => (
  <section className="bg-ww-body py-10 pb-16">
    <div className="ww-container">
      <h1 className="mb-8 text-3xl font-bold text-ww-text-bright md:text-4xl">Ebooks</h1>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {ebookList.map((ebook) => (
          <EbookCard key={ebook.id} ebook={ebook} />
        ))}
      </div>
    </div>
  </section>
);

export default Ebooks;
