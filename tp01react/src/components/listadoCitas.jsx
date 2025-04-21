const ListadoDeCitas = ({ citas }) => {
    return (
      <section className="listado-citas">
        {citas.map((cita, index) => (
          <Cita key={index} texto={cita.texto} autor={cita.autor} />
        ))}
      </section>
    );
  };