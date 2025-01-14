import ServiceCard from "../components/serviceCard/serviceCard"

const services = [
  {
    title: "geb.company",
    description: "You are here",
    urls: ["https://geb.company?spinny=true"]
  },
  {
    title: "Matrix Homeserver",
    icon: "nf-md-matrix",
    description: "The Geb Company's private Matrix homeserver",
    urls: ["https://matrix.geb.company"]
  },
  {
    title: "Cinny",
    icon: "nf-md-bird",
    description: "A web-based Matrix client",
    urls: ["https://cinny.geb.company"]
  },
  {
    title: "Minecraft Server",
    icon: "nf-md-minecraft",
    description: "Various maps hosted for Minecraft Java. Homepage to come.",
    urls: ["https://mc.geb.company", "https://smp.geb.company"]
  },
  {
    title: "4get",
    icon: "nf-md-magnify",
    description: "A proxy search engine that doesn't suck",
    urls: ["https://4get.geb.company"]
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