import ServiceCard from "../components/serviceCard/serviceCard"

const services = [
  {
    title: "4get",
    description: "A proxy search engine that doesn't suck",
    urls: ["https://4get.geb.company"]
  },
  {
    title: "Minecraft Server",
    description: "Various maps hosted for Minecraft Java",
    urls: ["https://mc.geb.company", "https://smp.geb.company"]
  },
  {
    title: "Matrix Homeserver",
    description: "The Geb Company's private Matrix homeserver",
    urls: ["https://matrix.geb.company"]
  },
  {
    title: "Cinny",
    description: "A web-based Matrix client",
    urls: ["https://cinny.geb.company"]
  },
  {
    title: "geb.company",
    description: "You are here",
    urls: ["https://geb.company?spinny=true"]
  }
];

function Page() {
  return (
    <>
      <div className='doc-content'>
        <h1>Services</h1>
        <p>
          The Geb Company Network hosts the following services.
        </p>
        <div className="services" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', paddingBlock: "1rem"}}>
          {services.map(service => (
            <ServiceCard key={service.url} {...service} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Page