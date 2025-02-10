export default function Newsletter() {
  return (
    <section className="bg-primary text-textsecondary flex flex-col gap-3 items-center py-4  px-5 w-full">
      <h1 className="md:text-3xl text-xl  font-bold">
        Assine nossa Newsletter
      </h1>
      <p className="text-center font-bold text-textprimary">
        Receba nossas novidades e promoções em primeira mão!
      </p>
      <form className="flex flex-col gap-4 w-full md:w-1/2 px-5">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="rounded-lg p-2 outline-none font-bold placeholder-textprimary"
        />
        <button className="bg-bgsecondary text-textprimary rounded-lg p-2 font-bold">
          Assinar
        </button>
      </form>
    </section>
  )
}
