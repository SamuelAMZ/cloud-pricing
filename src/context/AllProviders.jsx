import { createContext } from "react";

const AllProviderContext = createContext();

export const AllProvidersProvider = ({ children }) => {
  const AllProviders = [
    {
      name: "linode",
      full: "Linode",
      id: 1,
      tags: "linode",
      color: "linear-gradient(to right, #8e2de2, #4a00e0)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/linode",
      storage: ["block", "object"],
      pricePerMo: {
        compute: true,
        database: true,
        storage: true,
        networking: false,
      },
      pricePerHo: {
        compute: true,
        database: false,
        storage: false,
        networking: true,
      },
    },
    {
      name: "aws",
      full: "Amazon Web Services",
      id: 2,
      tags: "amazon web services aws",
      color: "linear-gradient(to right, #ff416c, #ff4b2b)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/aws",
      storage: ["S3Standard", "S3OneZone"],
      pricePerMo: {
        compute: true,
        database: true,
        storage: true,
        networking: false,
      },
      pricePerHo: {
        compute: false,
        database: false,
        storage: false,
        networking: true,
      },
    },
    {
      name: "gcp",
      full: "Google Cloud Platform",
      id: 3,
      tags: "Google Cloud Platform gcp",
      color: " linear-gradient(to right, #000428, #004e92)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/gcp",
      storage: ["standard", "nearline"],
      pricePerMo: {
        compute: false,
        database: false,
        storage: true,
        networking: false,
      },
      pricePerHo: {
        compute: true,
        database: true,
        storage: false,
        networking: true,
      },
    },
    {
      name: "azure",
      full: "Azure",
      id: 4,
      tags: "azure",
      color: "linear-gradient(to right, #659999, #f4791f)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/azure",
      storage: ["premium", "standard"],
      pricePerMo: {
        compute: true,
        database: false,
        storage: true,
        networking: false,
      },
      pricePerHo: {
        compute: false,
        database: true,
        storage: false,
        networking: true,
      },
    },

    {
      name: "digital Ocn",
      full: "Digital Ocean",
      id: 5,
      tags: "digital ocean digital ocn digitalo",
      color: "linear-gradient(to right, #396afc, #2948ff)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/digitalOcean",
      storage: ["block"],
      pricePerMo: {
        compute: true,
        database: true,
        storage: true,
        networking: false,
      },
      pricePerHo: {
        compute: true,
        database: false,
        storage: false,
        networking: true,
      },
    },
    {
      name: "ovh cloud",
      full: "Ovh Cloud",
      id: 6,
      tags: "ovh cloud",
      color: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/ovh",
      storage: ["block", "object"],
      pricePerMo: {
        compute: false,
        database: false,
        storage: true,
        networking: false,
      },
      pricePerHo: {
        compute: true,
        database: true,
        storage: false,
        networking: true,
      },
    },
    {
      name: "vultr",
      full: "Vultr",
      id: 7,
      tags: "vultr",
      color: "linear-gradient(to right, #4e54c8, #8f94fb)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/vultr",
      storage: ["block", "object"],
      pricePerMo: {
        compute: true,
        database: true,
        storage: true,
        networking: false,
      },
      pricePerHo: {
        compute: true,
        database: true,
        storage: false,
        networking: true,
      },
    },
  ];

  return (
    <AllProviderContext.Provider value={AllProviders}>
      {children}
    </AllProviderContext.Provider>
  );
};

export default AllProviderContext;
