export async function generateStaticParams() {
  const service: any[] = [{ service: '1' }, { service: '2' }];

  return service.map((item) => ({
    service: item.service,
  }));
}

const ServicePage = ({ params }: { params: Promise<{ service: string }> }) => {
  console.log(params);
  return (
    <>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
      perspiciatis necessitatibus repellendus voluptas natus beatae eos, eveniet
      quia, architecto iste, officiis consequatur nemo quam. Nihil incidunt enim
      reprehenderit ipsam atque!
    </>
  );
};

export default ServicePage;
